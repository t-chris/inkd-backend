export default function handler(lambda) { //Handler wrapper around Lambda function.
    return function (event, context) {
      return Promise.resolve()
        .then(() => lambda(event, context))
        // 200.
        .then((responseBody) => [200, responseBody])
        // 500.
        .catch((e) => {
          return [500, { error: e.message }];
        })
        // Return response.
        .then(([statusCode, body]) => ({
          statusCode,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(body),
        }));
    };
  }