/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tableName = process.env.TABLENAME;

exports.handler = async (event) => {
  // insert code to be executed by your lambda trigger
  // save a new user to dynamoDB

  if (!event?.request?.userAttributes?.sub) {
    console.log("No sub provided.");
    return;
  }
  const now = new Date();

  const userItem = {
    __typename: { S: "User" },
    _lastChangedAt: { N: now.getTime().toString() },
    _version: { N: "1" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
  };

  const params = {
    Item: userItem,
    TableName: tableName,
  };

  try {
    await ddb.putItem(params).promise();
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};
