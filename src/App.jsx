import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import PostListProvider from './store/Context';
function App() {
  return <>
    <PostListProvider>
      <div className='main-Container'>
        <Sidebar ></Sidebar>
        <div className='main-Content'>
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  </>
}
export default App;