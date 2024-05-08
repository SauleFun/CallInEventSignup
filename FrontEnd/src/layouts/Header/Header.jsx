import './Header.css';
import companyLogo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import NewAttButton from '../../components/Button/NewAttButton/NewAttButton';

const Header =() => {
    return (
        <div className='header-wrap'>
            <Link to="/">
                <img className="header-logo" src={companyLogo}
                ></img>
            </Link>
            <NewAttButton>

            </NewAttButton>
        </div>
            );
};


export default Header
