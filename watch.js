/*
 * @Author: your name
 * @Date: 2021-01-13 17:32:53
 * @LastEditTime: 2021-01-13 17:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /desktop-tutorial/watch.js
 */
const shell = require('shelljs')
var watch = require("node-watch");


shell.exec('./push.sh')

watch(
  "./",
  {
    recursive: true,
    filter(f, skip) {
      // skip node_modules
      if (/\/node_modules/.test(f)) return skip;
      // skip .git folder
			if (/\.git/.test(f)) return skip;
			if (/\.history/.test(f)) return skip;
      // only watch for js files
      return true
    },
  },
  function (evt, name) {
		console.log("%s changed.", name);
		
		shell.exec('./push.sh')
		
  }
);
