/*
 * @Author: your name
 * @Date: 2021-01-13 17:32:53
 * @LastEditTime: 2021-01-14 14:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /desktop-tutorial/watch.js
 */
const shell = require("shelljs");
var watch = require("node-watch");

shell.exec("./push.sh", { async: true });

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
      if (/book/.test(f)) return skip;
      // only watch for js files
      return true;
    },
  },
  function (evt, name) {
    console.log("%s changed.", name);
    if (name.indexOf("md/") > -1) {
      shell.exec("./build.sh");
    }
    shell.exec("./push.sh");
  }
);
