module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.js'
  ],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
