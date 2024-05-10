import React, { useState } from 'react';
import styles from ""


function RegisterForm() {
    const [formData, setFormData] = useState({
      
        name: '',
        surname: '',
        email: '',
        phone: '',
        age: '',
    });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.registerContainer}>
                <div className={styles.containerForm}>
                    <div className={styles.formHeading}>Personal Information</div>
                        <div className={styles.containerInput}>
                            <label htmlFor="name" className={styles.label}> Name </label>
                            <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.fullWidth}
                            required
                            />
                            <label htmlFor="surname" className={styles.label}> Surname </label>
                            <Input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className={styles.fullWidth}
                            required
                            />
                            <label htmlFor="email" className={styles.label}> Email </label>
                            <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.fullWidth}
                            required
                            />
                            <label htmlFor="phoneNumber" className={styles.label}> Phone number</label>
                            <Input
                            type="number"
                            id="phoneNumber"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className={styles.fullWidth}
                            required
                            />
                            <label htmlFor="age" className={styles.label}> Age </label>
                            <Input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={(e) => setAge(e.target.value)}
                            className={styles.fullWidth}
                            required
                            />
                            <div className={styles.buttons}>
                               
                                    {/* <Button type="submit" className={styles.registerButton}>
                                    Register
                                    </Button> */}
                            </div>
                        </div>
                    </div>
              </div>
         </form>

           
    );
}

export default RegisterForm