module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
    
        sass : {
            dist : {
                options : {
                    sourcemap : true
                },
                files : [{
                    expand: true,
                    cwd: 'sass',
                    src: 'semanticGrid.scss',
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch : {
            css : {
                files : ['sass/*.scss', 'sass/*/*scss'],
                tasks : ['sass']
            }
        }
    });

    //Tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default',['watch']);

};
