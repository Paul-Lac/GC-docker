import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: ["src/graphql-queries/*.ts"],
  generates: {
    "./src/generated/graphql-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
