import './Header.css';
import companyLogo from '../../assets/AJ_Logo.png';
import { Link } from 'react-router-dom';
// import NewAttButton from '../../components/Button/NewAttButton/NewAttButton';

const Header =() => {
    // const location = useLocation();

    return (
        <div className='header-wrap'>
            <Link to="/">
                <img className="header-logo" src={companyLogo}
                ></img>
            </Link>
                
       {/* <div className='header-nav'>   */}
            {/* {location.pathname === '/Attendees' && <NewAttButton />} */}
              {/* <NewAttButton></NewAttButton>  */}

              {/* </div> */}
        </div>
            );
};


export default Header
