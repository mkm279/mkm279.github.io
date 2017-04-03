module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: { // Begin Sass plugin
            dist: {
                options: {
                    sourcemap: 'none',
                    require: 'compass',
                    compass: true
                },
                files: [{
                    expand: true,
                    cwd: 'content-static/css/sass/',
                    src: ['*.scss'],
                    dest: 'content-static/css/stylesheets/',
                    ext: '.css'
                }]
            }
        },

    uglify: { // Begin Uglify plugin
    my_target: {
      files: {
        'content-static/js/homepage.min.js': ['content-static/js/homepage.js'],
        'content-static/js/avatar.min.js': ['content-static/js/avatar.js']
      }
    }
 },

    // uglify: {
    //   build: {
    //     cwd: 'content-static/js/',
    //     src: ['*.js', '!*.min.js'],
    //     dest: 'content-static/js/',
    //     ext: '.min.js'
    //   }
    // },

    cssmin: { // Begin CSS Minify plugin
      target: {
        files: [{
          expand: true,
          cwd: 'content-static/css/stylesheets/',
          src: ['*.css', '!*.min.css'],
          dest: 'content-static/css/stylesheets/',
          ext: '.min.css'
        }]
      }
    }  
  });

  // Load the plugin 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);

};
