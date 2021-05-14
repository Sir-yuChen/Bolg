/*
 Navicat Premium Data Transfer

 Source Server         : MYSQL
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 14/05/2021 17:52:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog_admin_menus
-- ----------------------------
DROP TABLE IF EXISTS `blog_admin_menus`;
CREATE TABLE `blog_admin_menus`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `menu_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单ID',
  `menu_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单名称',
  `menu_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单url',
  `parent_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '父级ID',
  `level` int(0) NULL DEFAULT NULL COMMENT '菜单级别（0：一级菜单，1：二级菜单:2：三级菜单）',
  `menu_status` int(0) NULL DEFAULT NULL COMMENT '菜单状态1：正常 2：禁用',
  `creactDateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '菜单创建时间',
  `lastDateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  `orderNum` int(0) NULL DEFAULT NULL COMMENT '排序',
  `comp_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对应组件名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_admin_menus
-- ----------------------------
INSERT INTO `blog_admin_menus` VALUES (1, '54g1df5tgf5d1g5f21', '网站数据统计', '/dataStatistics/DataStatistics', '0', 0, 1, '2021-05-13 09:55:54', '2021-05-11 15:20:49', 1, NULL);
INSERT INTO `blog_admin_menus` VALUES (2, 'asd4es65654fdd5455fds3', '写作发布', '/index/AddArticle', '0', 0, 1, '2021-05-13 09:56:32', '2021-05-11 15:26:41', 2, NULL);
INSERT INTO `blog_admin_menus` VALUES (3, 'd54fsd4e23sd5f4efd2s', '工作台', '/workbench/Index', '0', 0, 1, '2021-05-13 09:58:43', '2021-05-11 15:27:13', 3, NULL);
INSERT INTO `blog_admin_menus` VALUES (4, 'sf54re653g1355rt53sfd13rq45', '基本信息管理', '/basicInfo/Index', '0', 0, 1, '2021-05-13 09:59:57', '2021-05-11 15:27:58', 4, NULL);
INSERT INTO `blog_admin_menus` VALUES (5, 'd5s4f5d15f4dxf4a534534f', '权限管理', '/power/Index', '0', 0, 1, '2021-05-13 10:06:07', '2021-05-11 15:29:00', 5, NULL);
INSERT INTO `blog_admin_menus` VALUES (6, 's4f6f45ds6544sf54sd3', '文章管理', '/index/article', 'd54fsd4e23sd5f4efd2s', 1, 1, '2021-05-12 15:09:56', '2021-05-11 15:29:16', 1, NULL);
INSERT INTO `blog_admin_menus` VALUES (7, '54dger5sd34f5d34g56sr3df', '文章类别管理', '/index/articleType', 'd54fsd4e23sd5f4efd2s', 1, 1, '2021-05-12 15:09:59', '2021-05-11 15:30:29', 2, NULL);
INSERT INTO `blog_admin_menus` VALUES (8, '5e5as5f1d654d3sdf864', '个人信息管理', '/index/personalDetails', 'sf54re653g1355rt53sfd13rq45', 1, 1, '2021-05-12 15:10:03', '2021-05-11 15:40:54', 1, NULL);
INSERT INTO `blog_admin_menus` VALUES (9, 's5fa34d155s34f1', '分配权限', '/index/allot', 'd5s4f5d15f4dxf4a534534f', 1, 1, '2021-05-12 15:10:08', '2021-05-11 15:41:28', 1, NULL);
INSERT INTO `blog_admin_menus` VALUES (10, 'fsd5a5d4sfsd5f45sda4ff4sd55', '标签管理', '/index/tag', 'd54fsd4e23sd5f4efd2s', 1, 1, '2021-05-12 15:10:10', '2021-05-12 14:32:30', 3, NULL);
INSERT INTO `blog_admin_menus` VALUES (11, 'sf67ea64868refsd51t8re65as3df', 'Icon图标管理', '/index/icon', 'd54fsd4e23sd5f4efd2s', 1, 1, '2021-05-12 15:10:13', '2021-05-12 14:33:24', 4, NULL);
INSERT INTO `blog_admin_menus` VALUES (12, '5s7afesda48f65s7a4fe6s54', '学习路线管理', '/index/learnPath', 'd54fsd4e23sd5f4efd2s', 1, 1, '2021-05-12 15:10:16', '2021-05-12 14:34:16', 5, NULL);
INSERT INTO `blog_admin_menus` VALUES (13, '53fs3d1r6s5d312fd5ds', '评论管理', '/index/discuss', 'd54fsd4e23sd5f4efd2s', 1, 1, '2021-05-12 15:10:19', '2021-05-12 14:34:47', 6, NULL);
INSERT INTO `blog_admin_menus` VALUES (14, '8f7eas46d65ds4f18e64e864asd', '账户密码修改', '/index/passing', 'sf54re653g1355rt53sfd13rq45', 1, 1, '2021-05-12 15:10:22', '2021-05-12 14:35:39', 2, NULL);
INSERT INTO `blog_admin_menus` VALUES (15, '53f4fe1fd5f561afsd8r4e51a2f', '管理员列表', '/index/administrator', 'd5s4f5d15f4dxf4a534534f', 1, 1, '2021-05-12 15:10:25', '2021-05-12 14:36:36', 2, NULL);
INSERT INTO `blog_admin_menus` VALUES (16, 'd5s43faf8sd5f54ds3fre4d5s15', '权限规则', '/index/rules', 'd5s4f5d15f4dxf4a534534f', 1, 1, '2021-05-12 15:10:28', '2021-05-12 14:37:31', 3, NULL);

-- ----------------------------
-- Table structure for blog_article
-- ----------------------------
DROP TABLE IF EXISTS `blog_article`;
CREATE TABLE `blog_article`  (
  `id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章类型唯一uuID',
  `article_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `article_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '内容',
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT ' 文章简介',
  `releaseTime` datetime(0) NOT NULL COMMENT '发布时间',
  `view_count` int(0) UNSIGNED NULL DEFAULT NULL COMMENT '浏览次数',
  `video_number` int(0) UNSIGNED NULL DEFAULT NULL COMMENT '文章视频集数',
  `article_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章唯一UUID',
  `article_status` int(0) NULL DEFAULT NULL COMMENT '文章当前状态',
  `tag_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章tag标签唯一id',
  `lastUpdateTime` datetime(0) NOT NULL COMMENT '上次修改时间',
  `article_authorUuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章作者唯一ID',
  `article_path` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '文章地址',
  `article_cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 65 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_article
-- ----------------------------
INSERT INTO `blog_article` VALUES (1, '85756ds4145d', '测试数据', '# export，import ，export default\r\n\r\n`ES6`模块主要有两个功能：**export和import**\r\n* `export`用于对外输出本模块（一个文件可以理解为一个模块）变量的接口\r\n* `import`用于在一个模块中加载另一个含有`export`接口的模块。\r\n\r\n也就是说使用`export`命令定义了模块的对外接口以后，其他`JS`文件就可以通过`import`命令加载这个模块（文件）。这几个都是ES6的语法。\r\n\r\n# export和import（一个导出一个导入）\r\n----------\r\n一个`a.js`文件有如下代码：\r\n```java\r\nexport var name=\"李四\";\r\n```\r\n此时在另个文件中，我们就可以引入已经编写好的相关模块\r\n```java\r\nimport { name } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name)//可以弹出来“李四”  } }\r\n```\r\n上面的例子是导出单个变量的写法，如果是导出多个变量就应该按照下边的方法，用大括号包裹着需要导出的变量：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n引入变量使用：\r\n```java\r\nimport { name1 , name2 } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name1)//可以弹出来“李四” alert(name2)//可以弹出来“张三”  } }\r\n```\r\n如果导出的是个函数呢，那应该怎么用呢,其实一样，如下\r\n```java\r\nfunction add(x,y){\r\n   alert(x*y)\r\n  //  想一想如果这里是个返回值比如： return x-y，下边的函数怎么引用\r\n} export { add }\r\n```\r\n在其他文件里引用如下:\r\n```java\r\nimport { add } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ add(4,6) //弹出来24  } }\r\n```\r\n\r\n# export与export default\r\n-------\r\n但是`export`跟`export default` 有什么区别呢？如下：\r\n\r\n* 1、`export`与`export default`均可用于导出常量、函数、文件、模块等\r\n* 2、你可以在其它文件或模块中通过**`import`+(常量 | 函数 | 文件 | 模块)名**的方式，将其导入，以便能够对其进行使用\r\n* 3、在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个\r\n* 4、通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要\r\n\r\n> 这样来说其实很多时候`export`与`export default`可以实现同样的目的，只是用法有些区别。注意第四条，通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要。使用`export default`命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。\r\n\r\n**示例**\r\n```java\r\nvar name=\"李四\";\r\nexport { name }\r\n//import { name } from \"/.a.js\" \r\n可以写成：\r\nvar name=\"李四\"; export default name //import name from \"/.a.js\" 这里name不需要大括号\r\n```\r\n再看第3条，在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个，也就是说如下代码：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n也可以写成如下，也是可以的，`import`跟他类似。\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport name1;\r\nexport name2;\r\n```\r\n\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607913-1563815917.jpg)', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 10:23:57', 1524, 7, '4521452s5f252f45', NULL, NULL, '2021-04-21 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD64.jpg');
INSERT INTO `blog_article` VALUES (2, '85756ds4145d', '2021前端开发学习路径 一张图让你轻松自学', '# export，import ，export default\r\n\r\n`ES6`模块主要有两个功能：**export和import**\r\n* `export`用于对外输出本模块（一个文件可以理解为一个模块）变量的接口\r\n* `import`用于在一个模块中加载另一个含有`export`接口的模块。\r\n\r\n也就是说使用`export`命令定义了模块的对外接口以后，其他`JS`文件就可以通过`import`命令加载这个模块（文件）。这几个都是ES6的语法。\r\n\r\n# export和import（一个导出一个导入）\r\n----------\r\n一个`a.js`文件有如下代码：\r\n```java\r\nexport var name=\"李四\";\r\n```\r\n此时在另个文件中，我们就可以引入已经编写好的相关模块\r\n```java\r\nimport { name } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name)//可以弹出来“李四”  } }\r\n```\r\n上面的例子是导出单个变量的写法，如果是导出多个变量就应该按照下边的方法，用大括号包裹着需要导出的变量：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n引入变量使用：\r\n```java\r\nimport { name1 , name2 } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name1)//可以弹出来“李四” alert(name2)//可以弹出来“张三”  } }\r\n```\r\n如果导出的是个函数呢，那应该怎么用呢,其实一样，如下\r\n```java\r\nfunction add(x,y){\r\n   alert(x*y)\r\n  //  想一想如果这里是个返回值比如： return x-y，下边的函数怎么引用\r\n} export { add }\r\n```\r\n在其他文件里引用如下:\r\n```java\r\nimport { add } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ add(4,6) //弹出来24  } }\r\n```\r\n\r\n# export与export default\r\n-------\r\n但是`export`跟`export default` 有什么区别呢？如下：\r\n\r\n* 1、`export`与`export default`均可用于导出常量、函数、文件、模块等\r\n* 2、你可以在其它文件或模块中通过**`import`+(常量 | 函数 | 文件 | 模块)名**的方式，将其导入，以便能够对其进行使用\r\n* 3、在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个\r\n* 4、通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要\r\n\r\n> 这样来说其实很多时候`export`与`export default`可以实现同样的目的，只是用法有些区别。注意第四条，通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要。使用`export default`命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。\r\n\r\n**示例**\r\n```java\r\nvar name=\"李四\";\r\nexport { name }\r\n//import { name } from \"/.a.js\" \r\n可以写成：\r\nvar name=\"李四\"; export default name //import name from \"/.a.js\" 这里name不需要大括号\r\n```\r\n再看第3条，在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个，也就是说如下代码：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n也可以写成如下，也是可以的，`import`跟他类似。\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport name1;\r\nexport name2;\r\n```\r\n\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607913-1563815917.jpg)', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 15:15:05', 2076, 14, '45ad14f1e4d1s4xs', NULL, NULL, '2021-04-21 15:15:28', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD64.jpg');
INSERT INTO `blog_article` VALUES (3, '85756ds4145d', '程序员在职成长指南 用对这6个方法技术快速提升', '# node.js环境搭建以及配置\r\n---\r\n##  准备工作\r\n* 本机系统：Windows 10 Pro（64位）\r\n* Node.js：v14.15.4（64位）\r\n\r\n## 安装Node.js步骤\r\n1、下载对应你系统的Node.js版本:https://nodejs.org/en/download/\r\n2、选安装目录进行安装\r\n3、环境配置\r\n4、测试\r\n\r\n## 安装详细过程\r\n\r\n###  Node.js简介\r\n---\r\n简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。\r\n### 下载Node.js\r\n打开官网下载链接:[Node.js](https://nodejs.org/en/download/ )我这里下载的是node-v6.9.2-x64.msi,如下图：\r\n![](./tu/2.jpg)\r\n\r\n### 开始安装\r\n>下载完成后，双击“node-v14.15.4-x64.msi”，开始安装Node.js\r\n\r\n![](./tu/3.jpg)\r\n\r\n>点击【Next】按钮\r\n\r\n![](./tu/4.jpg)\r\n\r\n>勾选复选框，点击【Next】按钮\r\n\r\n![](./tu/5.jpg)\r\n\r\n>修改好目录后，点击【Next】按钮\r\n\r\n![](./tu/6.jpg)\r\n\r\n>点击【install】\r\n>安装完后点击【Finish】按钮完成安装\r\n\r\n![](./tu/7.jpg)\r\n\r\n至此Node.js已经安装完成，可以先进行下简单的测试安装是否成功了，后面还要进行环境配置\r\n在键盘按下【win+R】键，输入cmd，然后回车，打开cmd窗口\r\n\r\n![](./tu/8.jpg)\r\n\r\n安装完后的目录如下图所示：\r\n![](./tu/9.jpg)\r\n**此处说明下：新版的Node.js已自带npm，安装Node.js时会一起安装，npm的作用就是对Node.js依赖的包进行管理，也可以理解为用来安装/卸载Node.js需要装的东西**\r\n###  环境配置\r\n说明：这里的环境配置主要配置的是**npm安装的全局模块所在的路径，以及缓存cache的路径**，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\\Users\\用户名\\AppData\\Roaming\\npm】路径中，占C盘空间。\r\n例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【D:\\Develop\\nodejs】下创建两个文件夹【node_global】及【node_cache】如下图：\r\n>node_global：npm全局安装位置\r\n>node_cache：npm缓存路径\r\n\r\n![](./tu/10.jpg)\r\n\r\n创建完两个空文件夹之后，打开cmd命令窗口，输入\r\n```java\r\nnpm config set prefix \"D:\\Develop\\nodejs\\node_global\"\r\nnpm config set cache \"D:\\Develop\\nodejs\\node_cache\"\r\n```\r\n\r\n接下来设置环境变量，关闭cmd窗口，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”:\r\n![](./tu/11.jpg)\r\n\r\n**进入环境变量对话框:**\r\n1. 【用户变量】下新建【NODE_PATH】，浏览文件找到node.js安装目录中的node_modules\r\n2. 【用户变量】下的【Path】修改为【D:\\Develop\\nodejs\\node_global】（根据自己安装目录改变相应配置路径）\r\n3. 【系统变量】下的【path】配置nodex.js路径和node_global路径\r\n     ![](./tu/12.jpg)\r\n       ![](./tu/13.jpg)\r\n       ![](./tu/14.jpg)\r\n### 测试安装是否成功\r\n配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口，\r\n输入如下命令进行模块的全局安装：\r\n\r\n```java\r\nnpm install express -g     # -g是全局安装的意思\r\n#注1：环境变量查看\r\necho %node_home%\r\necho %path%\r\n\r\n#注2：测试安装是否成功：打开cmd窗口，输出如下命令会输出NodeJs和npm的版本号\r\nnode -v\r\nnpm -v\r\n```\r\n![](./tu/15.jpg)\r\n\r\n## 配置 npm镜像源\r\n---\r\n修改npm镜像提高下载速度(可以使用 cnpm 或 直接设置 --registry ，推荐设置 --registry)\r\n\r\n**设置淘宝源**\r\n```java\r\nnpm config set registry https://registry.npm.taobao.org/\r\n# 查看源，可以看到设置过的所有的源\r\nnpm config get registry\r\n# 注1：其实此步骤的内容就是将以下代码添加到C:\\Users\\用户名.npmrc文件中\r\nregistry=https://registry.npm.taobao.org\r\n```\r\n###  cnpm 安装\r\n```java\r\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\r\n```\r\n注1：cnpm安装完成后，以后就可以用cnpm命令代替npm命令, 此时npm还是会用官方镜像，cnpm会用国内镜像\r\n\r\n注2：如果要恢复成原来的设置，执行如下：\r\n```java\r\nnpm config set registry https://registry.npmjs.org/\r\n```\r\n', '你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。', '2021-04-22 10:23:57', 152452, 58, '4521452s5f252f45s85', NULL, NULL, '2021-04-07 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD42.jpg');
INSERT INTO `blog_article` VALUES (4, '85756ds4145d', 'Vue3.x从零开始学-第二季 组件篇', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '在学习这个视频之前，你需要先学习《Vue3.x从零开始学-第一集-基础语法篇》。第二季（本教程）主要讲解Vue3中组件的一些知识，包括什么是全局组件、局部组件、组件如何复用、组件间的传值，单项数据流、Non-Props属性、父子组件的 通信、组件双向绑定、组件中使用插槽、还包括动态组件和异步组件。\r\n\r\n但是你还是需要记住，学习本课程前，还是需要先对基础知识有所了解。', '2021-04-08 10:23:57', 152445, 9, '564ddsa1f234d1dsf', NULL, NULL, '2021-04-17 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD64.jpg');
INSERT INTO `blog_article` VALUES (5, '4fs4f1gd4dd5sad', '2021前端开发学习路径 一张图让你轻松自学', '# node.js环境搭建以及配置\r\n---\r\n##  准备工作\r\n* 本机系统：Windows 10 Pro（64位）\r\n* Node.js：v14.15.4（64位）\r\n\r\n## 安装Node.js步骤\r\n1、下载对应你系统的Node.js版本:https://nodejs.org/en/download/\r\n2、选安装目录进行安装\r\n3、环境配置\r\n4、测试\r\n\r\n## 安装详细过程\r\n\r\n###  Node.js简介\r\n---\r\n简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。\r\n### 下载Node.js\r\n打开官网下载链接:[Node.js](https://nodejs.org/en/download/ )我这里下载的是node-v6.9.2-x64.msi,如下图：\r\n![](./tu/2.jpg)\r\n\r\n### 开始安装\r\n>下载完成后，双击“node-v14.15.4-x64.msi”，开始安装Node.js\r\n\r\n![](./tu/3.jpg)\r\n\r\n>点击【Next】按钮\r\n\r\n![](./tu/4.jpg)\r\n\r\n>勾选复选框，点击【Next】按钮\r\n\r\n![](./tu/5.jpg)\r\n\r\n>修改好目录后，点击【Next】按钮\r\n\r\n![](./tu/6.jpg)\r\n\r\n>点击【install】\r\n>安装完后点击【Finish】按钮完成安装\r\n\r\n![](./tu/7.jpg)\r\n\r\n至此Node.js已经安装完成，可以先进行下简单的测试安装是否成功了，后面还要进行环境配置\r\n在键盘按下【win+R】键，输入cmd，然后回车，打开cmd窗口\r\n\r\n![](./tu/8.jpg)\r\n\r\n安装完后的目录如下图所示：\r\n![](./tu/9.jpg)\r\n**此处说明下：新版的Node.js已自带npm，安装Node.js时会一起安装，npm的作用就是对Node.js依赖的包进行管理，也可以理解为用来安装/卸载Node.js需要装的东西**\r\n###  环境配置\r\n说明：这里的环境配置主要配置的是**npm安装的全局模块所在的路径，以及缓存cache的路径**，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\\Users\\用户名\\AppData\\Roaming\\npm】路径中，占C盘空间。\r\n例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【D:\\Develop\\nodejs】下创建两个文件夹【node_global】及【node_cache】如下图：\r\n>node_global：npm全局安装位置\r\n>node_cache：npm缓存路径\r\n\r\n![](./tu/10.jpg)\r\n\r\n创建完两个空文件夹之后，打开cmd命令窗口，输入\r\n```java\r\nnpm config set prefix \"D:\\Develop\\nodejs\\node_global\"\r\nnpm config set cache \"D:\\Develop\\nodejs\\node_cache\"\r\n```\r\n\r\n接下来设置环境变量，关闭cmd窗口，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”:\r\n![](./tu/11.jpg)\r\n\r\n**进入环境变量对话框:**\r\n1. 【用户变量】下新建【NODE_PATH】，浏览文件找到node.js安装目录中的node_modules\r\n2. 【用户变量】下的【Path】修改为【D:\\Develop\\nodejs\\node_global】（根据自己安装目录改变相应配置路径）\r\n3. 【系统变量】下的【path】配置nodex.js路径和node_global路径\r\n     ![](./tu/12.jpg)\r\n       ![](./tu/13.jpg)\r\n       ![](./tu/14.jpg)\r\n### 测试安装是否成功\r\n配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口，\r\n输入如下命令进行模块的全局安装：\r\n\r\n```java\r\nnpm install express -g     # -g是全局安装的意思\r\n#注1：环境变量查看\r\necho %node_home%\r\necho %path%\r\n\r\n#注2：测试安装是否成功：打开cmd窗口，输出如下命令会输出NodeJs和npm的版本号\r\nnode -v\r\nnpm -v\r\n```\r\n![](./tu/15.jpg)\r\n\r\n## 配置 npm镜像源\r\n---\r\n修改npm镜像提高下载速度(可以使用 cnpm 或 直接设置 --registry ，推荐设置 --registry)\r\n\r\n**设置淘宝源**\r\n```java\r\nnpm config set registry https://registry.npm.taobao.org/\r\n# 查看源，可以看到设置过的所有的源\r\nnpm config get registry\r\n# 注1：其实此步骤的内容就是将以下代码添加到C:\\Users\\用户名.npmrc文件中\r\nregistry=https://registry.npm.taobao.org\r\n```\r\n###  cnpm 安装\r\n```java\r\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\r\n```\r\n注1：cnpm安装完成后，以后就可以用cnpm命令代替npm命令, 此时npm还是会用官方镜像，cnpm会用国内镜像\r\n\r\n注2：如果要恢复成原来的设置，执行如下：\r\n```java\r\nnpm config set registry https://registry.npmjs.org/\r\n```\r\n', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 15:15:05', 2076, 9, '45ad14f1e4d1s4xssd', NULL, NULL, '2021-04-21 15:15:28', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD200615.jpg');
INSERT INTO `blog_article` VALUES (6, '85756ds4s145dad', '程序员在职成长指南 用对这6个方法技术快速提升', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。', '2021-04-22 10:23:57', 152452, 10, '4521452s5f252f45s85sdwd', NULL, NULL, '2021-04-07 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD-xinzi.jpg');
INSERT INTO `blog_article` VALUES (7, '4fs4f1gd4dd5sad', 'taro 多端框架', '# taro 基础认识（一）\r\n\r\n# 简介\r\n------\r\nTaro 是一套遵循 React 语法规范的 多端开发 解决方案。\r\n\r\n现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。\r\n\r\n使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native 等）运行的代码。\r\n\r\n# 特性\r\n\r\n---\r\n### 支持多种框架\r\n\r\nTaro 目前支持**React、Nerv、Vue**三类框架，在未来 Taro 将开放拓展能力，使得开发者可以通过 Taro 拓展更多的框架支持。\r\n\r\n***\r\n### 快速开发微信小程序\r\n\r\nTaro 立足于微信小程序开发，众所周知小程序的开发体验并不是非常友好，比如小程序中无法使用 **npm 来进行第三方库的管理**，无法使用一些比较新的 ES 规范等等，针对小程序端的开发弊端，Taro 具有以下的优秀特性\r\n\r\n✅ 支持使用 **npm/yarn** 安装管理第三方依赖\r\n\r\n✅ 支持使用 **ES7/ES8** 甚至更新的 ES 规范，一切都可自行配置\r\n\r\n✅ 支持使用 **CSS 预编译器**，例如 Sass 等\r\n\r\n✅ 支持使用 **Redux 进行状态管理**\r\n\r\n✅ 支持使用 **MobX 进行状态管理**\r\n\r\n✅ 小程序 **API 优化**，**异步 API Promise 化**等等\r\n****\r\n### 支持多端开发转化\r\n\r\nTaro 方案的初心就是为了打造一个**多端开发的解决方案**。目前 Taro 代码可以支持转换到 微信/百度/支付宝/字节跳动/QQ小程序 、快应用、 H5 端 以及 移动端（React Native）。\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607913-1563815917.jpg)\r\n\r\n**以上内容来自taro官方介绍文档 , 详细文档:**[taro介绍文档](https://taro-docs.jd.com/taro/docs/README/index.html)\r\n\r\n# 搭建taro环境\r\n\r\n---\r\n## 准备工作\r\n> [搭建node.js环境](https://www.cnblogs.com/liuqiyun/p/8133904.html)不了解node.js的可以先简单了解一下[node.js认识]()\r\n> 了解taro框架相关文档 [taro介绍文档](https://taro-docs.jd.com/taro/docs/README/index.html)\r\n\r\n## 搭建taro环境\r\n---\r\n**1. **全局安装@tarojs/cli\r\n首先，你需要使用 npm 或者 yarn 全局安装@tarojs/cli，或者直接使用npx:\r\n```java\r\n# 使用 npm 安装 CLI\r\n$ npm install -g @tarojs/cli\r\n# OR 使用 yarn 安装 CLI\r\n$ yarn global add @tarojs/cli\r\n# OR 安装了 cnpm，使用 cnpm 安装 CLI\r\n$ cnpm install -g @tarojs/cli\r\n```\r\n**注意事项**\r\n值得一提的是，如果安装过程出现sass相关的安装错误，请在安装mirror-config-china后重试。\r\n```java\r\n$ npm install -g mirror-config-china\r\n```\r\n## taro react 搭建小程序\r\n\r\n> 1. 新建一个文件夹\r\n> 2. 初始化创建\r\n```java\r\ntaro init 项目名\r\n```\r\n> 3. 进行配置 ，根据需求配置\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607372-2054646736.jpg)\r\n\r\n之后等待所有依赖安装完毕。\r\n\r\n> 3. 开发\r\n>      在命令行执行\r\n```java\r\n$ npm run dev:weapp\r\n```\r\ntaro编译成小程序代码：\r\n![](http://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110606762-2115292818.jpg)\r\n\r\n> 4. 下载安装微信开发者工具，导入新项目中的**dist文件夹**即可进行调试，展示效果\r\n\r\n当看到“监听文件修改中…”的提示后，我们就可以打开微信开发者工具，用微信扫码登录后界面如下：\r\n![](http://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110606314-364553523.jpg)\r\n点击那个硕大的➕号，开始导入我们刚才创建的项目的`dist文件夹`\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110606025-205776588.jpg)\r\n导入成功后，在微信开发者工具中即可预览调试：\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110604603-2027268493.jpg)\r\n\r\n\r\n## taro 目录详细\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110604037-170157003.jpg)\r\n\r\n**注意：**\r\n1. 根据项目初始化配置不同的模板，最后生成的略有不同\r\n2. `npm run dev:weapp`执行该命令，taro源码会被编译成小程序代码，全部在dist文件夹中\r\n\r\n# 总结\r\n\r\n---\r\n至此，我们搭建完成taro 开发环境，并且搭建了一个小程序开发框架，taro+react+redux ，进入开发阶段，还了解了taro的目录结构。为我们接下来的开发做好充分的准备工作.', 'Taro 是一套遵循 React 语法规范的 多端开发 解决方案。\r\n\r\n现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。\r\n\r\n使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native 等）运行的代码。', '2021-04-14 18:08:15', 485, 45, 's564fd5f54s5gr4d5f2fd1', NULL, NULL, '2021-04-26 18:08:31', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD64.jpg');
INSERT INTO `blog_article` VALUES (64, '85756ds4145d', '标题', '内容', '简介', '2021-05-29 11:03:25', 0, 0, '820591feb20511eb8d7680fa5b4aa368', 3, NULL, '2021-05-11 11:03:49', '56sd54e56s254ds52', 'http://localhost:3000/detailPages', 'https://newimg.jspang.com/BBD64.jpg');

-- ----------------------------
-- Table structure for blog_article_type
-- ----------------------------
DROP TABLE IF EXISTS `blog_article_type`;
CREATE TABLE `blog_article_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `type_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章类型唯一UUID',
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型名称',
  `type_creatTime` date NOT NULL COMMENT '类型创建时间',
  `type_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型地址',
  `type_icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标',
  `type_site` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '当前类型的页面展示位置',
  `keyName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(0) NOT NULL DEFAULT 1 COMMENT '当前状态 1正常',
  `orders` int(0) NULL DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_article_type
-- ----------------------------
INSERT INTO `blog_article_type` VALUES (1, '85756ds4145d', '视频教程', '2021-04-21', '/video', 'ads54d4a8d4sd48', 'header', 'video', 1, 2);
INSERT INTO `blog_article_type` VALUES (2, '4fs4f1gd4dd5sad', '软技能', '2021-04-20', '/skill', '5sad465sd4s56adsd1', 'header', 'skill', 1, 4);
INSERT INTO `blog_article_type` VALUES (3, '85756ds4s145dad', '逼逼叨叨', '2021-04-02', '/message', 'w4sa1ds5254ds5sad4', 'header', 'message', 1, 3);
INSERT INTO `blog_article_type` VALUES (4, '56asd4d51f4d5sf', '首页', '2021-04-23', '/', '12d4sf1df2rf1gf2', 'header', 'home', 1, 1);
INSERT INTO `blog_article_type` VALUES (5, '5sf41s5fdss4es1', '快乐生活', '2021-04-23', '/life', '5s4d5s1f4ds2', 'header', 'life', 1, 5);

-- ----------------------------
-- Table structure for blog_icon
-- ----------------------------
DROP TABLE IF EXISTS `blog_icon`;
CREATE TABLE `blog_icon`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `iconUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标在线js/css文件',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标type值',
  `createTime` datetime(0) NOT NULL COMMENT '创建时间',
  `lastUpateTime` datetime(0) NULL DEFAULT NULL COMMENT '最后一次修改时间',
  `icon_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图标唯一ID',
  `site` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标位置',
  `icon_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标对应文本',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_icon
-- ----------------------------
INSERT INTO `blog_icon` VALUES (1, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-shipin', '2021-04-23 14:39:58', '2021-04-23 14:40:00', 'ads54d4a8d4sd48', 'header', NULL);
INSERT INTO `blog_icon` VALUES (2, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-xiaolianxiaolian', '2021-04-23 14:40:49', '2021-04-23 14:40:51', '5sad465sd4s56adsd1', 'header', NULL);
INSERT INTO `blog_icon` VALUES (3, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-liaotian', '2021-04-23 14:41:16', '2021-04-23 14:41:20', 'w4sa1ds5254ds5sad4', 'header', NULL);
INSERT INTO `blog_icon` VALUES (4, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-zhuye', '2021-04-23 14:41:55', '2021-04-23 14:41:57', '12d4sf1df2rf1gf2', 'header', NULL);
INSERT INTO `blog_icon` VALUES (5, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-iconset0239', '2021-04-23 14:42:19', '2021-04-23 14:42:21', '5s4d5s1f4ds2', 'header', NULL);
INSERT INTO `blog_icon` VALUES (6, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-changyongicon-', '2021-04-23 16:00:34', '2021-04-23 16:00:37', 'd1415as4des5f4ds5ds', 'articleList', 'releaseTime');
INSERT INTO `blog_icon` VALUES (7, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-wenjianjia', '2021-04-23 16:01:30', '2021-04-23 16:01:33', 'd1sd24s152fd1s5f2g1fv5', 'articleList', 'type_name');
INSERT INTO `blog_icon` VALUES (8, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-icon--', '2021-04-23 16:02:09', '2021-04-23 16:02:12', '4s4dd5fe4sd25ff4d25f1d', 'articleList', 'view_count');
INSERT INTO `blog_icon` VALUES (9, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-file', '2021-04-23 16:02:51', '2021-04-23 16:02:54', 'e1fsd1256sd1f5df2', 'articleList', 'view_full_text_front');
INSERT INTO `blog_icon` VALUES (10, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-iconfontjiantou2', '2021-04-22 17:17:02', '2021-04-23 17:17:05', 's54d5s3f4e2d5g4tr', 'articleList', 'view_full_text_later');
INSERT INTO `blog_icon` VALUES (11, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-github', '2021-04-25 09:36:37', '2021-04-25 09:36:40', '4sdzf41f45tdf1gf4dged5', 'author', 'githubOutlined');
INSERT INTO `blog_icon` VALUES (12, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-weixin', '2021-04-22 09:39:08', '2021-04-25 09:39:06', '5sf4d5s2f1r5d32fr5fd12', 'author', 'wechatOutlined');
INSERT INTO `blog_icon` VALUES (13, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-qq', '2021-04-16 09:39:53', '2021-04-25 09:39:51', 's5f4fd554esd51d24rf51d', 'author', 'qqOutlined');
INSERT INTO `blog_icon` VALUES (14, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-dingding', '2021-04-16 09:40:58', '2021-04-25 09:40:56', 'f1d2fd5g451fd1gfg1f', 'author', 'dingdingOutlined');
INSERT INTO `blog_icon` VALUES (15, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-arrow-right', '2021-04-25 09:51:15', '2021-04-25 09:51:17', '4sdfdfd12sd5f4d525f554df6', 'learningPath', 'rightArrow');
INSERT INTO `blog_icon` VALUES (16, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-explain', '2021-04-25 09:52:44', '2021-04-25 09:52:47', 'f45d44f625d34f5dg4fd5', 'learningPath', 'explain');
INSERT INTO `blog_icon` VALUES (17, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-changyongicon-', '2021-04-16 11:14:12', '2021-04-26 11:14:10', 's4e5sdf54s5df154r5sd23', 'detail', 'releaseTime');
INSERT INTO `blog_icon` VALUES (18, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-wenjianjia', '2021-04-26 11:15:49', '2021-04-26 11:15:45', '45sd14f1d5f4ds560fd21f5df', 'detail', 'type_name');
INSERT INTO `blog_icon` VALUES (19, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-icon--', '2021-04-08 11:16:19', '2021-04-26 11:16:16', '4561dre5d1g154fd215dsf2', 'detail', 'view_count');
INSERT INTO `blog_icon` VALUES (20, '//at.alicdn.com/t/font_2507031_0qhn86kucr4.js', 'icon-shipin1', '2021-04-26 11:17:48', '2021-04-15 11:17:50', 's5f41dfsd86r51sd5f4g4r65', 'detail', 'video_number');

-- ----------------------------
-- Table structure for blog_learningpath
-- ----------------------------
DROP TABLE IF EXISTS `blog_learningpath`;
CREATE TABLE `blog_learningpath`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `path_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学习路线唯一ID',
  `path_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学习路线名称',
  `article_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对应文章UUID',
  `createTime` date NOT NULL COMMENT '创建时间',
  `create_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建学习路线作者',
  `status` int(0) NULL DEFAULT NULL COMMENT '当前状态 默认 1 正常',
  `subtitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '副标题',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_learningpath
-- ----------------------------
INSERT INTO `blog_learningpath` VALUES (1, '5d54as5d4sdds5', 'Vue3.x学习路线', '4521452s5f252f45', '2021-04-22', '张宇', 1, '基础到实战');
INSERT INTO `blog_learningpath` VALUES (2, '43d4as5d4ds5ad4', 'React学习路线', '45ad14f1e4d1s4xs', '2021-04-21', '张宇', 1, '基础到实战');
INSERT INTO `blog_learningpath` VALUES (3, '5sd4as554dsd1', 'Vue2.x学习路线', '4521452s5f252f45s85', '2021-04-11', '博客园', 1, '基础到实战');
INSERT INTO `blog_learningpath` VALUES (4, '45a4dsa654d56s35d4s', 'Flutter学习路线', '564ddsa1f234d1dsf', '2021-01-01', '博客园', 1, '基础到实战');

-- ----------------------------
-- Table structure for blog_notice
-- ----------------------------
DROP TABLE IF EXISTS `blog_notice`;
CREATE TABLE `blog_notice`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `notice_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '通知标题',
  `notice_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '通知类型success/info/warning/error',
  `notice_source` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '通知来源',
  `notice_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '通知内容',
  `create_dateTime` datetime(0) NULL DEFAULT NULL COMMENT '通知创建时间',
  `last_datatime` datetime(0) NULL DEFAULT NULL COMMENT '最后修改时间',
  `notice_status` int(0) NULL DEFAULT NULL COMMENT '当前状态1.已读0.未读',
  `user_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户唯一ID',
  `notice_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '通知唯一ID',
  `duration` decimal(10, 2) NULL DEFAULT NULL COMMENT '通知关闭时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_notice
-- ----------------------------
INSERT INTO `blog_notice` VALUES (1, '测试通知标题', 'info', 'job', 'Guns基于Spring Boot 2，致力于做更简洁的后台管理系统，完美整合springmvc + shiro + mybatis-plus + beetl，Guns项目代码简洁，注释丰富，上手容易，同时Guns包含许多基础模块(用户管理，角色管理，部门管理，字典管理等10个模块)，可以直接作为一个后台管理系统的脚手架！同时提供spring cloud版本！\r\n————————————————\r\n版权声明：本文为CSDN博主「不安分的猿人」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\r\n原文链接：https://blog.csdn.net/huaairen/article/details/88649070', '2021-05-13 17:49:36', '2021-05-14 13:38:29', 1, '56sd54e56s254ds52', '4541eg8r5aafg86re51f1g5', 4.50);
INSERT INTO `blog_notice` VALUES (2, '错误提示', 'error', 'job', '信息录入失败', '2021-05-14 09:14:55', '2021-05-14 13:38:29', 1, '56sd54e56s254ds52', 'd5f4rd853fre6d51545ed', 0.00);
INSERT INTO `blog_notice` VALUES (3, '成功提示', 'success', 'job', '视频上传成功', '2021-05-14 09:16:42', '2021-05-14 13:38:29', 1, '56sd54e56s254ds52', '534f186r3sd515r3ds2f1re5', 3.00);
INSERT INTO `blog_notice` VALUES (4, '超时提醒', 'warning', 'job', '数据量过大，处理超时', '2021-05-14 09:18:05', '2021-05-14 13:38:29', 1, '56sd54e56s254ds52', '44f5dsa4af8e6s5d3f5re85fsd1', 0.00);

-- ----------------------------
-- Table structure for blog_tag
-- ----------------------------
DROP TABLE IF EXISTS `blog_tag`;
CREATE TABLE `blog_tag`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `tag_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签唯一ID',
  `tag_color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标签颜色',
  `tag_visible` int(0) UNSIGNED NOT NULL DEFAULT 1 COMMENT '是否显示默认1显示，0不显示',
  `tag_status` int(0) NULL DEFAULT NULL COMMENT '标签当前状态',
  `createTime` date NOT NULL COMMENT '创建时间',
  `icon_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标签中图标唯一ID',
  `tag_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标签内容',
  `tag_site` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标签位置',
  `article_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章UUID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_tag
-- ----------------------------
INSERT INTO `blog_tag` VALUES (1, 's5df415413fd561f5s', 'magenta', 1, NULL, '2021-04-27', NULL, '程序员', 'author', NULL);
INSERT INTO `blog_tag` VALUES (2, '54ds5fd456dsf', 'red', 1, NULL, '2021-04-27', NULL, 'JAVA', 'author', '4521452s5f252f45');
INSERT INTO `blog_tag` VALUES (3, '12s2ds41s41f24d', 'gold', 1, NULL, '2021-04-15', NULL, '免费视频719 集', 'author', NULL);
INSERT INTO `blog_tag` VALUES (4, '65f4ds5f2sd4fd54', 'green', 1, NULL, '2021-04-27', NULL, '12年经验', 'author', NULL);
INSERT INTO `blog_tag` VALUES (5, '54ds6f4fsd54s5', 'orange', 1, NULL, '2021-04-23', NULL, '前端', 'author', '4521452s5f252f45');
INSERT INTO `blog_tag` VALUES (6, '54sd53f4rf5d54dfd5', 'blue', 1, NULL, '2021-04-28', NULL, '学习路线', NULL, 's564fd5f54s5gr4d5f2fd1');
INSERT INTO `blog_tag` VALUES (7, 's4ds4f14d43g14df1', 'blue', 1, NULL, '2021-04-08', NULL, '学习之路', NULL, '45ad14f1e4d1s4xssd');
INSERT INTO `blog_tag` VALUES (8, '8f7ds46f64esd5a444r', 'green', 1, NULL, '2021-04-28', NULL, '视频教程', NULL, '45ad14f1e4d1s4xssd');

-- ----------------------------
-- Table structure for blog_user
-- ----------------------------
DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博主',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `age` int(0) NULL DEFAULT NULL COMMENT '年龄',
  `user_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博主唯一Id',
  `motto` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '座右铭',
  `user_github` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '博主github',
  `user_B` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '博主B站',
  `user_qq` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '博主qq',
  `user_vx` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '博主微信',
  `tag_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '博主标签唯一UUID',
  `user_photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '博主头像地址',
  `history_times` date NOT NULL COMMENT '博主信息录入时间',
  `status` int(0) NULL DEFAULT NULL COMMENT '博主状态 1正常',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_user
-- ----------------------------
INSERT INTO `blog_user` VALUES (1, '张宇', '男', 25, '56sd54e56s254ds52', '因为美好的东西都是免费的，比如水、阳光和空气，所以本站视频全部免费。', 'https://github.com/Sir-yuChen', NULL, '2470838639', '18739473138', NULL, 'https://img1.baidu.com/it/u=2491306664,177039371&fm=26&fmt=auto&gp=0.jpg', '2021-04-21', 1);

SET FOREIGN_KEY_CHECKS = 1;
