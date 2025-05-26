export default {
  modulePathIgnorePatterns: ['<rootDir>/node_test/'],
  coveragePathIgnorePatterns: ['<rootDir>/tests/'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.js'],
  testEnvironment: 'node'
}
