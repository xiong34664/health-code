import React, { Component } from 'react';
import { connect } from 'dva';


@connect(({ global }) => ({ global }))
class BasicLayout extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'global/init'});
  }

  render() {
    return this.props.children;
  }
}

export default BasicLayout;
