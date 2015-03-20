var gulp          = require('gulp');
var gutil         = require('gulp-util');
var minifyHtml    = require("gulp-minify-html");
var templateCache = require('gulp-angular-templatecache');
var uglify        = require("gulp-uglify");

main = {
  opts:{module:"$carousel"},
  src:'./templates/*.html',
  dest:'./lib'
}

//Leisure only Templates
gulp.task('templates:main', function () {
    gulp.src(main.src)
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(templateCache(main.opts))
        .pipe(uglify())
        .pipe(gulp.dest(main.dest));
});

gulp.task('templates:watch', function() {
  gulp.watch(main.src, ['templates:main']);
})