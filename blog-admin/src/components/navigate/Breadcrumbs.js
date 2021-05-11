import React from 'react'
import '../../style/breadcrumbs.css'

import {Breadcrumb } from 'antd'

const Breadcrumbs = () => {
    return (
        <div className='breadcrumb'>
            <Breadcrumb className='breadcrumb_div'>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
