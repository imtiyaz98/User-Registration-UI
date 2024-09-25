import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const addUser = (user) => {
        fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(newUser => setUsers([...users, newUser]));
    };

    const updateUser = (updatedUser) => {
        fetch(`http://localhost:8080/api/users/${updatedUser.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(() => {
                setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
                setSelectedUser(null);
            });
    };

    const deleteUser = (id) => {
        fetch(`http://localhost:8080/api/users/${id}`, { method: "DELETE" })
            .then(() => setUsers(users.filter(user => user.id !== id)));
    };

    const editUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <UserForm addUser={addUser} selectedUser={selectedUser} updateUser={updateUser} />
            <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
    );
}

export default App;
