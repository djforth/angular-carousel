var gulp   = require("gulp");
// var babel = require("gulp-babel");
var coffee = require("gulp-coffee");
var gutil  = require('gulp-util');
var rename = require("gulp-rename");

gulp.task("npm_build", function () {
  return gulp.src("lib/*.coffee")
    .pipe(coffee({bare: true}).on('error', gutil.log))
    // .pipe(babel().on('error', gutil.log))
    // .pipe(rename(function(path){
    //   path.basename = path.basename.replace(".es6", "")
    // }

    // ))
    .pipe(gulp.dest("./modules"));
});