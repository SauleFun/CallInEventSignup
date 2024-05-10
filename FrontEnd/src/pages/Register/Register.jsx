import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import RegistrationForm from "./RegisterForm";


const Register = () => {
    return (
        <main>
            <Header></Header>
            <div className="content">
                register

                <RegistrationForm />
                
            </div>


            <Footer></Footer>
        </main>
    );
  };
  
  export default Register;