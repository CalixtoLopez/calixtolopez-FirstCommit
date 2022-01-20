'use strict';

const gulp = require('gulp');
//const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

//logs message
gulp.task('message',async function(){
  return console.log('Gulp is running');
});

//Copy ALL HTML files
//con esto seleccionamos todos los html para crear un directorio llamado dist
gulp.task('copyHtml', async function(){
  //Seleccionamos con la funcion src todos los ficheros con *. html ó directorio/*.html
  gulp.src('*.html') //seleciona todos los html
    .pipe(gulp.dest('dist')); //genera todos los htmlen el directorio ==> dist/index.html
});
/**
 * npm install --save-dev gulp-imagemin
 * Add new package: const imagemin = require('gulp-imagemin')
 
 */

//Optimaze Images
gulp.task('imageMin', async function(){ // aplicamos una function arrow 
  gulp.src('src/images/*') //lo que le estamos dicindo que en esta ruta seleccciones todos los ficheros 
  .pipe(imagemin()) //procesa la imagenes
  .pipe(gulp.dest('dist/images'));//copia el renderizado de las imagenes en la siguiente ruta dir=> dis/timages
});


//Minify JS

gulp.task('minify', async function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));

});

// Compile Sass
gulp.task('sass', async function(){
  gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError) )
    .pipe(gulp.dest('dist/css'));
});
//defaulp  gulp
gulp.task('default',async function(){
  return console.log('Gulp is running');
});
