import React,{useEffect,useReducer,createContext,useState} from 'react'
import '../style/addArticle.css'
import { defaultState, reducer } from '../reducer/reducer' 
import actionTypes from '../reducer/actionType'
import servicePath from '../config/apiUrl'


import {Input,Button,Select,Row,Col,DatePicker} from 'antd'
import marked from 'marked'
import axios from 'axios'
import moment from 'moment'


const { Option } = Select;
const { TextArea } = Input;

export const Ctx=createContext()//可以抽离出去


function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  
  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(0,moment().get('hours')),
      disabledMinutes: () => range(0, moment().minutes()+1),
      disabledSeconds: () => [],
    };
  }

const AddArticle = () => {

    const [state, dispatch] = useReducer(reducer, defaultState)
    const [typeList,setTypeList] = useState([])
    const [releaseModes,setReleaseModes] = useState('now')

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
      }); 

    const changContent= (e) =>{
        let html =marked(e.target.value)
        dispatch({
            ...state,
            type: actionTypes.CHANGCONTENT,
            article_content:e.target.value,
            article_content_show:html
        })
    }
    const changIntroduce= (e) =>{
        let html =marked(e.target.value)
        dispatch({
            ...state,
            type:actionTypes.CHANGINTRODUCE,
            introduce:e.target.value,
            introduce_show:html
        })
    }
    useEffect(
        ()=>{
            axios(servicePath.getArticleTypeList)
                .then(res =>{
                    setTypeList(res.data.data)
                }) 
        }
    ,[])

    function onChange( data,dateString) {
        dispatch({
            ...state,
            type:actionTypes.UPDATE_RELEASETIME,
            releaseTime:dateString
        })
    }
    const releaseMode = (value)=>{
        setReleaseModes(value)
        dispatch({
            ...state,
            type:actionTypes.UPDATE_RELEASEMODE,
            article_status: value === 'now' ? 3:5
        })
    }
    const temporaryArticle = () =>{
        dispatch({
            ...state,
            type:actionTypes.UPDATE_RELEASEMODE,
            article_status: 3
        })
        dispatch({
            ...state,
            type:actionTypes.ADDARTICLE,
           })
    }

    return (
        <div className='addArticle_div'>
            <Ctx.Provider value={{state,dispatch}}>
            <Row gutter = {5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={21}>
                            <Input 
                                value={state.article_title}
                                onChange={e => dispatch({ ...state,type:actionTypes.CHANG_TITLE, article_title:e.target.value })}
                                onBlur={e => dispatch({ ...state,type:actionTypes.CHANG_TITLE, article_title:e.target.value })}
                                className='addArticle_titleInput'
                                 size='large'
                                placeholder='文章标题'
                            />
                        </Col>
                        <Col span={3}>
                            <Select 
                                defaultValue="选文章类型  " 
                                size='large'
                                onChange={
                                    value=>dispatch({ ...state,type:actionTypes.UPDATE_SELECTTYPE, selectType:value })
                                } >
                               {
                                   typeList.map(
                                       typeItem => {
                                           return (
                                               <Option 
                                                    key={typeItem.keyName} 
                                                    value={typeItem.type_uuid}
                                                >
                                                    {typeItem.type_name}
                                               </Option>
                                           )
                                       }
                                   )
                               }
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                                value={state.article_content}
                                className='addArticle_markContent'
                                placeholder='Markdown 文章内容编写'
                                rows={35}  
                                onChange={changContent}
                                onPressEnter={changContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="addArticle_markContent_show"
                                dangerouslySetInnerHTML={{__html:state.article_content_show}}
                            ></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={10}>
                      <Col span={24}>
                        <div className='addArticle_articleButton_div'>
                                <Button 
                                    size='large'
                                    className='addArticle_articleButton'
                                    onClick={temporaryArticle}
                                >暂存文章</Button>
                                <Button 
                                    size='large'
                                    className='addArticle_articleButton'
                                    type='primary'
                                >发布文章</Button>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={10}>
                        <TextArea 
                            value={state.introduce}
                            placeholder='Markdown 文章简介编写'
                            className='addArticle_MarkIntroduce'
                            rows={10}
                            onChange={changIntroduce}
                            onPressEnter={changIntroduce}
                        />
                    </Row>
                    <Row gutter={10}>
                      <div className='addArticle_MarkIntroduce_show'
                        dangerouslySetInnerHTML={{__html:state.introduce_show}}
                      ></div>
                    </Row>
                    <Row gutter={10}>
                        <div className='addArticle_showTime_div'>
                            <span className='addArticle_showTime_select'>
                                <Select defaultValue="now" onChange={releaseMode}>
                                    <Option value='now'>现在发布</Option>
                                    <Option value='job'>定时发布</Option>
                                </Select>
                            </span>
                            <span className='addArticle_showTime_datePicker'>
                                <DatePicker 
                                    placeholder='发布日期'
                                    renderExtraFooter={() => '发布日期'} 
                                    showTime   
                                    format="YYYY-MM-DD HH:mm:ss"
                                    disabledDate={disabledDate}
                                    disabledTime={disabledDateTime}
                                    // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                    onChange={onChange}
                                    defaultValue={moment(new Date, 'YYYY-MM-DD HH:mm:ss')} 
                                    disabled = {releaseModes === 'now' ? true:false}
                                />
                            </span>
                        </div>
                    </Row>
                </Col>
            </Row>
            </Ctx.Provider>
        </div>
    )
}

export default AddArticle
