import React,{useState,useEffect} from 'react'
import LearningPathCss from '../styles/components/learningPath.module.css'
import  servicePath from "../config/apiUrl";

import {List,Divider} from 'antd'
import {ICON_URL_JS} from  '../config/iconUrl'
import {createFromIconfontCN} from '@ant-design/icons';
import axios from 'axios'

const LearningPath = () => {
    
    const [learningPath,setLearningPath] = useState([])
    const [iconList ,setIconList] = useState({})

    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL_JS,
      });

    useEffect(
       async () => {
            axios(servicePath.getLearningPath).then(
                (res)=>{
                    console.log("学习路线远程数据：",res.data.data)
                    setLearningPath(res.data.data)
                }
            )
            axios.get( servicePath.getIconObj,{params:{site:"learningPath"}}).then(
                (res) => {
                    setIconList(JSON.parse( res.data.data[0].iconKV))
                    // console.log("--data->",res.data.data[0].iconKV)
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
                                <IconFont type={iconList.explain}/>
                                {item.path_name}
                            </span>
                            <span  className={`${LearningPathCss.learningPath_list_type}`}>
                                {item.subtitle} <IconFont type={iconList.rightArrow} className={`${LearningPathCss.rightOutlined}`} />
                            </span>
                        </a>
                    </List.Item>
                )} 
            />
        </div>
    )
}

export default LearningPath
