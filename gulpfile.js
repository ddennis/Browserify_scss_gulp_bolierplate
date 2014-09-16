/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

var requireDir = require('require-dir');  
var gulp = require('gulp');  


/*gulp.task('default', function (){  
  requireDir('./gulp/tasks/development', { recurse: true });  
});*/



gulp.task('build', function (){  
  requireDir('./gulp/tasks/build', { recurse: true });
});



//var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
//requireDir('./gulp/tasks', { recurse: true });

// The default task (called when you run `gulp` from cli)
//gulp.task('default', ['browserify']);






/*
var gulp         = require('gulp');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');



gulp.task('ugly', function() {
    return gulp.src('./build/app.js')
         //.pipe(source('build/app.js')) // gives streaming vinyl file object
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest('./build'));
});
*/