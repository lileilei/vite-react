import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import  {  viteExternalsPlugin  }  from  'vite-plugin-externals'
import pkg from "./package.json"
// import myPlugin from './plugins/vite-plugin-react-virtual-file';
import federation from './plugins/vite-plugin-react-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
    reactRefresh(),
    // federation({
    //   remotes: {
    //     foo_app1: "rwebpackremote",
    //     foo_rollup_spa: "rollup_spa",
    //   },
    //   shared: {
    //     "react": {
    //       singleton: true,
    //       requiredVersion: pkg.dependencies.react,
    //     },
    //     "react-dom": {
    //       singleton: true,
    //       requiredVersion: pkg.dependencies["react-dom"],
    //     }, 
    //   },
    // })
  ]
})
