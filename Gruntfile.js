'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    // sass
    sass: {
      build: {
        options: {
          style: 'nested'
        },
        src: ['assets/sass/styles.scss'],
        dest: 'assets/css/styles.css'
      }
    },
    autoprefixer: {
      options: {

      },
      build: {
        src: 'assets/css/styles.css'
      },
    },
    cssmin: {
      options: {
      },
      build: {
        src: 'assets/css/*.css',
        dest: 'assets/release/main.min.css'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      build: [
        'Gruntfile.js',
        'assets/js/init.js',
      ]
    },
    // concat
    concat: {
      options: {
        separator: ';',
      },
      // combine all js files into one
      build: {
        src: ['assets/js/bootstrap.min.js','assets/js/init.js'],
        dest: 'assets/js/app.js',
      },
    },
    uglify: {
      options: {
        mangle: false //To prevent changes to your variable and function names
      },
      build: {
        files: {
          'assets/release/app.min.js': 'assets/js/app.js'
        }
      }
    },
    // clean (delete files)
    clean: {
      release: [
        'assets/css',
        'assets/js',
        'assets/sass',
      ]
    },
    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images/'
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['index.html'],
      },
      sass: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
      },
      js: {
        files: ['assets/js/init.js'],
        tasks: ['jshint', 'conca', 'uglify']
        },
    },
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Register tasks
  grunt.registerTask('dev', [
    'watch'
  ]);

  grunt.registerTask('build', [
    'sass',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'imagemin',
  ]);

  grunt.registerTask('deploy', [
    'sass',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'imagemin',
    'clean',
  ]);

};
