module.exports = {
    plugins: ["matrix-org"],
    extends: ["plugin:matrix-org/babel", "plugin:matrix-org/react"],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // Things we do that break the ideal style
        quotes: "off",
    },
    overrides: [
        {
            files: ["src/**/*.{ts,tsx}"],
            extends: [
                "plugin:matrix-org/typescript",
                "plugin:matrix-org/react",
            ],
            rules: {
                // Things we do that break the ideal style
                "prefer-promise-reject-errors": "off",
                quotes: "off",
                "linebreak-style": 0,

                // We disable this while we're transitioning
                "@typescript-eslint/no-explicit-any": "off",
            },
        },
    ],
    parser: "@babel/eslint-parser",
    parserOptions: { requireConfigFile: "false" },
    babelOptions: { configFile: "./.babelrc" },
};
