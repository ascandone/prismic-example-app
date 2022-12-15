import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./src/generated/prismic.types.ts",
  models: ["./customtypes/**/index.json", "./slices/**/model.json"],
};

export default config;
