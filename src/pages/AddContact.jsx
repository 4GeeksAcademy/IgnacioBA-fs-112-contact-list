
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { Form } from "../components/Form.jsx";

export const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center">
            <div className= "container">
                 <Form/>
            </div>
           
            <Link to="/" className="btn btn-danger mt-3">
                Back Home
            </Link>
        </div>
    );
};

