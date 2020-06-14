import handler from "./libraries/handler";
import dynamoDB from "./libraries/dynamodb";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      userid: event.requestContext.identity.cognitoIdentityId,
      noteid: event.pathParameters.id
    },
    // 'UpdateExpression' defines attributes.
    // 'ExpressionAttributeValues' populates with values.
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null
    },
    // 'ReturnValues' how to return attributes, with ALL_NEW stating to return new attributes.
    ReturnValues: "ALL_NEW"
  };

  await dynamoDB.update(params);

  return { status: true };
});