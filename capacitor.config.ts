import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "mimicry",
  webDir: "build",
  bundledWebRuntime: false,
  server: { url: "http://192.168.1.68:8100" },
};

export default config;
