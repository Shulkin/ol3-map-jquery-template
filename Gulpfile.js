var gulp = require("gulp");
var concatCss = require("gulp-concat-css");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
// clean build folder
/*
gulp.task("clean", function() {
  gulp.src("")
});
*/
// css
gulp.task("css", function() {
  gulp.src("./public/css/*.css")
    .pipe(concatCss("style.min.css"))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(autoprefixer({
      browsers: ["last 10 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("./build/css/"))
    .pipe(connect.reload());
});
// copy index.html to build folder
gulp.task("copy:html", function() {
  gulp.src("./public/*.html")
    .pipe(gulp.dest("./build/"))
    .pipe(connect.reload());
});
// copy favicon.ico to build folder
gulp.task("copy:favicon", function() {
  gulp.src("./public/*.ico")
    .pipe(gulp.dest("./build/"))
    .pipe(connect.reload());
})
// html templates
gulp.task("templates", function() {
  // copy html templates
  gulp.src("./public/templates/**/*.html")
    .pipe(gulp.dest("./build/templates/"))
    .pipe(connect.reload());
});
// minify javascript files
gulp.task("js", function() {
  gulp.src("./public/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js/"))
    .pipe(connect.reload());
});
// copy images to build folder
gulp.task("img", function() {
  gulp.src("./public/imgs/*.png")
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest("./build/imgs/"))
    .pipe(connect.reload());
});
// connect
gulp.task("connect", function() {
  connect.server({
    root: "build",
    livereload: true
  });
});
// build source files on change
gulp.task("watch", function() {
  gulp.watch("./public/css/*.css", ["css"]);
  gulp.watch("./public/*.html", ["html"]);
  gulp.watch("./public/templates/**/.html", ["templates"])
  gulp.watch("./public/js/**/*.js", ["js"]);
});
// default gulp task
gulp.task("default", [
  // build source files
  "css", "js", "img"
  // copy html templates
  "copy:html", "copy:favicon", "templates",
  // connect to server and watch
  "connect", "watch"
]);
