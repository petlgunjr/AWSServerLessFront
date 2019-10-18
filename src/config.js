export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "petlgunjr"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://sbigg1dibe.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-west-2_lx9pI2rvu",
    APP_CLIENT_ID: "7qlfaaod0fep8a1an2o8ok2aqc",
    IDENTITY_POOL_ID: "us-west-2:9e2d1459-743c-42e7-bb51-9ff25a9d0a1c"
  }
};