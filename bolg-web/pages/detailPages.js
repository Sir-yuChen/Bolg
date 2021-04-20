import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Detail from '../components/Detail'
import Navigation from '../components/Navigation'
import RecommendComponent from '../components/RecommendComponent'


import {Row,Col } from 'antd'

function detailPages() {
    return (
        <div className="body">
            <Head>
                <title>文章详情页</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={10} lg={15} xl={9}  >
                    {/* 推荐模块 */}
                    <RecommendComponent/>
                    {/* 文章详情 组件*/}
                    <Detail/>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={4}>
                    {/* 博主介绍 */}
                    <Author/>
                    {/* 文章目录 */}
                    <Navigation/>
                </Col>
            </Row>
                {/* 版权说明组件 */}
            <Footer/>
        </div>
    )
}

export default detailPages
