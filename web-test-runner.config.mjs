import { importMapsPlugin } from '@web/dev-server-import-maps';

export default {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            // mock a dependency
            'package-a': '/mocks/package-a.js',
            // mock a module in your own code
            '/src/my-module.js': '/mocks/my-module.js',
          },
        },
      },
    }),
  ],
};

