import React,{useEffect,useState} from 'react'
import '../../../style/echartsArticle.css'
import {geTlineChart,geTlineChart_type} from '../../../service/dataPage'

import ReactEcharts from 'echarts-for-react'  // yarn  add  echarts-for-react echarts --save


const EchartsArticle = () => {

    const [allArticle, setAllArticle] = useState([])
    const [allViewCount, setAllViewCount] = useState([])
    const [allVideos, setAllVideos] = useState([])
    const [typeslist,setTypeslist] = useState([])
    const [uxAxis,setUxAxis] = useState([])
    

    useEffect(() => {
        geTlineChart(new Date().getFullYear()).then(
            res=>{
                let result = res.data.data
                console.log(`res ===>`,result )
                for (let i = 1; i <= new Date().getMonth()+1; i++) {
                    uxAxis.push(i)
                }     
                result.map(
                    (item,index) =>{
                        for(var ux of uxAxis){	
                            if (ux == item.months ) {
                                allArticle.push(item.allArticle)
                                allViewCount.push(item.allViewCount)
                                allVideos.push(item.allVideos)
                            }
                        }
                    }
                )
            }
        )
        geTlineChart_type(new Date().getFullYear()).then(
            res =>{
                uxAxis.map(
                    ux =>{
                        typeslist.push(res.data.data.length) 
                        // console.log(`======`,allArticle,allViewCount, allVideos,typeslist)
                    }
                )
            }
        )
    }, [])


  const  option = {
        title: {
            text: new Date().getFullYear()+'文章数据统计'
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
            data: uxAxis
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '文章数量',
                type: 'line',
                stack: '总量',
                data: allArticle
            },
            {
                name: '阅读量',
                type: 'line',
                stack: '总量',
                data: allViewCount
            },
            {
                name: '视频集数',
                type: 'line',
                stack: '总量',
                data: allVideos
            },
            {
                name: '评论量',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '文章类型',
                type: 'line',
                stack: '总量',
                data: typeslist
            },

           
        ]
    }
    

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
