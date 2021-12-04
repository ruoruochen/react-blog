import Home from '@/views/Home/Home'
import Detail from '@/views/Detail/Detail'
import Categories from '@/views/Categories/Categories'
import Archives from '@/views/Archives/Archives'
import About from '@/views/About/About'
import Layout from '../layout'
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
        path: 'archives',
        element: <Archives />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'detail/:articleId',
        element: <Detail />,
      },
      {
        path: '*',
        element: (
          <main>
            <p>There's nothing here!</p>
          </main>
        ),
      },
    ],
  },
]
export default routes
