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
// css
gulp.taks("css", function() {
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
// index.html
gulp.task("html", function() {
  gulp.src("./public/*.html")
    .pipe(gulp.dest("./build/"))
    .pipe(connect.reload());
});
// html templates
gulp.task("templates", function() {
  gulp.src("./public/templates/**/*.html")
    .pipe(gulp.dest("./build/templates/"))
    .pipe(connect.reload());
});
// javascript
gulp.task("js", function() {
  gulp.src("./public/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js/"))
    .pipe(connect.reload());
});
// images
gulp.task("img", function(){
  gulp.src("./public/imgs/*")
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest("./build/imgs/"))
    .pipe(connect.reload());
});
// connect
gulp.taks("connect", function() {
  connect.server({
    root: "build",
    livereload: true
  });
});
// watch
gulp.task("watch", function() {
  gulp.watch("./public/css/*.css", ["css"]);
  gulp.watch("./public/*.html", ["html"]);
  gulp.watch("./public/templates/**/.html", ["templates"])
  gulp.watch("./public/js/**/*.js", ["js"]);
});
// default
gulp.task("default", ["html", "templates", "css", "js", "connect", "watch"]);
