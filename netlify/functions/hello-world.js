exports.handler = async function (event, context) {
  let number = event.queryStringParameters.num || 0;
  if (isNaN(number)) {
    number = 0;
  } else {
    number = parseInt(number);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Multiply X2",
      result: number * 2,
    }),
  };
};
