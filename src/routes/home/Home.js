import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import { Carousel } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <nav>
          <span>消息</span>
          <span>酷飞</span>
          <span>中心</span>
        </nav>
        <div>
          <Carousel autoplay>
            <div className={styles.CarouselOne}><h3>1</h3></div>
            <div className={styles.CarouselTwo}><h3>2</h3></div>
            <div className={styles.CarouselThree}><h3>3</h3></div>
            <div className={styles.CarouselFour}><h3>4</h3></div>
          </Carousel>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch({type: 'Home/fetchInitState', payload: {
      account: 'zcom1',    // 账户名
      pwd: 'abc123',        // 密码
    }})
  }
}

Home.propTypes = {
};

export default connect()(Home);
