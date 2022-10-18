import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { options, server } from "./app";

export const handler = startServerAndCreateLambdaHandler(server, options);
