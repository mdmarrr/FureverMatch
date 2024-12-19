import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'furever-match',
  webDir: 'www',
  server: {
    url: 'http://172.20.10.3/:5000',
    androidScheme: 'http'
  }
};

export default config;