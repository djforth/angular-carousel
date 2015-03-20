var gulp       = require('gulp');
var requireDir = require('require-dir');
var dir        = requireDir('./gulp_tasks');

gulp.task('libs', ['vendor', "vendor:test"]);
gulp.task('build', ["app", "npm_build"])
gulp.task('main', ["app:watch", "karma"])