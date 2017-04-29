var
	gulp = require('gulp'),
	sass = require('gulp-sass'),
//	jsmin = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	minicss = require('gulp-clean-css'),
	livereload = require('gulp-livereload');

gulp.task('sass', function() {
	//	return gulp.src(['./sass/**/*.scss','!sass/index.scss'],{base:'pages'})
	return gulp.src(['./sass/**/*.scss', '!sass/index.scss'])
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		//		.pipe(minifycss())
		.pipe(minicss())
		.pipe(gulp.dest('./css'));
});
gulp.task('jsmin', function() {
	return gulp.src('./static/js/**/*.js')
//		.pipe(uglify())
		.pipe(gulp.dest('./js'))
		.on('error', function(err) {
			console.error('Error in compress task', err.toString());
		});
});
//gulp.task('compress', function () {
//function createErrorHandler(name) {
//  return function (err) {
//    console.error('Error from ' + name + ' in compress task', err.toString());
//  };
//}
//
//return gulp.src('lib/*.js')
//  .on('error', createErrorHandler('gulp.src'))
//  .pipe(uglify())
//  .on('error', createErrorHandler('uglify'))
//  .pipe(gulp.dest('dist'))
//  .on('error', createErrorHandler('gulp.dest'));
//});
gulp.task('default', function() {
	console.log('默认任');
});
//gulp.task('one',function(a){
////one是一个异步执行的任务
//setTimeout(function(){
//  console.log('one is done')
//  a();
//},5000);
//});
//
////two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
//gulp.task('two',['one'],function(){
//console.log('two is done');
//});
gulp.task('one',function(a){
  var stream = gulp.src('client/**/*.js')
      .pipe(dosomething()) //dosomething()中有某些异步操作
      .pipe(gulp.dest('build'));
    return stream;
});

//two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
gulp.task('two',['one'],function(){
  console.log('two is done');
});