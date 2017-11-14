const gulp = require('gulp')
const fs = require('fs')
const nodemon = require('gulp-nodemon')
const sourcemaps = require('gulp-sourcemaps')

var jsScript = 'node'
if (process.env.npm_config_argv !== undefined && process.env.npm_config_argv.indexOf('debug') > 0) {
  jsScript = 'node debug'
}


gulp.task('nodemon', function () {
  return nodemon({
    script: 'server/build/dev-server.js',
    execMap: {
      js: jsScript
    },
    verbose: true,
    ignore: ['build/', 'src/', 'nodemon.json', '.git', 'node_modules/', 'gulpfile.js'],
    env: {
      NODE_ENV: 'development'
    },
    ext: 'js json'
  })
})

gulp.task('default', ['nodemon'], function () {
})
