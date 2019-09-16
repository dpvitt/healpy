module.exports = {
  preset: 'react-native',
  rootDir: './',
  setupFiles: ['./jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules/(?!(react-native)/)'],
  watchman: true,
};
