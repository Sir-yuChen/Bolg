import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import LearningPath from '../components/LearningPath'

import {Row,Col } from 'antd'

const Index = () => {

  return(
    <div className="body">
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={10} lg={15} xl={9}  >
          {/* 文章列表 */}
          <ArticleList/>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={4}>
          {/* 博主介绍 */}
          <Author/>
          {/* 学习路线 */}
          <LearningPath/>
          {/* 广告模块 */}
          <Advert/>
        </Col>
      </Row>
        {/* 版权说明组件 */}
      <Footer/>
  </div>
  )
}
export default Index