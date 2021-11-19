import routes from '@/routes'
import { useRoutes } from 'react-router'
import CommonModals from '@/components/CommonModals/CommonModals'
import './App.css'
// 容器型组件
function App(props) {
  // TODO：判断用户类型，role=1时才能跳转至admin系统
  return (
    <>
      {useRoutes(routes)}
      <CommonModals></CommonModals>
    </>
  )
}

export default App
