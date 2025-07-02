
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name: name,
            email: email,
            agenda_slug: "ignacont",
            address: address,
            phone: phone,
        };

        fetch("https://playground.4geeks.com/contact/agendas/ignacont/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("Contacto creado:", data);
                setName("");
                setEmail("");
                setAddress("");
                setPhone("");
                navigate("/");
            });
    };
    return (
        <div className="text-center my-5 mx-5">
            <form onSubmit={handleSubmit} className="text-start">
                <div className="mb-3">
                    <label className="form-label">Full name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telephone:</label>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                        Save contact
                    </button>
                </div>
            </form>

            <div className="text-center mt-4">
                <Link to="/" className="btn btn-danger mt-3">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}







