import React from 'react'
import '../style/addArticle.css'

import {Input,Button,Select,Row,Col,DatePicker} from 'antd'

const { Option } = Select;
const { TextArea } = Input;

const AddArticle = () => {
    return (
        <div className='addArticle_div'>
            <Row gutter = {5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={21}>
                            <Input 
                                className='addArticle_titleInput'
                                size='large'
                                placeholder='文章标题'
                            />
                        </Col>
                        <Col span={3}>
                            <Select defaultValue="viode" size='large' >
                                <Option value='viode'>视频教程</Option>
                                <Option value='skill'>软技能</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                                className='addArticle_markContent'
                                placeholder='Markdown 文章内容编写'
                                rows={35}  
                            />
                        </Col>
                        <Col span={12}>
                            <div className="addArticle_markContent_show">
                                实时显示解析markdown文章内容
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={10}>
                       <div className='addArticle_articleButton_div'>
                            <Button 
                                size='large'
                                className='addArticle_articleButton'
                            >暂存文章</Button>
                            <Button 
                                size='large'
                                className='addArticle_articleButton'
                                type='primary'
                            >发布文章</Button>
                       </div>
                    </Row>
                    <Row gutter={10}>
                        <TextArea 
                            placeholder='Markdown 文章简介编写'
                            className='addArticle_MarkIntroduce'
                            rows={10}
                        />
                    </Row>
                    <Row gutter={10}>
                      <div className='addArticle_MarkIntroduce_show'>
                        实时显示解析markdown文章简介
                      </div>
                    </Row>
                    <Row gutter={10}>
                        <div className='addArticle_showTime_div'>
                            <span className='addArticle_showTime_select'>
                                <Select defaultValue="now">
                                    <Option value='now'>现在发布</Option>
                                    <Option value='job'>定时发布</Option>
                                </Select>
                            </span>
                            <span className='addArticle_showTime_datePicker'>
                                <DatePicker renderExtraFooter={() => '发布日期'} showTime  />
                            </span>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle
