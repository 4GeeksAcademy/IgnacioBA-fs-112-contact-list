import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const EditContact = () => {
  const { state: contactData } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contactData) {
      setName(contactData.name);
      setEmail(contactData.email);
      setAddress(contactData.address);
      setPhone(contactData.phone);
    }
  }, [contactData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedContact = {
      name: name,
      email: email,
      agenda_slug: "ignacont",
      address: address,
      phone: phone,
    };

    fetch(`https://playground.4geeks.com/contact/agendas/ignacont/contacts/${contactData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Contacto actualizado:", data);
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
            Update contact
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
};