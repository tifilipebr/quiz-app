import type { Config } from "@react-router/dev/config";

const basePath = process.env.VITE_BASE_PATH ?? "";

export default {
  basename: basePath || "/",
  ssr: false,
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
} satisfies Config;
