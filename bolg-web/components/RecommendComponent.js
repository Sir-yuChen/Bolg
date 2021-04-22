import React,{useState} from 'react'
import RecommendComponentCss from '../styles/components/recommendComponent.module.css'

import {List } from 'antd'
import {DoubleRightOutlined} from '@ant-design/icons';


const RecommendComponent = () => {

    const [recommendList ,setreCommendList] =  useState([
        {
            componentName:'大胖比比叨叨',
            componentName_path:"https://jspang.com/bibidao",
            componentContent:[
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"},
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"},
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"},
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"}            ]
        },
        {
            componentName:'大胖比比叨叨2',
            componentName_path:"https://jspang.com/bibidao",
            componentContent:[
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"},
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"},
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"},
                {article_img:'https://newimg.jspang.com/BBD64.jpg',article_path:'https://www.jspang.com/detailed?id=72',article_name:"2021前端开发学习路径 一张图让你轻松自学"}            ]
        }
    ])

    return (
        <div >
            {
                recommendList.map(
                    recommendListItem =>(
                        <div key={recommendListItem.componentName} className={`${RecommendComponentCss.recommend_div}`}>
                            {/* 推荐模块标题 */}
                            <div className={`${RecommendComponentCss.recommend_title}`}>
                                {recommendListItem.componentName}
                                <a href={recommendListItem.componentName_path}>
                                    <span >
                                        更多 
                                        <DoubleRightOutlined  className={`${RecommendComponentCss.recommend_rightOutlined}`} />
                                    </span>
                                </a>
                                <hr className={`${RecommendComponentCss.recommend_hr}`}/>
                            </div>
                            {/* 推荐模块内容 */}
                            <div className={`${RecommendComponentCss.recommend_content}`}>
                                {
                                    recommendListItem.componentContent.map(
                                        content => (
                                            <div   className={`${RecommendComponentCss.recommend_content_div}`}>
                                                <a href={content.article_path}>
                                                    <div className={`${RecommendComponentCss.recommend_content_img}`}>
                                                        <img src={content.article_img} width='100%'/>
                                                    </div>
                                                    <div className={`${RecommendComponentCss.recommend_content_text}`} >
                                                        {content.article_name}
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default RecommendComponent
