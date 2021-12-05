import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version, Table } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import getData from "./hongshan"


import { List, Avatar } from 'antd';

function getHref(text) {
  return 'http://www.baidu.com/s?wd={text}'
}

const columns = [

  {
    title: 'Name',
    dataIndex: 'name',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.name.length - b.name.length,
    render: text => <a href={`https://www.baidu.com/s?wd=${encodeURI(text)}`} target='_blank'>  {text} </a>,
  },

  {
    title: '标签',
    dataIndex: 'tags',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.tags.length - b.tags.length,
  },



  {
    title: '简介',
    dataIndex: 'summary',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.summary.length - b.summary.length,
  },



];

const data2 = getData()

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

ReactDOM.render(<Table columns={columns} dataSource={data2} onChange={onChange} />, document.getElementById("root"));