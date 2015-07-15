module.exports = function (grunt) {

    grunt.initConfig({
      karma: {
        unit: {
          configFile: 'karma.conf.js'
        }
      }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test:karma', 'run all karma test', function () {
      grunt.config.set('karma.options.singleRun', false);
      grunt.config.set('karma.options.browsers', ['PhantomJS']);
      grunt.config.set('karma.options.mochaReporter', {output: 'minimal'});
      grunt.task.run('karma');
    });

};
