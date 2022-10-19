# Serverless GraphQL

AWS Lambda - Apollo GraphQL - Typescript - CDK

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Create an AWS profile for deploting the app
[This article](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/keys-profiles-credentials.html) how to create and aws profile file and add your aws credentials into it. 
the current setup expects a `dev` profile

## Deploring the app 
```bash
npm run cdk deploy
```

## Useful commands

* `npm run build`       compile typescript to js
* `npm run watch`       watch for changes and compile
* `npm run test`        perform the jest unit tests
* `npm run cdk deploy`  deploy this stack to your default AWS account/region
* `npm run cdk diff`    compare deployed stack with current state
* `npm run cdk synth`   emits the synthesized CloudFormation template


## Run query
```bash
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://xxxxxxxxxx.execute-api.eu-west-1.amazonaws.com/prod/' \
  --data '{"query":"query { hello }"}'
```
