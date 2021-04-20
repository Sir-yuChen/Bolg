import React from 'react'
import AuthorCss from '../styles/components/author.module.css'


import {Avatar,Divider} from 'antd'
import { AntDesignOutlined,GithubOutlined,WechatOutlined,QqOutlined,DingdingOutlined } from '@ant-design/icons';

function Author() {

    return (
        <div  className={`${AuthorCss.author_div}`} >
            <div >
                <div  className={`${AuthorCss.author_avatar}`} >
                    <Avatar
                        size={120}
                        icon={<AntDesignOutlined />}
                    // src="http://blogimages.jspang.com/blogtouxiang1.jpg"
                        alt="头像加载失败"
                    />
                </div>
                <div className={`${AuthorCss.author_name}`}>
                    <span >博客园</span>
                </div>
            </div>
            <div className={`${AuthorCss.author_introduce}`}>
                <span>
                因为美好的东西都是免费的，比如水、阳光和空气，所以本站视频全部免费。
                </span>
            </div>
            <Divider>社交账号</Divider>
            <div className={`${AuthorCss.author_communicate_div}`}>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<GithubOutlined />}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<WechatOutlined />}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<QqOutlined />}/>
                </span>
                <span className={`${AuthorCss.author_communicate}`}>
                    <Avatar size={35} icon={<DingdingOutlined />}/>
                </span>
            </div>
        </div>
    )
}

export default Author
