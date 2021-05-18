import React ,{useState,useEffect}from 'react'
import '../../style/dataStatistics.css'
import {ICON_URL} from '../../config/IconUrl'
import EchartsArticle from './echarts/EchartsArticle'
import RankingList from './echarts/RankingList'
import EchartsByType from './echarts/EchartsByType'
import Notification from './echarts/Notification'
import {getDataNum} from '../../service/dataPage'



import {  Col, Row,Divider   } from 'antd'     
import { createFromIconfontCN  } from '@ant-design/icons'


const DataStatistics = () => {

    const [iconList,setIconList] = useState({})
    const [allArticle,setAllArticle] = useState(0)
    const [allcount,setAllcount] =useState(0)
    const [allVideoNumb,setAllVideoNumb] =useState(0)

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL,
      });
    
    useEffect(() => {
        getDataNum().then(
            res =>{
                setAllArticle(res.data.data[0].allArticle)
                setAllcount(res.data.data[0].allcount)
                setAllVideoNumb(res.data.data[0].allVideoNumb)
            }
        )
    }, [])



    return (
        <div className="site-card-wrapper">
            <Row gutter={16} className='row_div'>
                <Col span={6}  className='col_div'>
                    <Row  gutter={8} >  
                        <Col span={12}>
                            <div className='' >
                                <div className='col_div_icon' >
                                    <IconFont type ='icon-wenzhang'  />
                                </div>
                                <div className='col_div_text' >
                                    <div>
                                        文章总量
                                    </div>
                                    <div>
                                       {allArticle}篇
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='' >
                                <div className='col_div_icon' >
                                    <IconFont type ='icon-shipin'  />
                                </div>
                                <div className='col_div_text' >
                                    <div>
                                        视频总量
                                    </div>
                                    <div>
                                        {allVideoNumb}集
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row  gutter={8}>
                        <Col span={12}>
                            <div className='' >
                                    <div className='col_div_icon' >
                                        <IconFont type ='icon-fangwen'  />
                                    </div>
                                    <div className='col_div_text' >
                                        <div>
                                            文章点击量
                                        </div>
                                        <div>
                                            {allcount}次
                                        </div>
                                    </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='' >
                                    <div className='col_div_icon' >
                                        <IconFont type ='icon-pinglun'  />
                                    </div>
                                    <div className='col_div_text' >
                                        <div>
                                            评论量
                                        </div>
                                        <div>
                                        65455452条
                                        </div>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <div >
                            待定
                        </div>
                    </Row>
                </Col>
                <Col span={17} className='col_div'>
                   <EchartsArticle/>
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={6} className='col_div'>
                    <RankingList/>
                </Col>
                <Col span={7} className='col_div_echarts'>
                    <Notification/>
                </Col>
                <Col span={10} className='col_div_echarts'>
                    <EchartsByType/>
                </Col>
            </Row>
      </div>
    )
}

export default DataStatistics
