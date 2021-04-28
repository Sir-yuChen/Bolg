import React,{useEffect,useState} from 'react'
import Article_messageCss from '../styles/components/article_message.module.css'
import servicePath from '../config/apiUrl'
import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'

import axios from 'axios'

const Article_message = (props) => {

    const [ArticleList_Message,setArticleList_Message] = useState([])

    useEffect(
        async ()=>{
            axios(servicePath.getArticleList_Message,{params:{typePath:props.typePath}}).then(
                res => {
                    // console.log(`Message获得数据列表`, res.data.data)
                    setArticleList_Message(res.data.data)
                }
            )
        }
    ,[])
    
    
    return (
        <div >
            <Breadcrumbs
                 type="message" 
                 name="逼逼叨叨"
                 path={props.typePath}
            />
            {/* 推荐模块内容 */}
            <div className={`${Article_messageCss.message_content}`}>
                {
                    ArticleList_Message.map(
                        content => (
                            <div   className={`${Article_messageCss.message_content_div}`}>
                               <Link href={{pathname:'/detailPages',query:{article_uuid:content.article_uuid}}}>
                                    <a >
                                        <div className={`${Article_messageCss.message_content_img}`}>
                                            <img src={content.article_cover} width='100%'/>
                                        </div>
                                        <div className={`${Article_messageCss.message_content_text}`} >
                                            {content.article_title}
                                        </div>
                                    </a>
                               </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Article_message
