import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <Home></Home>
            <ToastContainer/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;