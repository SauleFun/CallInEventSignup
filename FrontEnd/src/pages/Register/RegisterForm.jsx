import { useEffect, useState } from 'react';
import styles from './RegisterForm.module.scss';
import RegisterButton from '../../components/Button/RegisterButton/RegisterButton';
import { useSearchParams } from 'react-router-dom';

function RegisterForm() {
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        const attendeeId = searchParams.get("id");

        if(attendeeId) {
            fetch(`http://localhost:8080/api/attendees/one/${attendeeId}`, {
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
                document.querySelector('#name').value = data['name'];
                document.querySelector('#surname').value = data['surname'];
                document.querySelector('#phone').value = data['phone'];
                document.querySelector('#age').value = data['age'];
                document.querySelector('#email').value = data['email'];
            })
            .catch(error => {
                console.warn(error);
            })
        }
    }, [searchParams]);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let attendeeId = searchParams.get("id");
        let inputData = inputs;

        if(attendeeId) {
            inputData = {
                ...inputData,
                _id: searchParams.get("id")
            };
        }

        fetch('http://localhost:8080/api/attendees/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData)
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
                        <label htmlFor="phone" className={styles.label}>Phone number</label>
                        <input
                            type="tel"
                            id="phone"
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
    );
}

export default RegisterForm;