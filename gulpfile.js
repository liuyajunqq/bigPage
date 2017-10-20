var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var fs = require('fs');
var url = require('url');
var path = require('path');
gulp.task('webserver', function () {
    gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
    gulp.src('./')
        .pipe(webserver({
            port: 8090,
            host: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            middleware: function (req, res, next) {
                var paths = url.parse(req.url, true).path;
                var pathsName = path.join(__dirname, './Data', paths + '.json');
                fs.exists(pathsName, function (exists) {
                    if (exists) {
                        fs.readFile(pathsName, function (err, data) {
                            if(err){
                                throw err;
                            }
                            res.writeHead(200, {
                                'content-type': 'text/json;charset=utf-8',
                                'Access-Control-Allow-Origin': 'http://localhost:63342'
                            });
                            res.end(data.toString())
                        })
                    }
                })
            }
        }))
});