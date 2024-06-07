import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Content from './Component/Content.jsx'
import Item, { postLoader } from './Component/Items.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [{ path: "/", element: <Content />,loader:postLoader },
    { path: "create-post", element: <Item /> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
