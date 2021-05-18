import React,{useState,useEffect} from 'react'
import {getHotSearch} from '../../../service/dataPage'
import '../../../style/rankingList.css'

import { Tabs ,Divider,List } from 'antd'

const { TabPane } = Tabs

const RankingList = () => {

   const [resultList,setResultList] = useState([])
   const [videoList,setVideoList] = useState([])
    useEffect(() => {
        getHotSearch(1).then(
            res=>{
                setResultList(res.data.data)
            }
        )
    }, [])

    function callback(key) {
        getHotSearch(key.key).then(
            res=>{
                if (key.key == 1) {
                    setResultList(res.data.data)
                }else{
                    setVideoList(res.data.data)
                }
            }
        )
      }

    return (
        <div>
            <Divider>Bolg热榜</Divider>
            <Tabs defaultActiveKey="1" onChange={callback} centered>
                <TabPane tab="文章点击量" key="1">
                    <List
                        dataSource={resultList}
                        renderItem={(item,index)=>(
                            <List.Item >
                                <span style={{color:index+1 <4 ? 'red':'',marginLeft:20}} >
                                    {index+1}
                                    <span className='article_title_span'>
                                        {item.article_title}
                                    </span>
                                </span>
                            </List.Item>
                        )}
                    />
                </TabPane>
                <TabPane tab="视频集" key="2">
                    <List
                        dataSource={videoList}
                        renderItem={(item,index)=>(
                            <List.Item>
                                <span style={{color:index+1 <4 ? 'red':'',marginLeft:20}} >
                                    {index+1}
                                    <span className='article_title_span'>
                                        {item.article_title}
                                    </span>
                                </span>
                            </List.Item>
                        )}
                    />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default RankingList
