import React from 'react';
import { connect } from 'dva';
import { InputItem, NavBar, Button } from 'antd-mobile';
import styles from './Login.css'


class Login extends React.Component {
    constructor() {
      super()
      this.state = {
        account: '',
        pwd: ''
      }
    }

  onUserNameChange = (val) => {
    this.setState({
      account: val
    })
  }

  onUserPwdChange = (val) => {
    this.setState({
      pwd: val
    })
  }

  onLogin = () => {
      this.props.dispatch({type: 'Login/login', payload: this.state})
  }

    render() {
      return (
        <div>
          <NavBar
            mode="dark"
            leftContent="首页"
          >酷飞</NavBar>
          <p className={styles.LoginTitle}>酷酷飞</p>
          <section className={styles.mainContent}>
            <InputItem
              clear
              placeholder='请输入用户名'
              onChange={this.onUserNameChange}
              ref={el => this.autoFocusInst = el}
            >账号</InputItem>
            <InputItem
              clear
              placeholder='请输入密码'
              type='password'
              onChange={this.onUserPwdChange}
              ref={el => this.autoFocusInst = el}
            >密码</InputItem>
            <Button onClick={this.onLogin} style={{marginTop: '30px', color: '#fff'}} type='primary'>登录</Button>
          </section>
        </div>
      )
    }
}

export default connect()(Login)
