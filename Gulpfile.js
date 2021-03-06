var gulp = require("gulp");
var rimraf = require("rimraf");
var clean = require("gulp-rimraf");
var uglify = require("gulp-uglify");
var concatCss = require("gulp-concat-css");
var minifyCss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var connect = require("gulp-connect");
var nodemon = require("gulp-nodemon");
var runSequence = require("run-sequence");
// delete build folder
gulp.task("delete:build", function(done) {
  return rimraf("./build", done);
});
// clean separate folders
gulp.task("clean:js", function() {
  return gulp.src("./build/js/*", {read: false}).pipe(clean());
});
gulp.task("clean:css", function() {
  return gulp.src("./build/css/*", {read: false}).pipe(clean());
});
gulp.task("clean:public", function() {
  // delete index.html and favicon.ico
  return gulp.src("./build/*{html,ico}", {read: false}).pipe(clean());
});
gulp.task("clean:templates", function() {
  return gulp.src("./build/templates/*", {read: false}).pipe(clean());
});
// bundle javascript files
gulp.task("js", ["clean:js"], function() {
  return gulp.src("./public/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js/"))
    .pipe(connect.reload());
});
// concatenate styles
gulp.task("css", ["clean:css"], function() {
  return gulp.src("./public/css/*.css")
    .pipe(concatCss("style.min.css"))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(autoprefixer({
      browsers: ["last 10 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("./build/css/"))
    .pipe(connect.reload());
});
// copy public files
gulp.task("public", ["clean:public"], function() {
  return gulp.src("./public/*{html,ico}")
    .pipe(gulp.dest("./build/"))
    .pipe(connect.reload());
});
// copy html templates
gulp.task("templates", ["clean:templates"], function() {
  return gulp.src("./public/templates/**/*.html")
    .pipe(gulp.dest("./build/templates/"))
    .pipe(connect.reload());
});
// copy images to build folder
gulp.task("img", function() {
  return gulp.src("./public/imgs/*.png")
    .pipe(gulp.dest("./build/imgs/"))
    .pipe(connect.reload());
});
// rebuild source files on change
gulp.task("watch", function() {
  gulp.watch("./public/js/**/*.js", ["js"]);
  gulp.watch("./public/css/*.css", ["css"]);
  gulp.watch("./public/*.html", ["public"]);
  gulp.watch("./public/templates/**/*.html", ["templates"]);
});
// connect to server
gulp.task("nodemon", ["watch"], function() {
  return nodemon({
    script: "server.js"
  }).on("restart", function() {
    console.log("Restart nodemon");
  });
});
// create build and run development server with watch
gulp.task("build:development", [
  "delete:build" // delete previous build first
], function(callback) {
  console.log("Build development");
  runSequence(
    // build source and copy public files in parallel
    ["js", "css", "public", "templates", "img"],
    // then connect to server and watch source files for change
    ["nodemon", "watch"],
    callback // finally call callback function
  );
});
// simply create build folder
gulp.task("build:production", [
  "delete:build" // delete previous
], function() {
  console.log("Build production");
  // build source files
  gulp.start("js", "css", "public", "templates", "img");
})
// development by default
gulp.task("default", ["build:development"]);
