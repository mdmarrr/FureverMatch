import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'furever-match',
  webDir: 'www',
  server: {
    "url": "http://10.0.2.2:8100",
    "cleartext": true
  }
};

export default config;