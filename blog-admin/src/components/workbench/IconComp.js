import React,{useState,useEffect} from 'react'
import {getIconInfo} from '../../service/dataPage'

import { Table } from 'antd';

const IconComp = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getIconInfo().then(
            res =>{
                console.log(`====>`,res.data.data )
                setData(res.data.data) 
            }
        )
    }, [])

    const columns = [
        {
          title: '唯一id',
          dataIndex: 'icon_uuid',
          width: '15%',
        },
        {
          title: 'Type值',
          dataIndex: 'type',
          width: '20%',
        },
        {
          title: '位置',
          dataIndex: 'site',
        },
        {
          title: 'icon_name',
          dataIndex: 'icon_name',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
        },
      ];
      

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} /> 
        </div>
    )
}

export default IconComp
