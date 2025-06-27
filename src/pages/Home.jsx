
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";


export const Home = () => {
	
  	const {store, dispatch} =useGlobalReducer()
	const dummyContact = {
    name: "Mike Anamendolla",
    address: "5842 Hillcrest Rd",
    phone: "(870) 288-4149",
    email: "mike.ana@example.com",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  };
	return (
		<div className="text-center">
      <h1>Lista de contactos</h1>
	  <ContactCard contact={dummyContact} />

      <Link to="/add" className="btn btn-primary mt-3">
        Add Contact
      </Link>
    </div>
	);
}; 