import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const Attendees = () => {
    return (
        <main>
            <Header></Header>
            <div className="content">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    <tr>
                        <td>Modestas</td>
                        <td>Sumskis</td>
                        <td>2001-11-24</td>
                        <td>modestas@modestas.lt</td>
                        <td>+370...</td>
                    </tr>
                </table>
            </div>
            <Footer></Footer>
        </main>

    );
  };
  
  export default Attendees;