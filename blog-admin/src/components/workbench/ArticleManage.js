import React,{useEffect,useState} from 'react'
import '../../style/articleManage.css'
import {getTypeInfo,getArticleInfo} from '../../service/dataPage'


import { Input,Select ,DatePicker, Space,Button, List,notification} from 'antd'
import moment from 'moment'


const { RangePicker } = DatePicker
const { Option } = Select

const ArticleManage = () => {
    
    const [typelist, setTypelist] = useState([])
    const [selected, setSelected] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setendTime] = useState('')
    const [result, setResult] = useState([])

    useEffect(() => {
        getTypeInfo().then(
            res =>{
                setTypelist(res.data.data)
            }
        )
        searchArticle()
    }, [])

    const searchArticle =()=>{
        
        let temparr = {
            type_uuid :selected,
            article_title: inputValue,
            startTime:startTime,
            endTime:endTime
        }
        getArticleInfo(temparr).then(
            res =>{
                console.log(`搜索结果`,res.data.data )
                setResult(res.data.data)
            }
        )
      
    }

    const dateFormat = 'YYYY/MM/DD';

    function handleChange(value) {
        setSelected(value)
      
      }

    function handleChangeInput(e) {
        setInputValue(e.target.value)
        // console.log('=====>',inputValue);
      }
    
    function handleChangeTime( data,dataString) {
        if (dataString != undefined) {
            setStartTime(dataString[0])
            setendTime(dataString[1])
        }
    }
    

    return (
        <div className='search_alldiv'>
            <div className='search_div'>
                <Input placeholder="文章标题" className='search_input' onChange={handleChangeInput}  onBlur={handleChangeInput}/>
                <Select defaultValue="请选择类型" className='search_select'  onChange={handleChange}  allowClear={true}>
                    {
                        typelist.map(
                            item =>{
                                return (
                                    <Option value={item.type_uuid}>{item.type_name}</Option>
                                )
                            }
                        )
                    }
                </Select>

                <Space direction="vertical" size={12}  >
                    <RangePicker
                        className='search_rangePicker'
                        defaultValue={[moment(new Date().toLocaleString(), dateFormat), moment(new Date().toLocaleString(), dateFormat)]}
                        format={dateFormat}
                        onChange={handleChangeTime}  
                        onBlur={handleChangeTime}
                    />
                </Space>
                <Button className='search_button'  onClick={searchArticle}>搜索</Button>
            </div>
            <div className='content_list'>
                <List
                    dataSource ={result}
                    renderItem ={item =>{
                        return(
                            <List.Item>{item.article_title}</List.Item>
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default ArticleManage
