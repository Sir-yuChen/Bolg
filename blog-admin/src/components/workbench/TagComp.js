import React,{useState,useEffect} from 'react'
import {getTagInfo,updateTagColor} from '../../service/dataPage'

import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'


const TagComp = () => {
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [resultData, setResultData] = useState([])
    
    useEffect(() => {
      getTaglist()
    }, [])
    const getTaglist =()=>{
      getTagInfo().then(
        res =>{
            let templist = res.data.data
            setResultData(templist)
            // console.log(`标签数据`,res.data.data)
        }
    )
    }

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                    // searchInput = node
                    setSearchInput(node)
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button 
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  setSearchText(selectedKeys[0])
                  setSearchedColumn(dataIndex)
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => console.log(`searchInput==>`,visible ), 100);
          }
        },
        render: text =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });

     const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
      };

    const  handleReset = clearFilters => {
        clearFilters();
        setSearchText('')
      };
    const updateColor =(color,tag_uuid)=>{
      let temp ={
        color:color,
        tag_uuid:tag_uuid
      }
      updateTagColor(temp)
      // console.log(`color` ,color,tag_uuid,temp)
    } 

      const columns = [
        {
          title: '唯一id',
          dataIndex: 'tag_uuid',
          key: 'tag_uuid',
          width: '15%',
          ...getColumnSearchProps('tag_uuid'),
        },
        {
          title: '标签内容',
          dataIndex: 'tag_content',
          key: 'tag_content',
          width: '10%',
          ...getColumnSearchProps('tag_content'),
        },
        {
          title: '标签颜色',
          dataIndex: 'tag_color',
          key: 'tag_color',
          width: '10%',
          render: (color,record)=>{
            return  (
                <Input type='color' defaultValue={color} onBlur={(e)=>{
                  // console.log(`value ===`, e.target)
                  updateColor(e.target.value,record.tag_uuid)
                }} bordered={false}/>
            )
          }
        },
        {
          title: '所属位置',
          dataIndex: 'tag_site',
          key: 'tag_site',
          width: '10%',
          ...getColumnSearchProps('tag_site'),
        },
        {
          title: '所属文章',
          dataIndex: 'tag_uuid',
          key: 'tag_uuid',
          width: '15%',
          ...getColumnSearchProps('tag_uuid'),
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
        },
      ];


    return (
        <div>
            <Table columns={columns} dataSource={resultData}  pagination={{ pageSize: 50 }} scroll={{ y: 600 }}/>
        </div>
    )
}

export default TagComp
