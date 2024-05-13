import { Link } from 'react-router-dom';
import './RegisterButton.css';

const RegisterButton = () => {
  return (
    <Link to="/register" className="register-button">
      Submit !
    </Link>
  );
};

export default RegisterButton