"use strict";

function verifyEncode(encoding) {
  const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  return base64regex.test(encoding);
}



function buildResponse(statusCode, body) {
  const response = {
    statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body
  };
  return response;
}



exports.handler = async (event, context) => {
  const { domain_name, logo } = JSON.parse(event.body);

  if (verifyEncode(logo)) {
    return buildResponse(200, "working");
  }
  return buildResponse(400, "Bad Request");
};
