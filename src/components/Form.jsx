export const Form = () => (
	<div className="container mt-4">
      <h2 className="mb-4">Add New Contact</h2>
      <form>
        <div className="mb-3 text-start m">
          <label htmlFor="fullName" className="form-label mx-1">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label mx-1">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="phone" className="form-label mx-1">Phone Number</label>
          <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="address" className="form-label mx-1">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter address" />
        </div>

        <button type="submit" className="btn btn-primary">Save Contact</button>
      </form>
    </div>
);

