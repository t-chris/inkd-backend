import handler from "./libraries/handler";
import dynamoDB from "./libraries/dynamodb";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: { //Partition and sort keys.
      userid: event.requestContext.identity.cognitoIdentityId, // - 'userId' from Cognito Identity IDs.
      noteid: event.pathParameters.id // - 'noteId': path parameter IDs.
    }
  };

  const result = await dynamoDB.get(params);
  if ( !result.Item ) {
    throw new Error("Item not found.");
  }

  return result.Item;
});
