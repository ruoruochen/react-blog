import * as TYPES from '@/redux/types'
/* ============  state  ============*/
const defaultState = {
  count: 0,
  articleList: [],
  loading: false,
  error: null,
  params: {
    keywords: '',
    page: 1,
    pageSize: 10,
    tag: [],
  },
}

/* ============  reducer  ============*/
export default function articleReducer(state = defaultState, action) {
  const { type, payload, params } = action
  switch (type) {
    case TYPES.ARTICLE_GET_ARTICLELIST_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case TYPES.ARTICLE_GET_ARTICLELIST_SUCCESS:
      // console.log(state, 'state')
      // console.log(params, 'params')
      // console.log({ ...state.params }, '之前的params')
      // console.log({ ...state.params, ...params }, '合并 params')
      const newParams = params
        ? { ...state.params, ...params }
        : { ...state.params }
      return {
        ...state,
        loading: false,
        count: payload?.count,
        articleList: payload?.rows,
        params: newParams,
      }
    case TYPES.ARTICLE_GET_ARTICLELIST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
