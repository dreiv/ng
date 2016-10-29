const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: root('dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.html']
    },
    module: {
        rules: [
            {test: /\.(html|css)$/, loader: 'raw'},
            {test: /\.ts/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']}
        ]
    },
    devtool: '#source-map'
};

// Helpers
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
