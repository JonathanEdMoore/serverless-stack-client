export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-jonathan-moore"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ozpocytvyi.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_lWuDSTD9X",
    APP_CLIENT_ID: "dta1qmlj2qb6a0pgluh7ol2mn",
    IDENTITY_POOL_ID: "us-east-2:3b53d3e3-e8ee-4a32-8d23-3db42972779e"
  },
  STRIPE_KEY: "pk_test_51GuC4rI5kXd6iNB5UB8SmyNX8N5OVmlM0nkIvGwRiR7a2m1jfTuxmSmHqW6HHfqfjYYUg4bpvmYWgWg39OIXje1P00qp4vkGb9",
};