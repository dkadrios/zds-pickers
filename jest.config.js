module.exports = {
  coveragePathIgnorePatterns: ['<rootDir>/lib/__config__'],
  coverageReporters: ['json', 'lcov'],
  globals: {},
  moduleNameMapper: {
    '\\.(css|scss)': '<rootDir>/node_modules/jest-css-modules',
    '\\.(svg|png|jpg)': '<rootDir>/node_modules/blank-module',
  },
  modulePathIgnorePatterns: ['<rootDir>/lib/__config__', '<rootDir>/lib/__mocks__'],
  resetMocks: false,
  roots: ['<rootDir>/lib'],
  setupFiles: [
    '<rootDir>/lib/__config__/tempPolyfills.js',
    '<rootDir>/lib/__config__/global.js',
    '<rootDir>/lib/__config__/fetch-mock.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/lib/**/?(*.)(spec).js?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  verbose: false,
}