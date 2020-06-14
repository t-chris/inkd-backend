import handler from "./libraries/handler";
import dynamoDB from "./libraries/dynamodb";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userid: event.requestContext.identity.cognitoIdentityId,
      noteid: event.pathParameters.id
    }
  };

  await dynamoDB.delete(params);

  return { status: true };
});