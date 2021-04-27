import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import LearningPath from '../components/LearningPath'
import Link from 'next/link'
import Router from 'next/router'


import {Row,Col } from 'antd'


//getInitialProps仅适用于next.js中的Pages，所以子组件的正确方法是componentDidMount使用setState而不是props。

const Video = () => {


  return(
    <div className="body">
      <Head>
        <title>视频教程</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={10} lg={15} xl={9}  >
          {/* 文章列表 */}
          <ArticleList typePath= {"/video"} typeName= {"视频教程"}/>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={4}>
          {/* 博主介绍 */}
          <Author/>
        </Col>
      </Row>
        {/* 版权说明组件 */}
      <Footer/>
  </div>
  )
}
export default Video