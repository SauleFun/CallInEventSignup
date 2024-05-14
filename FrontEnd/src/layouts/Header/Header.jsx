import './Header.scss';
import companyLogo from '../../assets/AJ_Logo.png';
import { Link } from 'react-router-dom';

const Header =() => {
   

    return (
        <div className='header-wrap'>
            <Link to="/">
                <img className="header-logo" src={companyLogo}
                ></img>
            </Link>
    
        </div>
            );
};


export default Header
