import React,{useState,useEffect} from 'react'
import NavigationCss from '../styles/components/navigation.module.css'
import  servicePath  from '../config/apiUrl'
import {useRouter }  from 'next/router'

import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import {Affix,Divider} from 'antd'
import axios from 'axios'

const Navigation = () => {

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
                        source={articleDetail.article_content}
                        // headingTopOffset={80}			//点击后到达页面的位置
                        ordered={true}
                    /> 
                </div>
           </Affix>
        </div>
    )
}

export default Navigation
