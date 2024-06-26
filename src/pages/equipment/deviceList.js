import { Space, Table, Tag } from 'antd';
import { withRouter } from 'umi';
import React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, } from 'antd';

const DeviceList = () =>{
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm(); 
  const onClose = () => {
    setOpen(false);
    
  };
  const onSubmit = async (values) => {
    try {
       axios.post('http://localhost:8001/postTrain');

      const response = await axios.get('/api/internet/connect', {
        params: {
          ...values,
          host: storedRecord.address,
        },
      });

      if (response.status === 200) {
        setOpen(false);
        setTimeout(() => {
          alert('上传成功');
        }, 1000);
      } else {
        alert('上传失败');
      }
    } catch (error) {
      console.error('上传失败:', error);
      alert('上传失败');
    }
  };
  const showDrawer = async (record) => {
    sessionStorage.setItem('record', JSON.stringify(record));
    setOpen(true);

  };
  const deleteInternet = async (record) => {
    try {
      // 向后端发送请求以更改设备状态
      const response = await axios.post('api/device/deleteDeviceState', {
        id: record.id,
      });
      const updatedData = data.filter((item) => item.id !== record.id); // 根据删除的设备ID过滤数据
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  }
  const storedRecord = JSON.parse(sessionStorage.getItem('record'));

  const handleConnect = async (record) => {
    try {
      // 向后端发送请求以更改设备状态
      const response = axios.post('http://localhost:8001/postModel');
      const response2 = await axios.get('/api/internet/connect',{
        params:{
          host:record.address
        }
      });
      if(response2.data.data.message!==11001){
        const response3 = await axios.post('api/internet/changestate', {
          id: record.id,
          type:true
        });
        if (response3.status === 200) {
          const updatedData = data.map(item => {
            if (item.id === record.id&&(item.tags[0]==='离线'||item.tags[0]==='未启用')) {
              return {
                ...item,
                tags: ['在线'] // 更新设备状态S
              };
            }
            return item;
          });
          setData(updatedData);
          alert('连接成功！');
        }

      }else{
        alert('连接失败！');
      }
   
    } catch (error) {
      console.error(error);
      
    }

};
const { Option } = Select;
const handleDisConnect = async (record) => {
  const response4 = await axios.post('api/internet/changestate', {
    id: record.id,
    type:false
  });
  if (response4.status === 200) {
    const updatedData = data.map(item => {
      if (item.id === record.id&&item.tags[0]==='在线') {
        return {
          ...item,
          tags: ['离线'] // 更新设备状态S
        };
      }
      return item;
    });
    setData(updatedData);
  }
}
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '网关名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数据来源',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '服务器地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '服务器端口',
      dataIndex: 'port',
      key: 'port',
    },
    {
      title: '最近连接时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '网关状态',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
let color;
if (tag === '未启用') {
  color = 'geekblue';
} else if (tag === '离线') {
  color = 'red';
} else {
  color = 'green';
}
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => {
  if (record.tags[0] === '离线'||record.tags[0] === '未启用') {
    handleConnect(record);
  }
}}>连接</a>
          <a onClick={() => {
  if (record.tags[0] === '在线') {
    handleDisConnect(record);
  }
}}>断连</a>
          <a  onClick={()=>{if(record.tags[0] === '在线'){showDrawer(record)}else{alert('请先连接')}}} >模型下发</a>
            <a onClick={()=>{deleteInternet(record)}} > 删除</a>
  
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/internet'); // 根据你的后端 API 路由进行相应的修改
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>
    <Table  style={{minWidth:'300px',minHeight:'300px'}} columns={columns} dataSource={data} />
    <Drawer
        title="模型下发"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={() => form.submit()} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" onFinish={onSubmit} form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="模型"
                rules={[
                  {
                    required: true,
                    message: 'Please select a model',
                  },
                ]}
              >
                <Select placeholder="Please select a model">
                  <Option value="knn">knn</Option>
                  <Option value="mlp">mlp</Option>
                  <Option value="rn">rn</Option>
                  <Option value="lr">lr</Option>
                  <Option value="dtr">dtr</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="分布式策略"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="MCTS">MCTS</Option>
                  <Option value="MOEA">MOEA</Option>
                  <Option value="NSGAII">NSGAII</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="建模目标"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="performance">性能有限</Option>
                  <Option value="speed">速度有限</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>

    </div>
  ;
} 

export default  withRouter(DeviceList);