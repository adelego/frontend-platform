import { AWS } from '@serverless/typescript';
import { mergeStageParams } from '@swarmion/serverless-helpers';

import {
  frameworkVersion,
  projectName,
  sharedEsbuildConfig,
  sharedParams,
  sharedProviderConfig,
} from '@frontend-platform/serverless-configuration';

import { functions } from './functions/config';

const serverlessConfiguration: AWS = {
  service: `${projectName}-frontend-core`, // Keep it short to have role name below 64
  frameworkVersion,
  configValidationMode: 'error',
  plugins: [
    'serverless-esbuild',
    'serverless-iam-roles-per-function',
    'serverless-custom-iam-roles-per-function',
  ],
  provider: sharedProviderConfig,
  params: mergeStageParams(sharedParams, {
    dev: {}, // place here service-specific dev params
    staging: {}, // place here service-specific staging params
    production: {}, // place here service-specific production params
  }),
  functions,
  package: { individually: true },
  custom: {
    esbuild: sharedEsbuildConfig,
  },
  resources: {
    Description: 'FrontendCore service: fill this description',
  },
};

module.exports = serverlessConfiguration;
