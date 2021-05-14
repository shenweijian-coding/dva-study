import React from 'react';
import styles from './Users.css';
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Table, Pagination,Popconfirm } from 'antd'
import queryString from 'query-string'
import UserEditModel from './UserModel'
function Users({ dispatch,list,loading,total }) {
  function editHandler(id,values){
    dispatch({
      type: 'users/patch',
      payload: { id,values }
    })
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <UserEditModel record={record} onOk={editHandler.bind(null,record.id)}>
            <a>编辑</a>
          </UserEditModel>
          <Popconfirm title="确定删除" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  function pageChangeHandler(page){
    dispatch(routerRedux.push({
      pathname: '/users',
      search: queryString.stringify({page})
    }))
  }
  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload:id
    })
  }
  return (
    <div className={styles.normal}>
      <div>
        <Table
        loading={loading}
          columns={columns}
          dataSource={list}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          onChange={pageChangeHandler}
          defaultCurrent={1}
          pageSize={3}
        />
      </div>
    </div>
  );
}


const mapStateToProps = state =>{
  const { list,total } = state.users
  return { 
    list,total,
    loading:state.loading.models.users 
  }
}


export default connect(mapStateToProps)(Users);
