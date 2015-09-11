//包装函数
module.exports = function (grunt) {

    // 任务配置，所有插件的配置信息
    grunt.initConfig({

        //获取 package.json 的信息
        pkg: grunt.file.readJSON('package.json'),

        //uglify压缩js 插件的配置信息
        uglify: {
            options:{
                stripBanners: true,
                banner: '/*! <%= pkg.name %>-<%= pkg.version %>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/test.js',
                dest: 'build/<%= pkg.name %>-<%= pkg.version %>.js.min.js'
            }
        },

        //jshint检查js 插件的配置信息
        jshint: {
            build: [ 'Gruntfile.js','src/*.js' ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        //concat 合并js css 插件配置信息
        concat: {
            js: {
                src: ['src/*.js'],
                dest: 'dest/js/all.js'
            },
            css: {
                src: ['src/*.css'],
                dest: 'dest/css/all.css'
            }
        }

    });

    //告诉 grunt 当我们在终端输入 grunt 或 grunt default 时需要做些什么（注意先后顺序）
    grunt.registerTask('default',['jshint','uglify']);

    //grunt jshint 进行检查js
    grunt.registerTask('jshint',['jshint']);

    //grunt uglify 进行压缩js
    grunt.registerTask('uglify',['uglify']);

    //grunt concat 进行合并文件
    grunt.registerTask('concat',['concat']);

    //配置 grunt 我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-wiredep');

};