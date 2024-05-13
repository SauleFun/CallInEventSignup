
import './AttendeesForm.module.scss';
import styles from './AttendeesForm.module.scss';

const AttendeesForm = () => {
    return (
        <div className={styles.attendeesContainer}>
        <div className={styles.attendeesForm}>
            <div className={styles.title}>Attendee List</div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jurgita</td>
                        <td>Kaziūnienė</td>
                        <td>2001-11-24</td>
                        <td>jurgita@kaziuniene.lt</td>
                        <td>+370...</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        </div>
    );
};

export default AttendeesForm;