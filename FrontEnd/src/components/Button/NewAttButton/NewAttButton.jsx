import { Link } from 'react-router-dom';
import './NewAttButton.scss';

const NewAttButton = () => {
  return (
    <Link to="/register" className="new-att-button">
      New Attendee !
    </Link>
  );
};

export default NewAttButton