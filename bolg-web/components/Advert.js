import React,{useState} from 'react'

import {List} from 'antd'
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
        <div>
            <List
                header={advertList.headline}
                dataSource={advertList.dataList}
                renderItem={item=>(
                    <List.Item>
                        <div>
                            {item.title}
                            <img src={item.playbill} width="100%" />
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Advert
