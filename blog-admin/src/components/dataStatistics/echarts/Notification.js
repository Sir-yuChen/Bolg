import React,{useState,useEffect} from 'react'
import '../../../style/notification.css'
import {getNoticeInfo} from '../../../service/dataPage'

import { Timeline, Radio ,Divider} from 'antd'

const Notification = () => {

    const [mode, setMode] = useState('alternate');
    const [notificationlist, setNotificationlist] = useState([])

    const onChange = e => {
        setMode(e.target.value);
    };
    let  user_uuid = '56sd54e56s254ds52'
    useEffect(() => {
        getNoticeInfo(user_uuid).then(
            res =>{
                setNotificationlist(res.data.data)
            }
        )
    }, [])


    return (
        <div>
            <Divider>消息通知</Divider>
            <Radio.Group
                onChange={onChange}
                value={mode}
                style={{
                marginBottom: 20,
                }}
            >
                <Radio value="left">Left</Radio>
                <Radio value="right">Right</Radio>
                <Radio value="alternate">Alternate</Radio>
            </Radio.Group>
            <Timeline mode={mode} className='time_line'>
                {
                    notificationlist.map(
                        item =>{
                            return (
                                <Timeline.Item label={item.create_dateTime} style={{color:item.notice_type==='error' ? 'red':''}}>{item.notice_title}</Timeline.Item>
                            )
                        }
                    )
                }
            </Timeline>
        </div>
    )
}

export default Notification
