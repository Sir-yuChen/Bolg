import React,{useState,useEffect} from 'react'
import ArticleListCss from '../styles/components/articleList.module.css'
import {MYSQL_URL} from '../components/StaticConst'

import { List ,Divider} from 'antd'
import {CalendarOutlined,FolderOpenOutlined,FireOutlined,RightOutlined,FileOutlined} from '@ant-design/icons';
import axios from 'axios'


const ArticleList = () => {
    
   const [articleList,setArticleList] = useState([{}])

    useEffect( async ()=>{
        console.log("开始获得文章数据")
        axios.get(MYSQL_URL+'/default/getArticleList').then(
            (res)=>{
                console.log(res.data)
                setArticleList(res.data.data) 
            }
        )
    },[])

    return (
        <div>
            {/* 面包屑导航
            <Breadcrumbs/> */}
            <List   
                header = {<div className={`${ArticleListCss.article_header}`}>最新文章</div>}
                itemLayout = 'vertical'
                dataSource = {articleList}
                renderItem = { item=>{
                    return(
                        <List.Item>
                            <div className={`${ArticleListCss.article_title}`}>{item.article_title}</div>
                            <div className={`${ArticleListCss.article_icon}`}>
                                <span className={`${ArticleListCss.article_icon_span}`}>
                                    <CalendarOutlined />
                                    {item.releaseTime}
                                </span>
                                <span  className={`${ArticleListCss.article_icon_span}`}>
                                    <FolderOpenOutlined /> 
                                    {item.type_name}
                                </span>
                                <span  className={`${ArticleListCss.article_icon_span ,ArticleListCss.article_icon_span_numb}`}>
                                    <FireOutlined />
                                    {item.view_count} 人
                                </span> 
                            </div>
                            <div className={`${ArticleListCss.article_context}`}>
                                {item.introduce}
                                <a href=''>
                                    <span >
                                        <FileOutlined />  查看全文   <RightOutlined />
                                    </span>
                                </a>

                                <Divider/>
                            </div>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default ArticleList
