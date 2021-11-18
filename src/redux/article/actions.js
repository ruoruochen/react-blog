import * as TYPES from '@/redux/types'
import axios from '@/utils/axios'
import { message } from 'antd'

// thunk函数
export const getArticleList = (params) => (dispatch) => {
  dispatch({
    type: TYPES.ARTICLE_GET_ARTICLELIST_BEGIN,
  })

  axios
    .get('/article/list', params)
    .then((res) => {
      console.log(res)
      dispatch({
        type: TYPES.ARTICLE_GET_ARTICLELIST_SUCCESS,
        payload: res.data,
      })
      message.success('文章列表加载成功')
    })
    .catch((err) => {
      dispatch({ type: TYPES.ARTICLE_GET_ARTICLELIST_ERROR, payload: err })
      message.error('文章列表加载失败，请检查网络')
    })
}
