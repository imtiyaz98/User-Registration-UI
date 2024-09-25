function UserList({ users, deleteUser, editUser }) {
    return (
        <table border={1}>
            <tr>  
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Edit</th>
                <th>Delete</th>
                  </tr>
            {users.map(user => (
                <tr> 
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.designation}</td>
                    <td><button className="btn btn-primary" onClick={() => editUser(user)}>Edit</button></td>
                    <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                    </tr>
            ))}
        </table>
    );
}

export default UserList;
