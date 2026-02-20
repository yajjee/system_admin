'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile Sass via sass CLI (Dart Sass)
    exec: {
      sass_setup: {
        cmd: 'npx sass scss/system-setup.scss system-setup.css --no-source-map',
      },
      sass_admin: {
        cmd: 'npx sass scss/system-admin.scss system-admin.css --no-source-map',
      },
    },

    watch: {
      scss: {
        files: ['scss/**/*.scss'],
        tasks: ['exec:sass_setup', 'exec:sass_admin'],
        options: {
          livereload: false,
        },
      },
    },
  });

  grunt.registerTask('sass', ['exec:sass_setup', 'exec:sass_admin']);
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('build', ['sass']);
};
