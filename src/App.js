import routes from '@/routes'
import { BrowserRouter } from 'react-router-dom'
import CommonModals from '@/components/CommonModals/CommonModals'
// 容器型组件
function App(props) {
  // TODO：判断用户类型，role=1时才能跳转至admin系统
  // TODO：路由集中管理，renderRoutes
  return (
    <BrowserRouter>
      {routes}
      <CommonModals></CommonModals>
    </BrowserRouter>
  )
}

export default App
