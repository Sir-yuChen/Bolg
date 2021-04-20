import React from 'react'
import headerCss from  '../styles/components/header.module.css'
import {
    HomeOutlined,
    PlaySquareOutlined,
    FormOutlined,
    CommentOutlined,
    SmileOutlined,
  } from '@ant-design/icons';

import {Row,Col, Menu   } from 'antd'
const Header = () => (
  <div className={`${headerCss.header}`}>
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={9}>
            <span className={`${headerCss.header_logo}`}>博客园</span>
            <span className={`${headerCss.header_txt}`}>博客园好文章</span>
        </Col>
        <Col className={`${headerCss.memu_div}`} xs={0} sm={0} md={10} lg={8} xl={4}>
            <Menu  mode="horizontal" className={`${headerCss.ant_meu}`}>
                <Menu.Item key="home" className={`${headerCss.ant_menu_item}`}>
                    <HomeOutlined />
                    博客首页
                </Menu.Item>
                <Menu.Item key="video" className={`${headerCss.ant_menu_item}`}>
                    <PlaySquareOutlined />
                    视频教程
                </Menu.Item>
                <Menu.Item key="message" className={`${headerCss.ant_menu_item}`}>
                    <CommentOutlined />
                    逼逼叨叨
                </Menu.Item>
                <Menu.Item key="skill" className={`${headerCss.ant_menu_item}`}>
                    <FormOutlined />
                    软技能
                </Menu.Item>
                <Menu.Item key="life" className={`${headerCss.ant_menu_item}`}>
                    <SmileOutlined />
                    快乐生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header