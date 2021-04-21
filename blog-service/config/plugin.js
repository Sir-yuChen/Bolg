'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
   // mysql 的开启配置，已经库的位置
   enable : true,
   package : 'egg-mysql'
}
//解决跨域问题
exports.cors={
   enable: true,
   package: 'egg-cors'
}