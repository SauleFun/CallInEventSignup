import { Link } from 'react-router-dom';
import './RegisterButton.css';

const RegisterButton = () => {
  return (
    <div className="button-container">
    <Link to="/register" className="register-button">
      Submit !
    </Link>
    </div>
  );
};

export default RegisterButton