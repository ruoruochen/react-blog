import * as TYPES from '@/redux/types'
/* ============  state  ============*/
const defaultState = {
  count: 0,
  articleList: [],
  loading: false,
  error: null,
  params: {},
}

/* ============  reducer  ============*/
export default function articleReducer(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case TYPES.ARTICLE_GET_ARTICLELIST_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case TYPES.ARTICLE_GET_ARTICLELIST_SUCCESS:
      return {
        ...state,
        loading: false,
        count: payload?.count,
        articleList: payload?.rows,
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
