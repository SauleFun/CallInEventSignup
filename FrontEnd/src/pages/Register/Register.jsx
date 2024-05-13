import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import RegisterForm from "./RegisterForm";


const Register = () => {
    return (
        <main>
            <Header></Header>
            <div className="content">
           

                <RegisterForm />
                
            </div>


            <Footer></Footer>
        </main>
    );
  };
  
  export default Register;