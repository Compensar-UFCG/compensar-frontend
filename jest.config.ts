const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@styles/(.*)$': '<rootDir>/src/app/styles/$1',
    '\\.(scss)$': 'identity-obj-proxy'
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}

module.exports = createJestConfig(customJestConfig)

