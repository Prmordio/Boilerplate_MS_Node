import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
