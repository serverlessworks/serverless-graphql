import { Construct } from "constructs";
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const graphqlLambda = new NodejsFunction(this, "graphqlLambda", {
      entry: `${__dirname}/../src/lambda.ts`,
      runtime: Runtime.NODEJS_16_X,
      logRetention: RetentionDays.ONE_WEEK,
    });

    const api = new LambdaRestApi(this, "graphqlEndpoint", {
      handler: graphqlLambda,
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'X-Api-Key',
          'X-Amz-Date',
          'Content-Type',
          'Authorization',
        ],
        allowMethods: ['OPTIONS', 'POST'],
        allowCredentials: true,
        allowOrigins: ['http://localhost:3000'],
      },
    });

    // 👇 create an Output for the API URL
    new CfnOutput(this, 'apiUrl', { value: api.url });
  }
}
