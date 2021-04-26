import React,{useEffect,useState} from 'react'
import headerCss from  '../styles/components/header.module.css'
import servicePath from '../config/apiUrl'
import {ICON_URL_JS} from  '../config/iconUrl'

import {createFromIconfontCN } from '@ant-design/icons';
import {Row,Col, Menu } from 'antd'
import axios from 'axios'
import Link from 'next/link';

const Header = () => {

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL_JS,
      });

    const [headerType,setHeaderType] = useState([])

    useEffect(
        async ()=>{
            axios(servicePath.getHeaderIndfo).then(
                (res)=>{
                    console.log("开始查询标题栏数据",res.data.data)
                    setHeaderType(res.data.data)
                }
            )
        }
    ,[])

    return (
        <div className={`${headerCss.header}`}>
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={15} xl={9}>
                    <Link href="/">
                        <a>
                            <span className={`${headerCss.header_logo}`}>博客园</span>
                            <span className={`${headerCss.header_txt}`}>博客园好文章</span>
                        </a>
                    </Link>
                </Col>
                <Col className={`${headerCss.memu_div}`} xs={0} sm={0} md={10} lg={8} xl={4}>
                    <Menu  mode="horizontal" className={`${headerCss.ant_meu}`}>
                        {
                            headerType.map(
                                item => (
                                    <Menu.Item key={item.keyName} className={`${headerCss.ant_menu_item}`}>
                                        <IconFont type={item.type}/>
                                        <Link href ={item.type_path}>
                                           {item.type_name}
                                        </Link>
                                    </Menu.Item>
                                )
                            )
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header