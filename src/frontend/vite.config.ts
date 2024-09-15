import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const envPrefix = process.env.NODE_ENV;

  return defineConfig({
    plugins: [react(), svgr()],
    envDir: `./env/${envPrefix}`,
  });
};