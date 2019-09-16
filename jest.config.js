module.exports = {
  preset: 'react-native',
  rootDir: './',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules/(?!(react-native)/)'],
  watchman: true,
};
