import Home from '@/views/Home/Home'
import Detail from '@/views/Detail/Detail'
import Categories from '@/views/Categories/Categories'
import About from '@/views/About/About'
import Layout from '../layout'
// import { Route, Routes } from 'react-router'
// const routes = (
//   <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />}></Route>
//       <Route path="categories" element={<Categories />}></Route>
//       <Route path="about" element={<About />}></Route>
//       <Route path="detail/:articleId" element={<Detail />}></Route>
//     </Route>
//   </Routes>
// )

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'detail/:articleId',
        element: <Detail />,
      },
    ],
  },
]
export default routes
