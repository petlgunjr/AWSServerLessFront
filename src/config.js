export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "petlgunjr"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://sbigg1dibe.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_lGPZ9Jt6k",
    APP_CLIENT_ID: "5bjh5mb6qm2oisggh74covo0jr",
    IDENTITY_POOL_ID: "us-east-2:f103177a-c3cc-4069-92ea-e5b34cda2f45"
  }
};