import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import AttendeesForm from "./AttendeesForm";

const Attendees = () => {
    return (
        <main>
            <Header/>
                <AttendeesForm/>
            <Footer/>
        </main>

    );
  };
  
  export default Attendees;