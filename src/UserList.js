function UserList({ users, deleteUser, editUser }) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-3"> {/* Adjust the column size as needed */}
            <table border={1} className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.designation}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editUser(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserList;
  