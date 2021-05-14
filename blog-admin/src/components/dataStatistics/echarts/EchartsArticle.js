import React from 'react'
import '../../../style/echartsArticle.css'

import ReactEcharts from 'echarts-for-react'  // yarn  add  echarts-for-react echarts --save


const EchartsArticle = () => {
  const  option = {
        title: {
            text: '2021文章数据统计'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['文章数量', '阅读量', '视频集数', '评论量','文章类型']
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
       
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '文章数量',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '阅读量',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频集数',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '评论量',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '文章类型',
                type: 'line',
                stack: '总量',
                data: [10, 20, 15, 10, 4, 8, 15]
            }
        ]
    };
    




    return (
        <div>
            <ReactEcharts
                className='reactEcharts'
                notMerge={true}
                lazyUpdate={false}
                option = {option}
                 />
        </div>
    )
}

export default EchartsArticle
