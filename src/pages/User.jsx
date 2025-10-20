import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addDataAPI, getDataAPI } from '../service/allAPI';

function User({ requests, setRequests }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [filter, setFilter] = useState('All');


    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const data = await getDataAPI();
                setRequests(data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };
        fetchRequests();
    }, [setRequests]);

    const handleClick = () => setShowForm(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRequest = {
            title: formData.title,
            description: formData.description,
            status: 'Unavailable'
        };

        try {
            await addDataAPI(newRequest);
            const updatedRequests = await getDataAPI();
            setRequests(updatedRequests);
        } catch (error) {
            console.error('Error adding request:', error);
        }

        setShowForm(false);
        setFormData({ title: '', description: '' });
    };


    const filteredRequests =
        filter === 'All'
            ? requests
            : requests.filter((req) => req.status === filter);

    return (
        <div className='container-fluid mb-5'>
            <div className='row'>
                <h1 className='text-center'>User Portal</h1>
                <div className='d-flex justify-content-center'>
                    <img src="https://img.freepik.com/free-vector/school-student-stationary-supplies-shelf_3446-469.jpg?semt=ais_hybrid&w=740&q=80" alt="" style={{ height: '15rem' }} />
                    
                </div>
                <p className='text-center text-primary'>Admin:
                        “Yes! You can submit a request here. Just describe what you need, and I’ll mark it as Available once it’s ready.”</p>
                {/* LEFT SIDE - ADD REQUEST */}
                <div className='col-md-4 d-flex flex-column align-items-center'>
                    <h1 className='mt-5 text-success'>Add Request</h1>

                    {!showForm ? (
                        <div
                            className='mt-3 shadow border-0 rounded d-flex justify-content-center align-items-center'
                            style={{ height: '10rem', width: '10rem' }}
                        >
                            <Button
                                variant="text"
                                className='fs-1'
                                onClick={handleClick}
                                style={{ border: 'none', background: 'transparent', outline: 'none', boxShadow: 'none' }}
                            >
                                <CiCirclePlus className='text-primary' size={60} />
                            </Button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className='mt-4 p-4 shadow rounded bg-white'
                            style={{ width: '20rem' }}
                        >
                            <TextField
                                label="Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={3}
                                required
                            />
                            <div className='d-flex justify-content-between mt-3'>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                                </Button>
                                <Button variant="contained" color="primary" type="submit">
                                    Request
                                </Button>
                            </div>
                        </form>
                    )}
                </div>

                {/* RIGHT SIDE - DISPLAY REQUESTS */}
                <div className='col-md-8'>

                    <div className='d-flex justify-content-end align-items-center mt-3 me-4'>
                        <label className='me-2 fw-bold'>Filter by Availability:</label>
                        <select
                            className='form-select w-auto'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                    <div className='row d-flex flex-wrap mt-3'>
                        {filteredRequests.map((req) => (
                            <div className='col-md-4' key={req.id}>
                                <div className="card rounded-4 mt-3" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold">{req.title}</h5>
                                        <p className="card-text ">{req.description}</p>
                                        <p>
                                            <strong>Status:</strong>{' '}
                                            <span className={req.status === 'Available' ? 'text-success' : 'text-danger'}>
                                                {req.status}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredRequests.length === 0 && (
                            <p className='text-center mt-3'>No requests found for "{filter}" status.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
