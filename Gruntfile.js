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
            build: [ 'Gruntfile.js' ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        //jqlint检查jq 插件的配置信息
        jqlint: {
            build: [ 'pc/js/**/*.js' ]
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
        },

        //copy 复制文件 插件配置信息 cwd:排除复制的路径 flatten:是否去除路径
        copy: {
            js_components: {
                expand: true,
                cwd: 'bower_components/',
                src: ['*/dest/*.min.js'],
                dest: 'pc/js/components/',
                flatten: true,
            },
            css_components: {
                expand: true,
                cwd: 'bower_components/',
                src: ['**/*.min.css'],
                dest: 'pc/css/components/',
                flatten: true,
            },
            js: {
                expand: true,
                cwd: 'pc/',
                src: ['js/**/*.js'],
                dest: 'test/'
            },
            css: {
                expand: true,
                dot: true,
                cwd: 'pc/',
                src: ['css/**/*.css'],
                dest: 'test/'
            },
            html: {
                expand: true,
                cwd: 'pc/',
                src: ['**/*.html'],
                dest: 'test/'
            },
            json: {
                expand: true,
                cwd: 'pc/',
                src: ['**/*.json'],
                dest: 'test/'
            },
            all:{
                expand: true,
                cwd: 'pc/',
                src: ['**/*'],
                dest: 'test/'
            }
        },

        //clean 清除文件 插件配置信息
        clean: {
            test: {
                src: ['test/*/**','test/*.html']
            }
        },

        //wiredep 自动引入bower依赖的脚本 插件配置信息
        wiredep: {
            app: {
                src: [
                    'pc/index.html'
                ],
                ignorePath: /^(\.\.\/)*\.\./,
                Options: {
                    // cwd: ['app/js/**/*.js']
                }
            }
        },

        //sails-linker 自动引入js css 插件配置信息
        'sails-linker': {
            js: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script type="text/javascript" src="%s"></script>',
                    appRoot: 'pc/'
                },
                files: {
                    'pc/*.html': ['pc/js/**/*.js']
                }
            },
            css: {
                options: {
                    startTag: '<!--CSS-->',
                    endTag: '<!--CSS END-->',
                    fileTmpl: '<link rel="stylesheet" type="text/css" href="%s"></script>',
                    appRoot: 'pc/'
                },
                files: {
                    'pc/*.html': ['pc/css/**/*.css']
                }
            } 
        },

        //watch 监听文件改变保存后 执行tasks
        watch: {
            html: {
                files: ['pc/**/*.html'],
                //tasks: ['newer:copy:html'],
                options:{
                    livereload:true
                }
            },
            css: {
                files: ['pc/css/**/*.css'],
                //tasks: ['newer:copy:css'],
                options:{
                    livereload:true
                }
            },
            js: {
                files: ['pc/js/**/*.js'],
                tasks: ['newer:copy:js'],
                options:{
                    livereload:true
                }
            },
            json: {
                files: ['pc/json/**/*.json'],
                tasks: ['newer:copy:json'],
                options:{
                    livereload:true
                }
            }
        },

        //watch 监听文件改变保存后 执行tasks
        connect: {
            server: {
                options: {
                    //设置端口
                    port: 9009,
                    hostname:'localhost',
                    livereload:true
                }
            }
        },
    });

    //监听事件
    // grunt.event.on('watch', function(action,filepath) {
    //     grunt.log.writeln('打印到终端');
    // });

    //告诉 grunt 当我们在终端输入 grunt XXX 时需要做些什么（注意先后顺序）
    grunt.registerTask('going',['jshint','jqlint','copy']);

    //配置 grunt 我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-concat');//合并js css
    grunt.loadNpmTasks('grunt-contrib-uglify');//压缩js
    grunt.loadNpmTasks('grunt-contrib-jshint');//js检查
    grunt.loadNpmTasks('grunt-contrib-copy');//复制文件
    grunt.loadNpmTasks('grunt-contrib-clean');//清理文件
    grunt.loadNpmTasks('grunt-wiredep');//引入bower 依赖的js到html
    grunt.loadNpmTasks('grunt-sails-linker');//引入js css到html
    grunt.loadNpmTasks('grunt-jqlint');//jq检查
    grunt.loadNpmTasks('grunt-contrib-watch');//监听服务
    grunt.loadNpmTasks('grunt-contrib-connect');//创建服务 与 livereload 实现刷新
    grunt.loadNpmTasks('grunt-newer');//监听变化的文件

};