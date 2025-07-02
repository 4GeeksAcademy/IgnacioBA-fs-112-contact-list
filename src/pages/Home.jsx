
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


export const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const agendaSlug = "ignacont";

    fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}`)
      .then((resp) => {
        if (!resp.ok) {

          return fetch("https://playground.4geeks.com/contact/agendas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: agendaSlug }),
          });
        }
      })
      .then((resp) => {
        if (resp && resp.ok) {
          console.log("Agenda creada correctamente.");
        }
      })
      .catch((error) => {
        console.error("Error comprobando o creando la agenda:", error);
      });

      getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/ignacont");
      if (!response.ok) {
        throw new Error(`Error al obtener contactos: ${response.status}`);
      }
      const data = await response.json();
      console.log("Datos recibidos:", data);
      if (Array.isArray(data.contacts)) {
        setContacts(data.contacts);
      } else {
        console.warn("La respuesta no contiene un array de contactos:", data);
      }
    } catch (error) {
      console.error("Error al cargar contactos:", error);
    }
  };

  const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/ignacont/contacts/${id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.ok) {

          setContacts(contacts.filter((contact) => contact.id !== id));
          console.log("Contacto eliminado correctamente");
        } else {
          console.error("Error al eliminar contacto");
        }
      });
  };

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
                  <h5 className="card-title">Name: {contact.name}</h5>
                  <p className="card-text">
                    Address: {contact.address} <br />
                    Phone: {contact.phone} <br />
                    Email: {contact.email}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2 mb-4">
                <button
                  className="btn btn-sm btn-outline-danger me-2"
                  onClick={() => deleteContact(contact.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>

                <Link
                  to="/edit"
                  state={contact}
                  className="btn btn-sm btn-outline-secondary mx-3 "
                >
                  <i className="fas fa-pencil-alt"></i>
                </Link>
              </div>

            </div>
          </div>
        ))
      )}

    </div>
  );
}