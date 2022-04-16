// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverageFrom: [
    "**/*.ts",
    "!**/node_modules/**",
    "!**/*Model.ts",
    "!**/*Schema.ts",
    "!**/*.d.ts",
  ],
  coverageReporters: ["json", "html", "lcov"],
  collectCoverage: false,
};

// export default config;

// // Or async function
// module.exports = async () => ({
//   verbose: true,
//   preset: 'ts-jest',
//   coverageDirectory: 'coverage',
//   testEnvironment: "node",
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
// });

// export default config;
