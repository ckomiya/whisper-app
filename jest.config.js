export default {
  modulePathIgnorePatterns: ['<rootDir>/node_test/'],
  coveragePathIgnorePatterns: ['<rootDir>/tests/'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'node'
}
