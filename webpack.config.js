var webpack = require('webpack');

module.exports = {
    entry: {
        'angular2' : [
            'rxjs',
            'reflect-metadata',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'app': './app/main.ts'
    },
    output : {
        filename: './built/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['','.webpack.js','.web.js','.ts','.js']
    },
    module : {
        loaders: [
            {test: /\.ts$/,
                loader: 'ts-loader'}
        ]
    }
}
