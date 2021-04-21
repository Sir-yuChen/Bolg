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

 Date: 21/04/2021 18:07:04
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_article
-- ----------------------------
INSERT INTO `blog_article` VALUES (1, '85756ds4145d', '测试数据', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 10:23:57', 1524, 7, '4521452s5f252f45', NULL, NULL, '2021-04-21 10:24:24', '56sd54e56s254ds52');
INSERT INTO `blog_article` VALUES (2, '85756ds4145d', '2021前端开发学习路径 一张图让你轻松自学', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 15:15:05', 2076, 14, '45ad14f1e4d1s4xs', NULL, NULL, '2021-04-21 15:15:28', '56sd54e56s254ds52');
INSERT INTO `blog_article` VALUES (3, '85756ds4145d', '程序员在职成长指南 用对这6个方法技术快速提升', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。', '2021-04-22 10:23:57', 152452, 58, '4521452s5f252f45s85', NULL, NULL, '2021-04-07 10:24:24', '56sd54e56s254ds52');
INSERT INTO `blog_article` VALUES (4, '85756ds4145d', 'Vue3.x从零开始学-第二季 组件篇', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '在学习这个视频之前，你需要先学习《Vue3.x从零开始学-第一集-基础语法篇》。第二季（本教程）主要讲解Vue3中组件的一些知识，包括什么是全局组件、局部组件、组件如何复用、组件间的传值，单项数据流、Non-Props属性、父子组件的 通信、组件双向绑定、组件中使用插槽、还包括动态组件和异步组件。\r\n\r\n但是你还是需要记住，学习本课程前，还是需要先对基础知识有所了解。', '2021-04-08 10:23:57', 152445, 9, '564ddsa1f234d1dsf', NULL, NULL, '2021-04-17 10:24:24', '56sd54e56s254ds52');
INSERT INTO `blog_article` VALUES (5, '4fs4f1gd4dd5sad', '2021前端开发学习路径 一张图让你轻松自学', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '想自学前端？却不知道学习路径。报个班吧，又怕被坑。这期视频和文章一定可以帮助到你。\r\n\r\n在2017年以前，想给出一张学习前端路径是非常困难的，因为那时候前端技术疯狂涌现，争斗不断，每个公司所用的东西也各不相同。但最近两年，前端技术和三大框架地位趋于稳定，所以我才敢给出这个前端开发学习路径。', '2021-04-21 15:15:05', 2076, 9, '45ad14f1e4d1s4xssd', NULL, NULL, '2021-04-21 15:15:28', '56sd54e56s254ds52');
INSERT INTO `blog_article` VALUES (6, '85756ds4s145dad', '程序员在职成长指南 用对这6个方法技术快速提升', '# P01:课程介绍和环境搭建\\n[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \\n> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \\n\\n**这是加粗的文字**\\n\\n*这是倾斜的文字*`\\n\\n***这是斜体加粗的文字***\\n\\n~~这是加删除线的文字~~ \\n\\n\\`console.log(111)\\` \\n\\n# p02:来个Hello World 初始Vue3.0\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n***\\n\\n\\n# p03:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p04:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n#5 p05:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p06:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n# p07:Vue3.0基础知识讲解\\n> aaaaaaaaa\\n>> bbbbbbbbb\\n>>> cccccccccc\\n\\n``` var a=11; ```', '你可能不信。我曾经是也是一个有满头秀发的程序员，但随着时间的流逝，一晃14年过去了。茂密的头发也隐秘无声的离我远去。很多人都说学程序会掉头发，在我这就算实锤了，我就是一个真人版的案例。你可能说，你又不是大佬，没有说服力。那我们再来看这三张图（Java之父，James ； PHP之父，拉斯马斯·勒德尔夫，C++之父，本贾尼·斯特劳斯特卢普），这都是编程界大神，头型和我都神似。\r\n\r\n牺牲了如此多的头发，但我悟出了快速成长的方法，在这里分享给你。', '2021-04-22 10:23:57', 152452, 10, '4521452s5f252f45s85sdwd', NULL, NULL, '2021-04-07 10:24:24', '56sd54e56s254ds52');

-- ----------------------------
-- Table structure for blog_article_type
-- ----------------------------
DROP TABLE IF EXISTS `blog_article_type`;
CREATE TABLE `blog_article_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `type_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章类型唯一UUID',
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型名称',
  `type_creatTime` date NOT NULL COMMENT '类型创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_article_type
-- ----------------------------
INSERT INTO `blog_article_type` VALUES (1, '85756ds4145d', '视频教程', '2021-04-21');
INSERT INTO `blog_article_type` VALUES (2, '4fs4f1gd4dd5sad', '软技能', '2021-04-20');
INSERT INTO `blog_article_type` VALUES (3, '85756ds4s145dad', '逼逼叨叨', '2021-04-02');

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
