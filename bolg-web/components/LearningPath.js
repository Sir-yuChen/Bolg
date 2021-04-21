import React,{useState} from 'react'
import LearningPathCss from '../styles/components/learningPath.module.css'

import {List,Divider} from 'antd'
import {BookOutlined,RightOutlined } from '@ant-design/icons';

const LearningPath = () => {
    
    const [learningPath,setLearningPath] = useState([
        {title:"Vue3.x学习路线",type:"基础到实战"},
        {title:"React学习路线",type:"基础到实战"},
        {title:"Vue2.x学习路线",type:"基础到实战"},
        {title:"Flutter学习路线",type:"基础到实战"}
    ])

    return (
        <div className={`${LearningPathCss.learningPath}`} >
            <div>
                <Divider>学习路线</Divider>
            </div>
            <List
                dataSource = {learningPath}
                renderItem = {item=>(
                    <List.Item>
                        <a href ='' className={`${LearningPathCss.learningPath_a}`}>
                            <span className={`${LearningPathCss.learningPath_list_title}`}>
                                <BookOutlined />
                                {item.title}
                            </span>
                            <span  className={`${LearningPathCss.learningPath_list_type}`}>
                                {item.type} <RightOutlined  className={`${LearningPathCss.rightOutlined}`} />
                            </span>
                        </a>
                    </List.Item>
                )} 
            />
        </div>
    )
}

export default LearningPath
