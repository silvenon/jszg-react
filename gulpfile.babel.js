import gulp from 'gulp';
import browserSync from 'browser-sync';
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';

let bs = browserSync.create();
let b = browserify({
  entries: ['./app/scripts/app.jsx'],
  extensions: ['.jsx'],
  debug: true
}, watchify.args);

b = watchify(b);

function bundle() {
  return b.bundle()
    .on('error', (msg) => {
      gutil.log(msg);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(bs.stream({once: true}));
}

gulp.task('scripts', bundle);
b.on('update', bundle);

gulp.task('serve', ['scripts'], (done) => {
  bs.init({
    notify: false,
    port: 9000,
    server: {
      // the order is important, this way files in .tmp
      // will get precedence in case of a name clash
      baseDir: ['.tmp', 'app']
    }
  }, done);

  gulp.watch([
    'app/index.html'
  ]).on('change', bs.reload);
});
