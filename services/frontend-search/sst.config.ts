// eslint-disable-next-line import/named
import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

const sstConfig = {
  config: () => {
    return {
      name: 'frontend-search',
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

export default sstConfig;
