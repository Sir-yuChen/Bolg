import React,{useEffect,useState} from 'react'
import '../../style/articleManage.css'
import {getTypeInfo,getArticleInfo,deleteArticle,updateTitleByUuid} from '../../service/dataPage'


import { Input,Select ,DatePicker, Space,Button,Table, Tag,Popconfirm,Typography ,Form} from 'antd'
import moment from 'moment'


const { RangePicker } = DatePicker
const { Option } = Select

const ArticleManage = () => {
    
    const [form] = Form.useForm();
    const [typelist, setTypelist] = useState([])
    const [selected, setSelected] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setendTime] = useState('')
    const [resultData, setResultData] = useState([])
    const [editingKey, setEditingKey] = useState('');

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
                let result = res.data.data
                setResultData(result)
            }
        )
    }

    const dateFormat = 'YYYY/MM/DD';

    function handleChange(value) {
        setSelected(value)
    }

    function handleChangeInput(e) {
        setInputValue(e.target.value)
      }
    
    function handleChangeTime(data,dataString) {
        if (dataString != undefined) {
            setStartTime(dataString[0])
            setendTime(dataString[1])
        }
    }
    
    const isEditing = (record) => {
      return (
        record.article_uuid === editingKey
      )
    };

    const edit = (record) => {
      form.setFieldsValue({
        article_title:'',
        ...record,
      });
      setEditingKey(record.article_uuid);
    };

    const cancel = () => {
      setEditingKey('');
    };
    const save = async (article_uuid) => {
        try {
          const row = await form.validateFields();
          const newData = [...resultData];
          newData.map(
            item =>{
              if (item.article_uuid == article_uuid) {
                  item.article_title = row.article_title
              }
            }
          )
          let tempobj ={
            article_title:row.article_title,
            article_uuid:article_uuid
          }
          updateTitleByUuid(tempobj).then(
            res =>{
              console.log(`发布`, res.data.data)
            }
          )
          setResultData(newData)
          setEditingKey('');
        } catch (errInfo) {
          console.log('Validate Failed 错误:', errInfo);
        }

    };
  

    const EditableCell = ({
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    }) => {
      return (
        <td {...restProps}>
          {editing ? (
            <Form.Item
              name={dataIndex}
              rules={[
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ]}
            >
              <Input   />
            </Form.Item>
          ) : (
            children
          )}
        </td>
      );
    };

    const columns = [
        {
          title: '唯一ID',
          dataIndex: 'article_uuid',
          key: 'article_uuid',
        },
        {
          title: '名称',
          dataIndex: 'article_title',
          key: 'article_title',
          editable: true,
          width: '25%',
        },
        {
          title: '时间',
          dataIndex: 'lastUpdateTime',
          key: 'lastUpdateTime',
        },
        {
          title: '类型',
          dataIndex: 'type_name',
          key: 'type_name',
        },
        {
          title: '状态',
          dataIndex: 'article_status',
          key: 'article_status',
        },
        {
          title: '点击量',
          dataIndex: 'view_count',
          key: 'view_count',
        },
        {
          title: '视频集',
          dataIndex: 'video_number',
          key: 'video_number',
        },
        {
          title: '作者',
          dataIndex: 'user_name',
          key: 'user_name',
        },
          
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
              <span>
                <a
                  href="javascript:;"
                  onClick={() => save(record.article_uuid)}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                </a>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <span>
                <Popconfirm title="Sure to delete?" onConfirm={() =>{
                  return (
                    deleteArticle(record.article_uuid),
                    searchArticle
                  )
                }}>
                  <a>删除</a>
                </Popconfirm>
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                  <a>编辑</a>
                </Typography.Link>
              </span>
              
            );
          }
        },
      ];

      const mergedColumns = columns.map((col) => {
        if (!col.editable) {
          return col;
        }
    
        return {
          ...col,
          onCell: (record) => ({
            record,
            inputType: col.dataIndex,
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }),
        };
      });
      return (
        <div>
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
            {/* <div className='content_list'>
                <Table 
                    columns={columns} 
                    dataSource={resultData} 
                    
                />
            </div> */}
          </div>
          <div className='content_list'>
            <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={resultData}
              columns={mergedColumns}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }}
            />
          </Form>
          </div>
        </div>
      )
}

export default ArticleManage
