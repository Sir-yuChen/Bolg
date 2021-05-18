import React,{useEffect,useState} from 'react'
import '../../../style/echartsByType.css'
import {getNumbByType} from '../../../service/dataPage'


import ReactEcharts from 'echarts-for-react'  // yarn  add  echarts-for-react echarts --save
import { Divider } from 'antd'


const EchartsByType = () => {

    const [datalist, setDatalist] = useState([])

    useEffect(() => {
        getNumbByType().then(
            res =>{
               let result =res.data.data
               let templist = []
               result.map(
                    item =>{
                        templist.push({value:item.number,name:item.type_name})
                    }
               )
               setDatalist(templist)
               console.log(`====================>>>`,templist )
            }
        )
    }, [])

   const  option = {
            title: {
                text: '文章类型分类统计数据',
                subtext: 'Blog',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '数据详情',
                    type: 'pie',
                    radius: '50%',
                    data:datalist,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }


    return (
        <div className="echartsByType">
            <ReactEcharts
                notMerge={true}
                lazyUpdate={false}
                option = {option}
                />
            <Divider/>
            <ReactEcharts
                notMerge={true}
                lazyUpdate={false}
                option = {option}
                />
        </div>
    )
}

export default EchartsByType
