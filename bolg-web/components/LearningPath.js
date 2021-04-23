import React,{useState,useEffect} from 'react'
import LearningPathCss from '../styles/components/learningPath.module.css'
import  servicePath from "../config/apiUrl";

import {List,Divider} from 'antd'
import {BookOutlined,RightOutlined } from '@ant-design/icons';
import axios from 'axios'

const LearningPath = () => {
    
    const [learningPath,setLearningPath] = useState([])

    useEffect(
       async () => {
            axios(servicePath.getLearningPath).then(
                (res)=>{
                    console.log("学习路线远程数据：",res.data.data)
                    setLearningPath(res.data.data)
                }
            )
       }
    ,[])

    return (
        <div className={`${LearningPathCss.learningPath}`} >
            <div>
                <Divider>学习路线</Divider>
            </div>
            <List
                dataSource = {learningPath}
                renderItem = {item=>(
                    <List.Item>
                        <a href ={item.article_path} className={`${LearningPathCss.learningPath_a}`}>
                            <span className={`${LearningPathCss.learningPath_list_title}`}>
                                <BookOutlined />
                                {item.path_name}
                            </span>
                            <span  className={`${LearningPathCss.learningPath_list_type}`}>
                                {item.subtitle} <RightOutlined  className={`${LearningPathCss.rightOutlined}`} />
                            </span>
                        </a>
                    </List.Item>
                )} 
            />
        </div>
    )
}

export default LearningPath
