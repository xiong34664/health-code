import React, { Component } from 'react';
import { List, InputItem, DatePicker, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'dva';
import moment from 'moment';

@connect(({ global }) => ({ global }))
class form extends Component {
  onSubmit = () => {
    console.log(this.props);

    this.props.form.validateFields({ force: true }, error => {
      if (!error) {
        const body = this.props.form.getFieldsValue();
        body.startTime = moment(body.startTime).format('YYYY-MM-DD HH:mm:ss');
        body.endTime = moment(body.endTime).format('YYYY-MM-DD HH:mm:ss');
        this.props.dispatch({ type: 'global/save', payload: body });
      } else {
        console.log(error);
        alert('Validation failed');
      }
    });
  };

  onReset = () => {
    this.props.form.resetFields();
    setTimeout(() => console.log(this.state), 0);
  };

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { name, idNumber, school, studentId, startTime, endTime } = this.props;
    return (
      <div>
        <List>
          <InputItem
            type="name"
            placeholder="请输入姓名"
            {...getFieldProps('name', {
              initialValue: name,
              // rules: [{ validator: this.validateIdp }],
            })}
          >
            姓名
          </InputItem>
          <InputItem
            type="idNumber"
            placeholder="请输入身份证号"
            {...getFieldProps('idNumber', {
              initialValue: idNumber,
              // rules: [{ validator: this.validateIdp }],
            })}
          >
            身份证号
          </InputItem>
          <InputItem
            type="name"
            placeholder="请输入学院"
            {...getFieldProps('school', {
              initialValue: school,
              // rules: [{ validator: this.validateIdp }],
            })}
          >
            学院
          </InputItem>
          <InputItem
            type="name"
            placeholder="请输入学号"
            {...getFieldProps('studentId', {
              initialValue: studentId,
              // rules: [{ validator: this.validateIdp }],
            })}
          >
            学号
          </InputItem>
          <DatePicker
            {...getFieldProps('startTime', {
              initialValue: startTime ? new Date(startTime) : '',
              // rules: [{ validator: this.validateIdp }],
            })}
          >
            <List.Item arrow="horizontal">开始时间</List.Item>
          </DatePicker>
          <DatePicker
            {...getFieldProps('endTime', {
              initialValue: endTime ? new Date(endTime) : '',
              // rules: [{ validator: this.validateIdp }],
            })}
          >
            <List.Item arrow="horizontal">结束时间</List.Item>
          </DatePicker>
          <List.Item>
            <Button type="primary" size="small" inline onClick={this.onSubmit}>
              提交
            </Button>
            <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>
              重置
            </Button>
          </List.Item>
        </List>
      </div>
    );
  }
}
export default createForm()(form);
