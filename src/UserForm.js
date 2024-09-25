import { useState, useEffect } from "react";

function UserForm({ addUser, selectedUser, updateUser }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  // Effect to set state when selectedUser changes
  useEffect(() => {
    if (selectedUser) {
      setUserName(selectedUser.userName);
      setEmail(selectedUser.email);
      setDesignation(selectedUser.designation);
    } else {
      // Reset fields when no user is selected
      setUserName("");
      setEmail("");
      setDesignation("");
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      updateUser({ ...selectedUser, userName, email, designation });
    } else {
      addUser({ userName, email, designation });
    }
    // Reset the form fields after submission
    setUserName("");
    setEmail("");
    setDesignation("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4 fw-bold text-black" style={{ fontFamily: 'Arial Black' }}>
            BBD Registration
          </h2>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User Name"
              required
              className="form-control my-2"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="form-control my-2"
            />
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Designation"
              required
              className="form-control my-2"
            />
            <button type="submit" className="btn btn-primary">
              {selectedUser ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
