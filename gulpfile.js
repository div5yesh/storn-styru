var bs = require('browser-sync').create();
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
    HTML: 'src/index.html',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/css/*.css', 'src/css/**/*.css', 'src/index.html'],
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    CSS: ['src/css/*.css', 'src/css/**/*.css'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./",
            routes: {
                "/tabulateme": "./dist"
            }
        },
        port: 8089
    });
});

gulp.task('transform', function () {
    gulp.src(path.JS)
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function () {
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));

    gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST_SRC))
        .pipe(bs.stream());
});

gulp.task('watch', function () {
    gulp.watch(path.ALL, [ 'transform', 'copy']);
});

gulp.task('build', function () {
    gulp.src(path.JS)
      .pipe(react())
      .pipe(concat(path.MINIFIED_OUT))
      .pipe(uglify(path.MINIFIED_OUT))
      .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function () {
    gulp.src(path.HTML)
      .pipe(htmlreplace({
          'js': 'build/' + path.MINIFIED_OUT
      }))
      .pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['browser-sync', 'watch']);
gulp.task('production', ['replaceHTML', 'build']);