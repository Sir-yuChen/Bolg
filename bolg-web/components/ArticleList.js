import React,{useState,useEffect} from 'react'
import ArticleListCss from '../styles/components/articleList.module.css'
import  servicePath  from '../config/apiUrl'
import {ICON_URL_JS} from  '../config/iconUrl'
import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'

import { List, Tag } from 'antd'
import {createFromIconfontCN } from '@ant-design/icons';
import axios from 'axios'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
const ArticleList = (props) => {

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL_JS,
      });
    
   const [articleList,setArticleList] = useState([{}])
   const [iconList,setIconList] = useState({})

    useEffect( async ()=>{
        axios.get( servicePath.getArticleList,{params:{typePath:props.typePath}}).then(
            (res)=>{
                setArticleList(res.data.data) 
                console.log(`查询文章列表已经Tag标签集合`, res.data.data)
            }
        ) 
        axios.get( servicePath.getIconObj,{params:{site:"articleList"}}).then(
            (res) => {
                setIconList(JSON.parse( res.data.data[0].iconKV))
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
            <span hidden={props.typePath == '/' ? true : false}>
                <Breadcrumbs
                    type="articleList" 
                    name={props.typeName}
                    path={props.typePath}
                />
            </span>
            <List   
                header = {<div className={`${ArticleListCss.article_header}`}>最新文章</div>}
                itemLayout = 'vertical'
                dataSource = {articleList}
                renderItem = { (item,index)=>{
                    return(
                        <List.Item>
                            <div className={`${ArticleListCss.article_div}`} >
                                    <Link  href={{pathname:'/detailPages',query:{article_uuid:item.article_uuid}}}>
                                        <a>
                                            <div className={`${ArticleListCss.article_title}`} >
                                                {item.article_title}
                                            </div>
                                        </a>
                                    </Link>
                                    <div >
                                        标签div
                                        {/* TODO  待完成 */}
                                        {/* <List
                                           dataSource = {item.tag==null ? '': item.tag } 
                                           renderItem = { (tagItem)=>{
                                               console.log(`标签div：`,tagItem )
                                                return(
                                                        <span>

                                                            <Tag  className={`${ArticleListCss.author_tag}`}  visible={tagItem.tag_visible == 1 ? true:false} color={tagItem.tag_color}>{tagItem.tag_content}</Tag> 
                                                        </span>
                                                    )
                                                }
                                            }
                                        /> */}
                                    </div>
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
                                            <Link  href={{pathname:'/detailPages',query:{article_uuid:item.article_uuid}}}>
                                                <a>
                                                    <div  className={`${ArticleListCss.article_context_span}`}>
                                                        <IconFont type={iconList.view_full_text_front}/>  查看全文
                                                        <IconFont type={iconList.view_full_text_later}/> 
                                                    </div>
                                                </a>
                                            </Link>
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
