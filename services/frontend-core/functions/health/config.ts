import { getHandlerPath, LambdaFunction } from '@swarmion/serverless-helpers';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/frontend-core/health',
      },
    },
  ],
};

export default config;
