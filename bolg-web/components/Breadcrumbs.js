import React,{useState,useEffect} from 'react'
import BreadcrumbCss from '../styles/components/breadcrumbs.module.css'
import  servicePath  from '../config/apiUrl'

import Link from 'next/link'
import {Breadcrumb} from 'antd'
import {useRouter }  from 'next/router'
import axios from 'axios'

function Breadcrumbs() { 

    const router = useRouter(); //接收Link传递的参数

    const [articleDetail,setArticleDetail] = useState({})

    useEffect( () => {
        axios(servicePath.getArticleById,{params:{article_uuid:router.query.article_uuid}}).then(
                res => {
                    // console.log(`获取文章详细内容：`, res.data.data[0])
                    setArticleDetail( res.data.data[0])
                }
            ) 
    },[])

    return (
        <div className={`${BreadcrumbCss.breadcrumbCss_div}`}  >
            <Breadcrumb className={`${BreadcrumbCss.breadcrumbCss_breadcrumb}`}>
                <Link   href = '/'><a ><Breadcrumb.Item>{"首页"}</Breadcrumb.Item></a></Link>
                <Link   href ='' ><a><Breadcrumb.Item>{articleDetail.type_name}</Breadcrumb.Item></a></Link>
                <Breadcrumb.Item>{articleDetail.article_title}</Breadcrumb.Item> 
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
