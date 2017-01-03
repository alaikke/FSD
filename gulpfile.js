var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// task para o sass
gulp.task('sass', function () {
    return gulp.sass('sass/*.sass').pipe(gulp.dest('css'))
});

//task default
gulp.task('default', function(){
	console.log ('olá');
});