const aws = require("aws-sdk"); //? lambda 패키지에 내장된 "aws-sdk" 기능 이용하기.
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

exports.handler = async (event, context, callback) => {
  // insert code to be executed by your lambda trigger

  //? Save a new user to DynamoDB. 새 유저정보 DB 에 저장하기.
  // event event.request.userAttributes.(sub, email)
  //? sub 은 AWS Amplify - Auth 에 등록된 계정별로 자동으로 생성되는 고유 값이다.
  //? 이 값을 이용해서 DataBase 의 유저와 Auth 의 유저를 연결한다.

  if (!event.request?.userAttributes?.sub) {
    console.log("No sub provided");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  //? https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property
  //? 를 참조해서 작성.
  const userItem = {
    __typename: { S: "User" },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: "1" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.name },
    phone_number: { S: event.request.userAttributes.phone_number },
    bank: { S: event.request.userAttributes.bank },
    accountnumber: { S: event.request.userAttributes.accountnumber },
    school: { S: event.request.userAttributes.school },
    college: { S: event.request.userAttributes.college },
    birthday: { S: event.request.userAttributes.birthday },
    agree: { BOOL: event.request.userAttributes.birthday },
  };

  const params = {
    Item: userItem,
    TableName: tableName, //? where we want to write.
  };

  // Save a new user to DynamoDB
  try {
    await ddb.putItem(params).promise();
    console.log("success");
  } catch (error) {
    console.log("PostConfirmation 에러발생:");
    console.log(error);
  }
};
