var fs = require('fs');
const path = require('path')

const src = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8')

var minify = require('html-minifier').minify;
var result = minify(src, {
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true,
});
fs.writeFile(path.resolve(__dirname, 'dist/index.html'), result, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 