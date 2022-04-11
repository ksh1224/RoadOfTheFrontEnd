module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        // alias: {
        //   '@types': './src/@types',
        //   assets: './src/assets',
        //   components: './src/components',
        //   navigation: './src/navigation',
        //   hooks: './src/hooks',
        //   store: './src/store',
        //   utils: './src/utils',
        //   underscore: 'lodash',
        // },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
