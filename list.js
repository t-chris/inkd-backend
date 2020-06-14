import handler from "./libraries/handler";
import dynamoDB from "./libraries/dynamodb";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "userid = :userid",
    ExpressionAttributeValues: {
      ":userid": event.requestContext.identity.cognitoIdentityId
    }
  };

  const result = await dynamoDB.query(params);

  return result.Items;
});