module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['FirefoxDeveloper'],
    files: ['spec/**/*.js'],
    frameworks: ['jasmine'],
    logLevel: config.LOG_DEBUG,

    preprocessors: {
      'js/**/*.js': ['sourcemap', 'webpack'],
      'js/**/*.jsx': ['sourcemap', 'webpack'],
      'spec/**/*.js': ['sourcemap', 'webpack' ],
    },

    webpack: {
      devtool: 'inline-source-map',

      // See https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md#react-15-compatibility
      // and https://github.com/airbnb/enzyme/issues/968
      externals: {
        'react-addons-test-utils': true,
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },

      module: {
        rules: [
          {
            test: /^.+\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react'] }
          },
        ]
      }
    },
  })
};
