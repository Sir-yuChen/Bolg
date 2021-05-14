import React ,{useState,useEffect}from 'react'
import '../../style/dataStatistics.css'
import {ICON_URL} from '../../config/IconUrl'
import EchartsArticle from './echarts/EchartsArticle'

import {  Col, Row,Divider   } from 'antd'     
import { createFromIconfontCN  } from '@ant-design/icons'


const DataStatistics = () => {

    const [iconList,setIconList] = useState({})

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL,
      });
    


    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={6}  className='col_div'>
                    <Row  gutter={8} >
                        <Col span={12}>
                            <div className='col_div' >
                                <div className='col_div_icon' >
                                    <IconFont type ='icon-wenzhang'  />
                                </div>
                                <div className='col_div_text' >
                                    <div>
                                        文章总量
                                    </div>
                                    <div>
                                        58514851篇
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='col_div' >
                                <div className='col_div_icon' >
                                    <IconFont type ='icon-shipin'  />
                                </div>
                                <div className='col_div_text' >
                                    <div>
                                        视频总量
                                    </div>
                                    <div>
                                        5454集
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row  gutter={8}>
                        <Col span={12}>
                            <div className='col_div' >
                                    <div className='col_div_icon' >
                                        <IconFont type ='icon-fangwen'  />
                                    </div>
                                    <div className='col_div_text' >
                                        <div>
                                            网站访问量
                                        </div>
                                        <div>
                                            53464548
                                        </div>
                                    </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='col_div' >
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
                        <div>
                            待定
                        </div>
                    </Row>
                </Col>
                <Col span={17} className='col_div'>
                   <EchartsArticle/>
                </Col>
            </Row>
            
        
      </div>
    )
}

export default DataStatistics
