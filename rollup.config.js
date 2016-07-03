var commonjs = require('rollup-plugin-commonjs');

module.exports = {
    entry: 'src/index.js',
    format: 'iife',
    moduleName: 'repro77',
    plugins: [
        commonjs({
            include: 'vendor/**'
        })
    ]
};