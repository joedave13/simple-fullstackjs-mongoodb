import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [role, setRole] = useState('User');
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    const user = response.data;
    setName(user.name);
    setEmail(user.email);
    setGender(user.gender);
    setRole(user.role);
  };

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
        role,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className="btn btn-sm btn-danger">
            Back
          </Link>
          <div className="card mt-3">
            <div className="card-header">Add User</div>
            <div className="card-body">
              <form onSubmit={updateUser} autoComplete="off">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" hidden>
                      - Choose Gender -
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" hidden>
                      - Choose Role -
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-warning">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
