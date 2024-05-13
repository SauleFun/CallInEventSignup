import { useState } from 'react';
import styles from './RegisterForm.module.scss';
import Input from '../../components/Input/Input';
import RegisterButton from '../../components/Button/RegisterButton/RegisterButton';

function RegisterForm() {
    const [formData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        age: '',
    });

    return (
        <div>
            <form>
                <div className={styles.registerContainer}>
                    <div className={styles.containerForm}>
                        <div className={styles.formHeading}>Personal Information</div>
                        <div className={styles.containerInput}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="surname" className={styles.label}>Surname</label>
                            <Input
                                type="text"
                                id="surname"
                                name="surname"
                                placeholder="Surname"
                                value={formData.surname}
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="phoneNumber" className={styles.label}>Phone number</label>
                            <Input
                                type="tel"
                                id="phoneNumber"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="age" className={styles.label}>Age</label>
                            <Input
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Age"
                                value={formData.age}
                                className={styles.fullWidth}
                                required
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.buttons}>
                <RegisterButton />
            </div>
        </div>
    );
}

export default RegisterForm;