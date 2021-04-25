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

 Date: 23/04/2021 18:14:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_article
-- ----------------------------
INSERT INTO `blog_article` VALUES (1, '85756ds4145d', '测试数据', '# export，import ，export default\r\n\r\n`ES6`模块主要有两个功能：**export和import**\r\n* `export`用于对外输出本模块（一个文件可以理解为一个模块）变量的接口\r\n* `import`用于在一个模块中加载另一个含有`export`接口的模块。\r\n\r\n也就是说使用`export`命令定义了模块的对外接口以后，其他`JS`文件就可以通过`import`命令加载这个模块（文件）。这几个都是ES6的语法。\r\n\r\n# export和import（一个导出一个导入）\r\n----------\r\n一个`a.js`文件有如下代码：\r\n```java\r\nexport var name=\"李四\";\r\n```\r\n此时在另个文件中，我们就可以引入已经编写好的相关模块\r\n```java\r\nimport { name } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name)//可以弹出来“李四”  } }\r\n```\r\n上面的例子是导出单个变量的写法，如果是导出多个变量就应该按照下边的方法，用大括号包裹着需要导出的变量：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n引入变量使用：\r\n```java\r\nimport { name1 , name2 } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name1)//可以弹出来“李四” alert(name2)//可以弹出来“张三”  } }\r\n```\r\n如果导出的是个函数呢，那应该怎么用呢,其实一样，如下\r\n```java\r\nfunction add(x,y){\r\n   alert(x*y)\r\n  //  想一想如果这里是个返回值比如： return x-y，下边的函数怎么引用\r\n} export { add }\r\n```\r\n在其他文件里引用如下:\r\n```java\r\nimport { add } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ add(4,6) //弹出来24  } }\r\n```\r\n\r\n# export与export default\r\n-------\r\n但是`export`跟`export default` 有什么区别呢？如下：\r\n\r\n* 1、`export`与`export default`均可用于导出常量、函数、文件、模块等\r\n* 2、你可以在其它文件或模块中通过**`import`+(常量 | 函数 | 文件 | 模块)名**的方式，将其导入，以便能够对其进行使用\r\n* 3、在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个\r\n* 4、通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要\r\n\r\n> 这样来说其实很多时候`export`与`export default`可以实现同样的目的，只是用法有些区别。注意第四条，通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要。使用`export default`命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。\r\n\r\n**示例**\r\n```java\r\nvar name=\"李四\";\r\nexport { name }\r\n//import { name } from \"/.a.js\" \r\n可以写成：\r\nvar name=\"李四\"; export default name //import name from \"/.a.js\" 这里name不需要大括号\r\n```\r\n再看第3条，在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个，也就是说如下代码：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n也可以写成如下，也是可以的，`import`跟他类似。\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport name1;\r\nexport name2;\r\n```\r\n\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607913-1563815917.jpg)', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 10:23:57', 1524, 7, '4521452s5f252f45', NULL, NULL, '2021-04-21 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages');
INSERT INTO `blog_article` VALUES (2, '85756ds4145d', '2021前端开发学习路径 一张图让你轻松自学', '# export，import ，export default\r\n\r\n`ES6`模块主要有两个功能：**export和import**\r\n* `export`用于对外输出本模块（一个文件可以理解为一个模块）变量的接口\r\n* `import`用于在一个模块中加载另一个含有`export`接口的模块。\r\n\r\n也就是说使用`export`命令定义了模块的对外接口以后，其他`JS`文件就可以通过`import`命令加载这个模块（文件）。这几个都是ES6的语法。\r\n\r\n# export和import（一个导出一个导入）\r\n----------\r\n一个`a.js`文件有如下代码：\r\n```java\r\nexport var name=\"李四\";\r\n```\r\n此时在另个文件中，我们就可以引入已经编写好的相关模块\r\n```java\r\nimport { name } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name)//可以弹出来“李四”  } }\r\n```\r\n上面的例子是导出单个变量的写法，如果是导出多个变量就应该按照下边的方法，用大括号包裹着需要导出的变量：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n引入变量使用：\r\n```java\r\nimport { name1 , name2 } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ alert(name1)//可以弹出来“李四” alert(name2)//可以弹出来“张三”  } }\r\n```\r\n如果导出的是个函数呢，那应该怎么用呢,其实一样，如下\r\n```java\r\nfunction add(x,y){\r\n   alert(x*y)\r\n  //  想一想如果这里是个返回值比如： return x-y，下边的函数怎么引用\r\n} export { add }\r\n```\r\n在其他文件里引用如下:\r\n```java\r\nimport { add } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n  data () {\r\n    return { } }, created:function(){ add(4,6) //弹出来24  } }\r\n```\r\n\r\n# export与export default\r\n-------\r\n但是`export`跟`export default` 有什么区别呢？如下：\r\n\r\n* 1、`export`与`export default`均可用于导出常量、函数、文件、模块等\r\n* 2、你可以在其它文件或模块中通过**`import`+(常量 | 函数 | 文件 | 模块)名**的方式，将其导入，以便能够对其进行使用\r\n* 3、在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个\r\n* 4、通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要\r\n\r\n> 这样来说其实很多时候`export`与`export default`可以实现同样的目的，只是用法有些区别。注意第四条，通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要。使用`export default`命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。\r\n\r\n**示例**\r\n```java\r\nvar name=\"李四\";\r\nexport { name }\r\n//import { name } from \"/.a.js\" \r\n可以写成：\r\nvar name=\"李四\"; export default name //import name from \"/.a.js\" 这里name不需要大括号\r\n```\r\n再看第3条，在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个，也就是说如下代码：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n也可以写成如下，也是可以的，`import`跟他类似。\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport name1;\r\nexport name2;\r\n```\r\n\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607913-1563815917.jpg)', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 15:15:05', 2076, 14, '45ad14f1e4d1s4xs', NULL, NULL, '2021-04-21 15:15:28', '56sd54e56s254ds52', 'http://localhost:3000/detailPages');
INSERT INTO `blog_article` VALUES (3, '85756ds4145d', '程序员在职成长指南 用对这6个方法技术快速提升', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。', '2021-04-22 10:23:57', 152452, 58, '4521452s5f252f45s85', NULL, NULL, '2021-04-07 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages');
INSERT INTO `blog_article` VALUES (4, '85756ds4145d', 'Vue3.x从零开始学-第二季 组件篇', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '在学习这个视频之前，你需要先学习《Vue3.x从零开始学-第一集-基础语法篇》。第二季（本教程）主要讲解Vue3中组件的一些知识，包括什么是全局组件、局部组件、组件如何复用、组件间的传值，单项数据流、Non-Props属性、父子组件的 通信、组件双向绑定、组件中使用插槽、还包括动态组件和异步组件。\r\n\r\n但是你还是需要记住，学习本课程前，还是需要先对基础知识有所了解。', '2021-04-08 10:23:57', 152445, 9, '564ddsa1f234d1dsf', NULL, NULL, '2021-04-17 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages');
INSERT INTO `blog_article` VALUES (5, '4fs4f1gd4dd5sad', '2021前端开发学习路径 一张图让你轻松自学', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 15:15:05', 2076, 9, '45ad14f1e4d1s4xssd', NULL, NULL, '2021-04-21 15:15:28', '56sd54e56s254ds52', 'http://localhost:3000/detailPages');
INSERT INTO `blog_article` VALUES (6, '85756ds4s145dad', '程序员在职成长指南 用对这6个方法技术快速提升', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。', '2021-04-22 10:23:57', 152452, 10, '4521452s5f252f45s85sdwd', NULL, NULL, '2021-04-07 10:24:24', '56sd54e56s254ds52', 'http://localhost:3000/detailPages');

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
  `status` int(0) NULL DEFAULT NULL COMMENT '当前状态 1正常',
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
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_icon
-- ----------------------------
INSERT INTO `blog_icon` VALUES (1, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-shipin', '2021-04-23 14:39:58', '2021-04-23 14:40:00', 'ads54d4a8d4sd48', 'header', NULL);
INSERT INTO `blog_icon` VALUES (2, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-xiaolianxiaolian', '2021-04-23 14:40:49', '2021-04-23 14:40:51', '5sad465sd4s56adsd1', 'header', NULL);
INSERT INTO `blog_icon` VALUES (3, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-liaotian', '2021-04-23 14:41:16', '2021-04-23 14:41:20', 'w4sa1ds5254ds5sad4', 'header', NULL);
INSERT INTO `blog_icon` VALUES (4, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-zhuye', '2021-04-23 14:41:55', '2021-04-23 14:41:57', '12d4sf1df2rf1gf2', 'header', NULL);
INSERT INTO `blog_icon` VALUES (5, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-iconset0239', '2021-04-23 14:42:19', '2021-04-23 14:42:21', '5s4d5s1f4ds2', 'header', NULL);
INSERT INTO `blog_icon` VALUES (6, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-changyongicon-', '2021-04-23 16:00:34', '2021-04-23 16:00:37', 'd1415as4des5f4ds5ds', 'articleList', 'releaseTime');
INSERT INTO `blog_icon` VALUES (7, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-wenjianjia', '2021-04-23 16:01:30', '2021-04-23 16:01:33', 'd1sd24s152fd1s5f2g1fv5', 'articleList', 'type_name');
INSERT INTO `blog_icon` VALUES (8, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-icon--', '2021-04-23 16:02:09', '2021-04-23 16:02:12', '4s4dd5fe4sd25ff4d25f1d', 'articleList', 'view_count');
INSERT INTO `blog_icon` VALUES (9, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-file', '2021-04-23 16:02:51', '2021-04-23 16:02:54', 'e1fsd1256sd1f5df2', 'articleList', 'view_full_text_front');
INSERT INTO `blog_icon` VALUES (10, '//at.alicdn.com/t/font_2507031_ghb7pxcbgj9.js', 'icon-iconfontjiantou2', '2021-04-22 17:17:02', '2021-04-23 17:17:05', 's54d5s3f4e2d5g4tr', 'articleList', 'view_full_text_later');

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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_learningpath
-- ----------------------------
INSERT INTO `blog_learningpath` VALUES (1, '5d54as5d4sdds5', 'Vue3.x学习路线', '4521452s5f252f45', '2021-04-22', '张宇', 1, '基础到实战');
INSERT INTO `blog_learningpath` VALUES (2, '43d4as5d4ds5ad4', 'React学习路线', '45ad14f1e4d1s4xs', '2021-04-21', '张宇', 1, '基础到实战');
INSERT INTO `blog_learningpath` VALUES (3, '5sd4as554dsd1', 'Vue2.x学习路线', '4521452s5f252f45s85', '2021-04-11', '博客园', 1, '基础到实战');
INSERT INTO `blog_learningpath` VALUES (4, '45a4dsa654d56s35d4s', 'Flutter学习路线', '564ddsa1f234d1dsf', '2021-01-01', '博客园', 1, '基础到实战');

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_user
-- ----------------------------
INSERT INTO `blog_user` VALUES (1, '张宇', '男', 25, '56sd54e56s254ds52', '因为美好的东西都是免费的，比如水、阳光和空气，所以本站视频全部免费。', 'https://github.com/Sir-yuChen', NULL, '2470838639', '18739473138', NULL, 'https://img1.baidu.com/it/u=2491306664,177039371&fm=26&fmt=auto&gp=0.jpg', '2021-04-21', 1);

SET FOREIGN_KEY_CHECKS = 1;
