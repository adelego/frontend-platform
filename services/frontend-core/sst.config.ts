import { NextjsSite } from 'sst/constructs';
import { SSTConfig } from 'sst/project';

const Config = {
  config: () => {
    return {
      name: 'frontend-core',
      region: 'us-east-1',
    };
  },
  stacks: app => {
    app.stack(({ stack }) => {
      const site = new NextjsSite(stack, 'site');

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;

export default Config;
