const gulp = require('gulp');

gulp.task('copy-canknow-icon',  function() {
  return gulp.src('./node_modules/canknow-icon/src/assets/**/*')
    .pipe(gulp.dest('./src/assets'));
});
