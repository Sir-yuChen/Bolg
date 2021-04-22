import React from 'react'
import NavigationCss from '../styles/components/navigation.module.css'

import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import {Affix,Divider} from 'antd'

const Navigation = () => {

    let markdowns=" # export，import ，export default \r\n\r\n`ES6`模块主要有两个功能：**export和import**\r\n* `export`用于对外输出本模块（一个文件可以理解为一个模块）变量的接口\r\n* `import`用于在一个模块中加载另一个含有`export`接口的模块。\r\n\r\n也就是说使用`export`命令定义了模块的对外接口以后，其他`JS`文件就可以通过`import`命令加载这个模块（文件）。这几个都是ES6的语法。\r\n\r\n# export和import（一个导出一个导入）\r\n----------\r\n一个`a.js`文件有如下代码：\r\n```java\r\nexport var name=\"李四\";\r\n```\r\n此时在另个文件中，我们就可以引入已经编写好的相关模块\r\n```java\r\nimport { name } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n data () {\r\n return { } }, created:function(){ alert(name)//可以弹出来“李四” } }\r\n```\r\n上面的例子是导出单个变量的写法，如果是导出多个变量就应该按照下边的方法，用大括号包裹着需要导出的变量：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n引入变量使用：\r\n```java\r\nimport { name1 , name2 } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n data () {\r\n return { } }, created:function(){ alert(name1)//可以弹出来“李四” alert(name2)//可以弹出来“张三” } }\r\n```\r\n如果导出的是个函数呢，那应该怎么用呢,其实一样，如下\r\n```java\r\nfunction add(x,y){\r\n alert(x*y)\r\n // 想一想如果这里是个返回值比如： return x-y，下边的函数怎么引用\r\n} export { add }\r\n```\r\n在其他文件里引用如下:\r\n```java\r\nimport { add } from \"/.a.js\" //路径根据你的实际情况填写\r\nexport default {\r\n data () {\r\n return { } }, created:function(){ add(4,6) //弹出来24 } }\r\n```\r\n\r\n# export与export default\r\n-------\r\n但是`export`跟`export default` 有什么区别呢？如下：\r\n\r\n* 1、`export`与`export default`均可用于导出常量、函数、文件、模块等\r\n* 2、你可以在其它文件或模块中通过**`import`+(常量 | 函数 | 文件 | 模块)名**的方式，将其导入，以便能够对其进行使用\r\n* 3、在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个\r\n* 4、通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要\r\n\r\n> 这样来说其实很多时候`export`与`export default`可以实现同样的目的，只是用法有些区别。注意第四条，通过`export`方式导出，在导入时要加`{ }`，`export default`则不需要。使用`export default`命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。\r\n\r\n**示例**\r\n```java\r\nvar name=\"李四\";\r\nexport { name }\r\n//import { name } from \"/.a.js\" \r\n可以写成：\r\nvar name=\"李四\"; export default name //import name from \"/.a.js\" 这里name不需要大括号\r\n```\r\n再看第3条，在一个文件或模块中，`export`、`import`可以有多个，`export default`仅有一个，也就是说如下代码：\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport { name1 ,name2 }\r\n```\r\n也可以写成如下，也是可以的，`import`跟他类似。\r\n```java\r\nvar name1=\"李四\";\r\nvar name2=\"张三\";\r\nexport name1;\r\nexport name2;\r\n```\r\n\r\n\r\n![](https://img2020.cnblogs.com/blog/2026387/202101/2026387-20210128110607913-1563815917.jpg)"
    
    return (
        <div className={`${NavigationCss.navigation_div}`}>
            <Affix>
                <div className={`${NavigationCss.navigation_title_div}`}>
                    <Divider >
                        文章目录
                    </Divider>
                </div>
                <div className={`${NavigationCss.navigation_content_div}`}>
                    <MarkNav
                        className={`${NavigationCss.navigation_content}`}
                        source={markdowns}
                        // headingTopOffset={80}			//点击后到达页面的位置
                        ordered={true}
                    /> 
                </div>
           </Affix>
        </div>
    )
}

export default Navigation
