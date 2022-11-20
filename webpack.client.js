const path = require('path');

module.exports = {
    entry :'./src/client/index.js',
    output: {
        path:path.resolve(__dirname,'public'),
        filename: 'client-build.js'
    },
    module : {
        rules: [
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:[
                        'react'
                    ]
                }
            }
        ]
    }

}