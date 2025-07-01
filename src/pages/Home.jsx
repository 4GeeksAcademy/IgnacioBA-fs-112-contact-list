
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


export const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/ignacont")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);

        if (Array.isArray(data.contacts)) {
          setContacts(data.contacts);
        } else {
          console.warn("La respuesta no es un array:", data);
        }
        console.log(data.contacts);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/add" className="btn btn-success">
          Añadir Contacto
        </Link>
      </div>

      <h2 className="text-center mb-4">Lista de Contactos</h2>

      {contacts.length === 0 ? (
        <p className="text-center">No hay contactos disponibles.</p>
      ) : (
        contacts.map((contact) => (
          <div key={contact.id} className="card mb-3">
            <div className="row g-0 align-items-center">
              <div className="col-md-2 text-center">
                <img
                  src={contact.image || "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
                  className="img-fluid rounded-circle m-3"
                  alt="Foto de perfil"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text">
                    {contact.address} <br />
                    {contact.phone} <br />
                    {contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

    </div>
  );
}