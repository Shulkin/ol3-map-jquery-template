var gulp = require("gulp");
var rimraf = require("rimraf");
var clean = require("gulp-rimraf");
var concatCss = require("gulp-concat-css");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
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
// uglify javascript files
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
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest("./build/imgs/"))
    .pipe(connect.reload());
});
// connect to server
gulp.task("connect", function() {
  connect.server({
    root: "build",
    livereload: true
  });
});
// build source files on change
gulp.task("watch", function() {
  gulp.watch("./public/js/**/*.js", ["js"]);
  gulp.watch("./public/css/*.css", ["css"]);
  gulp.watch("./public/*.html", ["public"]);
  gulp.watch("./public/templates/**/.html", ["templates"])
});
// default gulp task
gulp.task("default", [
  "delete:build", // delete previous build
], function() {
  gulp.start(
    // build source and copy public files
    "js", "css", "public", "templates", "img",
    // connect to server and watch
    "connect", "watch"
  );
});
