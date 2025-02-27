import { defaults } from 'jest-config';

export default {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'feature'],
  moduleNameMapper: { '^uuid$': 'uuid' },
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testMatch: [...defaults.testMatch, '**/*_steps.js', '**/*.spec.mjs'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  watchPathIgnorePatterns: ['pact/logs/*', 'pact/pacts/*'],
};
