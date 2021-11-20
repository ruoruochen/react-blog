import * as TYPES from '@/redux/types'
import axios from '@/utils/axios'
import { removeEmptyFromObj } from '@/utils'
import { message } from 'antd'

// thunk函数
export const getArticleList = (params) => (dispatch, getState) => {
  dispatch({
    type: TYPES.ARTICLE_GET_ARTICLELIST_BEGIN,
  })

  const newParams = params ? { ...params } : {}
  const state = getState()

  axios
    .get('/article/list', {
      params: removeEmptyFromObj({
        ...state?.article?.params,
        ...newParams,
      }),
    })
    .then((res) => {
      window.scrollTo(0, 0)
      dispatch({
        type: TYPES.ARTICLE_GET_ARTICLELIST_SUCCESS,
        payload: res.data,
        params: newParams,
      })
    })
    .catch((err) => {
      dispatch({ type: TYPES.ARTICLE_GET_ARTICLELIST_ERROR, payload: err })
      message.error('文章列表加载失败，请检查网络')
    })
}
