module.exports = function(grunt) {
  grunt.initConfig({
    // clean build folder
    clean: {
      build: {
        // delete all
        src: ["build/*"]
      }
    },
    // check js files for errors
    jshint: {
      // in parent folder and subfolders
      all: ["public/js/**/*.js"]
    },
    // build js files with requirejs
    requirejs: {
      build: {
        options: {
          // all files are here
          baseUrl: ".", // parent directory
          // main config file for requirejs
          mainConfigFile: "public/js/main.js",
          findNestedDependencies: true,
          //optimize: "uglify", // use uglify
          // requirejs config module name
          name: "public/js/main",
          // output path
          out: "build/js/app.build.min.js"
        }
      }
    },
    // minify css files into style.min.css
    //cssmin: {
    //  build: {
    //    files: {
    //      // all css files in folder and subfolders
    //      "build/css/style.min.css": "public/css/**/*.css"
    //    }
    //  }
    //},
    // copy all other files
    copy: {
      main: {
        files: [{
          expand: true,
          // from public directory
          cwd: "public",
          // copy files
          src: [
            "data/*",
            "favicon.ico",
            "index.html"
          ],
          // to build folder
          dest: "build"
        }]
      }
    },
    // optimize and copy images to build folder
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          // image directory in public
          cwd: "public/img/",
          // all images types
          src: ["**/*.{png,jpg,gif}"],
          // to build folder
          dest: "build/img"
        }]
      }
    },
    useminPrepare: {
      html: ["build/index.html"],
      options: {
        root: ".",
        dest: "build"
      }
    },
    usemin: {
      html: ["build/index.html"],
      options: {
        root: ".",
        dest: "build"
      }
    },
    // watch change css and js files and process above tasks
    watch: {
      css: {
        files: ["public/src/css/**/*.css"],
        tasks: ["cssmin"]
      },
      js: {
        files: ["public/src/js/**/*.js"],
        tasks: ["jshint", "requirejs"]
      }
    },
    // restart server on changes
    nodemon: {
      dev: {
        script: "server.js"
      }
    },
    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ["nodemon", "watch"]
    }
  });
  // load tasks
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-usemin");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  // register build task
  grunt.registerTask("build", [ // what we do on "grunt build"
    "jshint", // find errors in js
    "clean:build", // clean build folder
    "requirejs", // compile js modules
    "copy", // move other data files to build folder
    "imagemin", // optimize images and copy to build folder
    "useminPrepare",
    "concat",
    "cssmin",
    "usemin"
  ]);
  grunt.registerTask("default", [ // default run
    "build", // build application
    "concurrent" // start watch
  ]);
};
