import { useState } from 'react';
import styles from './RegisterForm.module.scss';
import RegisterButton from '../../components/Button/RegisterButton/RegisterButton';

function RegisterForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/api/attendees/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            location.href = "/";
        })
        .catch(error => {
            console.warn(error);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.registerContainer}>
                    <div className={styles.containerForm}>
                        <div className={styles.formHeading}>Personal Information</div>
                        <div className={styles.containerInput}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                placeholder="Name"
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="surname" className={styles.label}>Surname</label>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                onChange={handleChange}
                                placeholder="Surname"
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="Email"
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="phoneNumber" className={styles.label}>Phone number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phone"
                                onChange={handleChange}
                                pattern="\+370\s?6\d{2}\s?\d{5}"
                                placeholder="Phone number"
                                className={styles.fullWidth}
                                required
                            />
                            <label htmlFor="age" className={styles.label}>Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                onChange={handleChange}
                                placeholder="Age"
                                className={styles.fullWidth}
                                required
                            />
                        </div>
                    </div>
                </div>
            <RegisterButton />
            </form>
        </div>
    );
}

export default RegisterForm;