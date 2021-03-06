import React from 'react';
import ReactDom from 'react-dom';
import {NoData} from '../src/index'

const columns = [
    {title: 'id', dataIndex: 'id'},
    {title: 'name', dataIndex: 'name'}
]
const dataSource = [
    {id: '1', name: '111'}
]

const Demo = () => {
    return <div>
        <h1>组件预览：</h1>
        <NoData/>
    </div>
}

ReactDom.render(<Demo/>, document.getElementById('root'));