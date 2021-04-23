import React,{useState} from 'react'
import AdvertCss from '../styles/components/advert.module.css'

import {Divider} from 'antd'

function Advert() {

    const [advertList,setAdvertList]  = useState(
        {
            headline:"广告推荐模块",
            dataList:[
                {
                    title:"技术教育",
                    playbill:"http://blogimages.jspang.com/WechatIMG12.jpeg",
                },
                {
                    title:"百世可乐",
                    playbill:"http://blogimages.jspang.com/WechatIMG12.jpeg",
                },
                {
                    title:"顺丰快递",
                    playbill:"http://blogimages.jspang.com/WechatIMG12.jpeg",
                },
                {
                    title:"明基显示器",
                    playbill:"http://blogimages.jspang.com/WechatIMG12.jpeg",
                }
            ]
        }
    )   

    return (
        <div  className={`${AdvertCss.background_div}`}>
            <div>
                <Divider>{advertList.headline}</Divider> 
            </div>
            {
                advertList.dataList.map(
                    item => (
                        <div className={`${AdvertCss.item_div}`}>
                            <a href=''>
                                <img src={item.playbill} width="100%" />
                                <hr />
                            </a>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Advert
