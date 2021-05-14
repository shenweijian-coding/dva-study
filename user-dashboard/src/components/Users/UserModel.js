import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

class UserEditModel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  formRef = React.createRef()
  // 显示
  showModelHandler = (e) => {
    this.setState({
      visible: true
    })
  }
  // 隐藏
  hideModelHandler = (e) => {
    this.setState({
      visible: false
    })
  }
  okHandler = ()=>{
    const { onOk } = this.props
    const form = this.formRef.current
    const values = form.getFieldsValue(['name','email','website'])
    onOk(values)
    this.hideModelHandler()
  }
  onFinish = (values ) => {
    console.log(values );
  }
  render(h) {
    const { children } = this.props
    const { name, website, email } = this.props.record

    return (
      <>
        <span onClick={this.showModelHandler}>
          {children}
        </span>
        <Modal
          title="编辑"
          onCancel={this.hideModelHandler}
          visible={this.state.visible}
          onOk={this.okHandler}
        >
          <Form onSubmit={this.okHandler} ref={this.formRef}>
            <Form.Item label="名字" name="name" initialValue={name}>
              <Input></Input>
            </Form.Item>
            <Form.Item label="邮箱" name="email" initialValue={email}>
              <Input></Input>
            </Form.Item>
            <Form.Item label="站点" name="website" initialValue={website}>
            <Input></Input>
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}
export default UserEditModel