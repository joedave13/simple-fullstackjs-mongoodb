import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          User Table
          <button type="button" className="btn btn-sm btn-success">
            Add User
          </button>
        </div>
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link
                      to={`edit/${user._id}`}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </Link>
                    <button type="button" className="btn btn-sm btn-danger">
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
};

export default UserList;
