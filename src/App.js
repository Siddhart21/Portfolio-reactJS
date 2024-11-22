import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import {Outlet} from 'react-router-dom';





function App() {
  return (
    <>
     <div className="App bg-custom-bg min-h-screen">
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
    </div>
    </>
  );
}
export default App;
