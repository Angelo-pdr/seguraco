module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/styles/main.css': 'src/styles/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['src/styles/*.scss'],
                tasks: ['sass']
            }
        },
        replace :{
            dev:{
                options:{
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ],
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options:{
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files:{
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.registerTask('default', ['watch'])
}