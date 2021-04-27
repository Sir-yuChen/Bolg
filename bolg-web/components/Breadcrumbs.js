import React,{useState,useEffect} from 'react'
import BreadcrumbCss from '../styles/components/breadcrumbs.module.css'
import  servicePath  from '../config/apiUrl'

import Link from 'next/link'
import {Breadcrumb,List} from 'antd'
import axios from 'axios'
import {useRouter }  from 'next/router'

function Breadcrumbs(props) { 

    const router = useRouter(); //接收Link传递的参数

    const [articleDetail,setArticleDetail] = useState({before:[{cardName:'首页',cardPath:'/'}],current:{cardName:'',cardPath:''}})


    useEffect( async () => {
        if (props.type == 'article_uuid' ) {
            axios(servicePath.getArticleById,{params:{article_uuid:router.query.article_uuid}}).then(
                res => {
                    console.log(`获取文章详细内容：`, res.data.data[0])
                    // setArticleDetail( res.data.data[0])
                    articleDetail.before.push({cardName:res.data.data[0].type_name,cardPath:res.data.data[0].type_path})
                    articleDetail.current.cardName=res.data.data[0].article_title
                    articleDetail.current.cardPath=res.data.data[0].article_path
                   }
            )
        }
        if(props.type !== 'article_uuid'){
            articleDetail.current.cardName=props.name
            articleDetail.current.cardPath=props.path
        }
    },[])

    return (
        <div className={`${BreadcrumbCss.breadcrumbCss_div}`}  >
            <Breadcrumb className={`${BreadcrumbCss.breadcrumbCss_breadcrumb}`}>
                {
                    articleDetail.before.map(
                        (item) =>(
                            <Link  key={item.cardPath}  href ={item.cardPath} ><a><Breadcrumb.Item>{item.cardName}</Breadcrumb.Item></a></Link>
                        )
                    )
                }

                <Breadcrumb.Item>{articleDetail.current.cardName}</Breadcrumb.Item> 
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs










// // 假设这是我们要请求的数据
// function getSomething(n) {
//     return new Promise(resolve => { 
//         // 模拟1s后返回数据 
//         setTimeout(() => resolve(222), 1000); 
//     });
// } 
// function requestSomething() { 
//     console.log(111);
//     getSomething().then(
//         res => console.log(res)
//         ); 
//     console.log(333);
//  } 
//  requestSomething()
//   //这个时候会输出 111，333，222 
//   // 如果想要等数据返回后再执行后面的代码，那么就要使用 async/await 
//   async function requestSomething() { 
//       console.log(111); 
//       // 这时something会等到异步请求的结果回来后才进行赋值，同时不会执行之后的代码 
//       const something = await getSomething(); 
//       console.log(something) 
//       console.log(333); 
//   } 
  
//   requestSomething() //这个时候会输出 111，222，333