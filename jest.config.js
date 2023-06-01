module.exports = {
    testEnvironment: "jsdom",
    roots: ['<rootDir>'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'], 
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
     ],
  };