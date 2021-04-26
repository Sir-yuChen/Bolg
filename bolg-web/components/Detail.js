import React ,{useState,useEffect} from 'react'
import DetailCss from '../styles/components/detail.module.css'
import Breadcrumbs from '../components/Breadcrumbs'
import {useRouter }  from 'next/router'
import  servicePath  from '../config/apiUrl'
import {ICON_URL_JS} from  '../config/iconUrl'

import {createFromIconfontCN } from '@ant-design/icons';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import axios from 'axios'

const Detail = () => {

    const router = useRouter(); //接收Link传递的参数
    const renderer = new marked.Renderer(); 

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL_JS,
      });

    const [articleDetail,setArticleDetail] = useState({})
    const [iconList,setIconList] = useState({})

    marked.setOptions({
        renderer: renderer, 
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }
    }); 

    useEffect( () => {
        axios(servicePath.getArticleById,{params:{article_uuid:router.query.article_uuid}}).then(
            res => {
                // console.log(`获取文章详细内容：`, res.data.data[0])
                setArticleDetail( res.data.data[0])
               }
        )
        axios.get( servicePath.getIconObj,{params:{site:"detail"}}).then(
            (res) => {
                setIconList(JSON.parse( res.data.data[0].iconKV))
               }
        )  
    }, [])

    return (
        <div className={`${DetailCss.details_div}`}>
            {/* 面包屑导航 */}
            <Breadcrumbs />              
            {/* 标题 */}
            <div className={`${DetailCss.details_title}`}>
                {articleDetail.article_title}
            </div>
            {/* 内容相关 */}
            <div className={`${DetailCss.details_icon}`}>
                <span  className={`${DetailCss.details_icon_span}`}>
                    <IconFont type ={iconList.releaseTime} />
                    {articleDetail.releaseTime}
                </span>
                <span className={`${DetailCss.details_icon_span}`}>
                    <IconFont type ={iconList.type_name} />
                    {articleDetail.type_name}
                </span>
                <span className={`${DetailCss.details_icon_span}`}>
                    <IconFont type ={iconList.view_count} />
                    {articleDetail.view_count} 人
                </span>
                <span className={`${DetailCss.details_icon_span}`}>
                    <IconFont type ={iconList.video_number} />
                    共{articleDetail.video_number} 集
                </span>
            </div>
            {/* 文章内容 markdown解析 */}
            <div className={`${DetailCss.details_markdownContent}`}
            dangerouslySetInnerHTML={{__html:marked(articleDetail.article_content === undefined ? '': articleDetail.article_content ) }}
            > 
                {/* {console.log(html)} */}
            </div>
            
        </div>
    )
}


export default Detail
