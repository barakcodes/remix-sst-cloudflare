/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "yao",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: true, aws: true},
    };
  },
  async run() {
    new sst.cloudflare.Remix("MyWeb");
  },
});
