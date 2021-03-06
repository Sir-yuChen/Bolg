import React,{useState,useEffect} from 'react'
import {getArticleType} from '../../service/dataPage'

import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'



const ArticleType = () => {

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [resultData, setResultData] = useState([])
    
    useEffect(() => {
        getArticleType().then(
            res =>{
                let templist = res.data.data
                setResultData(templist)
                // console.log(`类型数据`,resultData)
            }
        )
    }, [])

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

      const columns = [
        {
          title: 'type_name',
          dataIndex: 'type_name',
          key: 'type_name',
          width: '10%',
          ...getColumnSearchProps('type_name'),
        },
        {
          title: 'type_uuid',
          dataIndex: 'type_uuid',
          key: 'type_uuid',
          width: '15%',
          ...getColumnSearchProps('type_uuid'),
        },
        {
          title: 'keyName',
          dataIndex: 'keyName',
          key: 'keyName',
          width: '10%',
          ...getColumnSearchProps('keyName'),
        },
        {
          title: 'type_path',
          dataIndex: 'type_path',
          key: 'type_path',
          width: '15%',
          ...getColumnSearchProps('type_path'),
        },
        {
          title: 'type_site',
          dataIndex: 'type_site',
          key: 'type_site',
          width: '15%',
        },
        {
          title: 'type_creatTime',
          dataIndex: 'type_creatTime',
          key: 'type_creatTime',
        },
      ];


    return (
        <div>
            <Table columns={columns} dataSource={resultData} />
        </div>
    )
}

export default ArticleType
