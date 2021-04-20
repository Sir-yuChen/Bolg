import React,{useState} from 'react'
import BreadcrumbCss from '../styles/components/breadcrumbs.module.css'

import {Breadcrumb } from 'antd'
function Breadcrumbs() {

    const [cardList,setCardList] = useState({
        before:[
            {
                cardName:"首页",
                cardPath:"/"
            },{
                cardName:"视频",
                cardPath:"/video"
            }
        ],
        currentPosition:{
            cardName:'视频教程',
            cardPath:'/video'
        }
    })

    return (
        <div className={`${BreadcrumbCss.breadcrumbCss_div}`}>
            <Breadcrumb className={`${BreadcrumbCss.breadcrumbCss_breadcrumb}`}>
                {
                    cardList.before.map(item=>{
                        return(
                             <a href={item.cardPath} key={item.cardPath}><Breadcrumb.Item>{item.cardName}</Breadcrumb.Item></a>
                        )
                    })
                }
                <Breadcrumb.Item>{cardList.currentPosition.cardName}</Breadcrumb.Item> 
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
