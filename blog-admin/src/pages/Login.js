import React,{useState} from 'react'
import '../style/login.css'
import {ICON_URL} from '../config/IconUrl'

import {Card,Input,Button,Spin}  from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'


const Login = () => {

    const [isLoading ,setIsLoading] = useState(false)
    const [userName,setUserName] = useState('')
    const [userPassWord,setUserPassWord] = useState("")


    const IconFont = createFromIconfontCN({
        scriptUrl: ICON_URL,
      });


    const userLogin  =() =>{
        setIsLoading(true)
        setTimeout(
            ()=>(setIsLoading(false)),3000
        )
    }

    return (
        <div className='login_div'>
           <Spin tip='Loging...' spinning={isLoading}>
                <Card title='博客园后台登录' bordered={true} >
                    <span className='login_span_input'>
                        <Input 
                            id="userName"
                            size='large'
                            placeholder="请输入用户名"
                            prefix = {<IconFont type='icon-xingmingyonghumingnicheng'/>}
                            onChange ={(e)=>setUserName(e.target.value)}
                        />
                    </span>
                   
                    <span className='login_span_input'>
                        <Input.Password
                            id="userPassWord"
                            size='large'
                            placeholder="请输入密码"
                            prefix = {<IconFont type='icon-icon-mima'/>}
                            onChange ={(e)=>setUserPassWord(e.target.value)}
                        />
                    </span>
                    
                    <div className='loginButton_div'>
                        <Button 
                            type='primary' 
                            size='large'
                            onClick = {userLogin}
                        >Login in </Button>
                    </div>
                </Card>
           </Spin>
        </div>
    )
}

export default Login
