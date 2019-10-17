export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "petlgunjr"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://sbigg1dibe.execute-api.us-east-2.amazonaws.com/prod/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_lGPZ9Jt6k",
    APP_CLIENT_ID: "5bjh5mb6qm2oisggh74covo0jr",
    IDENTITY_POOL_ID: "us-west-2:9e2d1459-743c-42e7-bb51-9ff25a9d0a1c"
  }
};