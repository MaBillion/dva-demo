import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import { Carousel, WingBlank, NavBar } from 'antd-mobile';

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    }
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <NavBar
          mode="dark"
          leftContent="消息"
          rightContent='中心'
        >酷飞</NavBar>
        <div>
          <WingBlank style={{margin: '0'}}>
            <Carousel
              autoplay={true}
              infinite
              style={{margin: '0'}}
            >
              {this.state.data.map(val => (
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  key={val}
                  style={{ width: '100%', verticalAlign: 'top', margin: '0'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              ))}
            </Carousel>
          </WingBlank>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch({type: 'Home/fetchInitState'})
  }
}

Home.propTypes = {
};

export default connect()(Home);
