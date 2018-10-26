import fetch from 'dva/fetch';
import { message } from 'antd'

function checkStatus(response) {
  console.log(response)
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    message.info('服务器错误')
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options) {
  let defaultOptions = {
    method: 'POST',
    api: '',
    body: {},
    header: {'Content-Type': 'application/json;charset=UTF-8'},
    errCodes: {}
  }

  let param = {
    b: options.body,
    c: {}
  }
  param = JSON.stringify(param)
  defaultOptions = Object.assign({}, defaultOptions, options)
  console.log(defaultOptions)
  const response = await fetch(url, {
    method: defaultOptions.method,
    header: defaultOptions.header,
    credentials: 'include',
    body: param
  });

  checkStatus(response);

  const res = await response.json();
  console.log(res)
  let { data, success, err_code } = res
  if (success) {
    console.log('Response: ', data)
    return data
  } else {
    if (err_code === -2) {
      message.info('请先登录')
    }
    if (err_code in defaultOptions.errCodes) {
      let msg = defaultOptions.errCodes[err_code];
      message.info(msg)
      return false
    }
  }
}

export default request;
