import React from 'react'
import DetailCss from '../styles/components/detail.module.css'
import ReactMarkdown from 'react-markdown'
import Breadcrumbs from '../components/Breadcrumbs'

import {Divider} from 'antd'
import {CalendarOutlined,FolderOpenOutlined,FireOutlined,PlaySquareOutlined} from '@ant-design/icons';

const Detail = () => {

    let markdown='# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~ 这是加删除线的文字 ~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'

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
            <div className={`${DetailCss.details_markdownContent}`}>
                <ReactMarkdown 
                    children={markdown} 
                    escapeHtml={false}  
                />
            </div>
            
        </div>
    )
}

export default Detail
