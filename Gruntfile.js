module.exports = function(grunt) {


    var sassOptions = { 
        sourcemap : true,
        style     : 'compressed'
    };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
    
        sass : {
            default : {
                options : sassOptions,
                files : {
                    'css/semanticGrid.css': 'sass/semanticGrid.scss',
                }
            },
            lang : {
                options : sassOptions,
                files : {
                    'css/lang-fr/semanticGrid-fr.css': 'sass/compileLanguages/semanticGrid-fr.scss',
                    'css/lang-en/semanticGrid-en.css': 'sass/compileLanguages/semanticGrid-en.scss',
                    'css/lang-pro/semanticGrid-pro.css': 'sass/compileLanguages/semanticGrid-pro.scss'
                }
            }
        },
        watch : {
            css : {
                files : ['sass/*.scss', 'sass/*/*scss'],
                tasks : ['sass:default']
            }
        }
    });

    //Tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default',['watch']);

};
