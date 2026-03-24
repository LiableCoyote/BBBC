module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: ['scripts/**/*.js'],
  coverageReporters: ['text', 'lcov'],
};
