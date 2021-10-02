const aws = require("aws-sdk"); // ? lambda 패키지에 내장된 "aws-sdk" 기능 이용하기.
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

exports.handler = async (event, context, callback) => {
  // insert code to be executed by your lambda trigger

  // ? Save a new user to DynamoDB. 새 유저정보를 DynamoDB 에 저장하기.
  // event event.request.userAttributes.(sub, email)
  // ? sub 은 AWS Amplify - Auth 에 등록된 계정별로 자동으로 생성되는 고유 값이다.
  // ? 이 값을 이용해서 DataBase 의 유저와 Auth 의 유저를 연결한다.

  if (!event.request?.userAttributes?.sub) {
    console.log("No sub provided");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  // ? https://ap-northeast-2.console.aws.amazon.com/dynamodbv2/home?region=ap-northeast-2#edit-item?table=AmplifyDataStore-u5f4f2zyizf5phwbglak3tu2xy-staging&itemMode=2&pk=User-u5f4f2zyizf5phwbglak3tu2xy-staging%3A2021-09-22&sk=08%3A13%3A53.520%3A036f8cf8-27a5-480a-8809-071de56aa0e8%3A1&ref=%23item-explorer%3Ftable%3DAmplifyDataStore-u5f4f2zyizf5phwbglak3tu2xy-staging&route=ROUTE_ITEM_EXPLORER
  // ? https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property
  // ? 를 참조해서 작성.
  const userItem = {
    __typename: { S: "User" },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: "1" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
  };

  const params = {
    Item: userItem,
    TableName: tableName, // ? where we want to write.
  };

  // ? Save a new user to DynamoDB
  try {
    await ddb.putItem(params).promise();
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
