module.exports = {
  "lint-staged": {
    "(apps|packages)/**/*.{js,ts,jsx,tsx}": [
      "prettier --write",
      "eslint --fix",
    ],
    "*.json": ["prettier --write"],
  },
};
