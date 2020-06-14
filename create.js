import * as uuid from "uuid";
import handler from "./libraries/handler";
import dynamoDB from "./libraries/dynamodb";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,

    Item: {
      userid: event.requestContext.identity.cognitoIdentityId,
      noteid: uuid.v1(),
      content: data.content, //From HTTP req.
      attachment: data.attachment, //From HTTP req.
      createdAt: Date.now()
    }
  };

  await dynamoDB.put(params);

  return params.Item;
});