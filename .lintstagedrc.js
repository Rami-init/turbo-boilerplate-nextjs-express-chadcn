module.exports = {
  "(apps|packages)/**/*.{js,ts,jsx,tsx}": ["prettier --write --ignore-unknown"],
  "(apps|packages)/**/*.{ts,tsx}": ["eslint --fix"],
  "*.json": ["prettier --write"],
};
