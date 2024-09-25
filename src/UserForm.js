import { useState } from "react";

function UserForm({ addUser, selectedUser, updateUser }) {
    const [userName, setUserName] = useState(selectedUser?.userName || "");
    const [email, setEmail] = useState(selectedUser?.email || "");
    const [designation, setDesignation] = useState(selectedUser?.designation || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedUser) {
            updateUser({ ...selectedUser, userName, email, designation });
        } else {
            addUser({ userName, email, designation });
        }
        setUserName("");
        setEmail("");
        setDesignation("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="User Name" required /> <br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br></br>
            <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Designation" required /><br></br>
            <button type="submit">{selectedUser ? "Update" : "Submit"}</button>
        </form>
    );
}

export default UserForm;
