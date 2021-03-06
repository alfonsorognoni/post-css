var gulp = require('gulp')
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create()

// servidor de desarrollo

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
})
///tarea procesar css
gulp.task('css', function() {
    var processors = [];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
})

/// watch
gulp.task('watch', function() {
    gulp.watch('./src/*.css', ['css'])
    gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])