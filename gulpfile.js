var outputPath = './build',
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babel = require('babelify');

function compile(watch) {
    var bundler = watchify(browserify('./source/js/app.js', { debug: true }).transform(babel));
    function rebundle() {
        bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('js/app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputPath));
    }
    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    }
    rebundle();
}

function watch() {
    return compile(true);
};

gulp.task('build', function() { return compile(); });

gulp.task('watch', function() { return watch(); });



gulp.task('copy', function() {
    return gulp.src('./source/*.html')
    .pipe(gulp.dest(outputPath));
});


gulp.task('default', ['watch', 'copy']);