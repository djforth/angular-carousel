
var gulp          = require('gulp');
var gutil         = require('gulp-util');
var htmlmin       = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require("gulp-uglify");

main = {
  opts:{module:"$alerts"},
  src:'./templates/*.html',
  dest:'./src'
}

//Leisure only Templates
gulp.task('templates', function () {
    gulp.src(main.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(templateCache(main.opts))
        .pipe(uglify())
        .pipe(gulp.dest(main.dest));
});

gulp.task('templates:watch', function() {
  gulp.watch(main.src, ['templates:main']);
})