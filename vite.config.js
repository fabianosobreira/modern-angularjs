import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default {
  root,
  build: {
    outDir,
    emptyOutDir: true,
  },
};
