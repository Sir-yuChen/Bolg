import React ,{useState,useEffect} from 'react'
import DetailCss from '../styles/components/detail.module.css'
import Breadcrumbs from '../components/Breadcrumbs'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import {CalendarOutlined,FolderOpenOutlined,FireOutlined,PlaySquareOutlined} from '@ant-design/icons';

const Detail = () => {

    const renderer = new marked.Renderer(); 

    const [article_uuid,setArticle_uuid] = useState('')

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

    let html = marked("") 


    return (
        <div className={`${DetailCss.details_div}`}>
            {/* 面包屑导航 */}
            <Breadcrumbs/>            
            {/* 标题 */}
            <div className={`${DetailCss.details_title}`}>
                Vue3.x从零开始学-第三季 动画和过渡篇
            </div>
            {/* 内容相关 */}
            <div className={`${DetailCss.details_icon}`}>
                <span  className={`${DetailCss.details_icon_span}`}>
                    <CalendarOutlined />
                    2021-04-16
                </span>
                <span className={`${DetailCss.details_icon_span}`}>
                    <FolderOpenOutlined /> 
                    视频教程
                </span>
                <span className={`${DetailCss.details_icon_span}`}>
                    <FireOutlined />
                    25161 人
                </span>
                <span className={`${DetailCss.details_icon_span}`}>
                    <PlaySquareOutlined />
                    共七集
                </span>
            </div>
            {/* 文章内容 markdown解析 */}
            <div className={`${DetailCss.details_markdownContent}`}
            dangerouslySetInnerHTML={{__html:html}}
            > 
                {/* {console.log(html)} */}
            </div>
            
        </div>
    )
}


export default Detail
