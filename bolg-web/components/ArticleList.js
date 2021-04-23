import React,{useState,useEffect} from 'react'
import ArticleListCss from '../styles/components/articleList.module.css'
import  servicePath  from '../config/apiUrl'
import {ICON_URL_JS} from  '../config/iconUrl'


import { List } from 'antd'
import {createFromIconfontCN } from '@ant-design/icons';
import axios from 'axios'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';


const ArticleList = () => {

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL_JS,
      });
    
   const [articleList,setArticleList] = useState([{}])
   const [iconList,setIconList] = useState({})

    useEffect(  ()=>{
        axios.get( servicePath.getArticleList).then(
            (res)=>{setArticleList(res.data.data) }
        ) 

        axios.get( servicePath.getIconObj,{params:{site:"articleList"}}).then(
            (res) => {
                setIconList(res.data.data[0].iconKV)// TODO 数据赋值失败
                console.log("--->",iconList)
            }
        )  
    },[])

    const renderer = new marked.Renderer(); 
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

    return (
        <div>
            {/* 面包屑导航
            <Breadcrumbs/> */}
            <List   
                header = {<div className={`${ArticleListCss.article_header}`}>最新文章</div>}
                itemLayout = 'vertical'
                dataSource = {articleList}
                renderItem = { (item,index)=>{
                    return(
                        <List.Item>
                           <div className={`${ArticleListCss.article_div}`}>
                            <a href={item.article_path }>
                                    <div className={`${ArticleListCss.article_title}`}>
                                        {item.article_title}
                                    </div>
                                </a>
                                <div className={`${ArticleListCss.article_icon}`}>
                                    <span className={`${ArticleListCss.article_icon_span}`}>
                                        <IconFont type={iconList.releaseTime}/>
                                        {item.releaseTime}
                                    </span>
                                    <span  className={`${ArticleListCss.article_icon_span}`}>
                                        <IconFont type={iconList.type_name}/>
                                        {item.type_name}
                                    </span>
                                    <span  className={`${ArticleListCss.article_icon_span ,ArticleListCss.article_icon_span_numb}`}>
                                        <IconFont type={iconList.view_count}/>
                                        {item.view_count} 人
                                    </span> 
                                </div>
                                <div className={`${ArticleListCss.article_context}`}>
                                    <span  dangerouslySetInnerHTML={{__html: marked(articleList[index].introduce === undefined ? '':articleList[index].introduce) }}></span>
                                        <a href={item.article_path}>
                                            <div  className={`${ArticleListCss.article_context_span}`}>
                                                <IconFont type={iconList.view_full_text_front}/>  查看全文
                                                <IconFont type={iconList.view_full_text_later}/> 
                                            </div>
                                        </a>
                                </div>
                           </div>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default ArticleList
