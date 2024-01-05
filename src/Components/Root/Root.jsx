import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Home/Footer';
const Root = () => {
    return (
        <div>
            <Home></Home>
            <ToastContainer/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;