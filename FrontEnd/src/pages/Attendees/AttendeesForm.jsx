
import './AttendeesForm.module.scss';
import styles from './AttendeesForm.module.scss';
import NewAttButton from '../../components/Button/NewAttButton/NewAttButton';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AttendeesForm = () => {
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/attendees/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setAttendees(data);
        })
        .catch(error => {
            console.warn(error);
        })
    });

    const handleDelete = (event) => {
        if(!event.target.dataset.id) return;

        fetch(`http://localhost:8080/api/attendees/delete/${event.target.dataset.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.warn(error);
        })
    }
    return (
    <div >
        <NewAttButton></NewAttButton>
        <div className={styles.attendeesContainer}>
            <div className={styles.attendeesForm}>
                <div className={styles.title}>Attendee List</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendees.map((attendee) => (
                            <tr key={attendee._id}>
                                <td>{attendee.name}</td>
                                <td>{attendee.surname}</td>
                                <td>{attendee.age}</td>
                                <td>{attendee.email}</td>
                                <td>{attendee.phone}</td>
                                <td>
                                    <a data-id={attendee._id} href="javascript:;" onClick={handleDelete}>Delete, </a>
                                    <Link to={"/register?id=" + attendee._id}>Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default AttendeesForm;