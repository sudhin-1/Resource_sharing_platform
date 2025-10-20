import React, { useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import BASEURL from '../service/serverURL'; 

function Admin({ requests, setRequests }) {

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`${BASEURL}/requests`);
        setRequests(res.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };
    fetchRequests();
  }, [setRequests]);


  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`${BASEURL}/requests/${id}`, { status });
      const res = await axios.get(`${BASEURL}/requests`);
      setRequests(res.data);
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  
  const deleteRequest = async (id) => {
    try {
      await axios.delete(`${BASEURL}/requests/${id}`);
      const updatedRequests = requests.filter(req => req.id !== id);
      setRequests(updatedRequests);
    } catch (error) {
      console.error('Error deleting request:', error);
    }
  };

  return (
    <div id='admin_container' className='container-fluid'>
      <div className='row'>
        <div className='vh-100'>
          <div className='fs-1 text-center'>Admin-Portal</div>
          <h3 className='text-center pt-3'>Requests</h3>

          <div className='mt-3'>
            {requests.map((req) => (
              <div key={req.id} className='w-100 border shadow rounded-5 mb-3 p-3'>
                <p className='mb-1'><strong>Title:</strong> {req.title}</p>
                <p className='mb-1'><strong>Description:</strong> {req.description}</p>
                <p className='mb-1'><strong>Status:</strong> {req.status}</p>

                <div className='d-flex justify-content-between mt-2'>
                  <button
                    className='btn btn-success btn-sm'
                    onClick={() => updateStatus(req.id, 'Available')}
                  >
                    Available
                  </button>

                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => updateStatus(req.id, 'Unavailable')}
                  >
                    Unavailable
                  </button>

                  <button
                    className='btn btn-outline-dark btn-sm'
                    onClick={() => deleteRequest(req.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {requests.length === 0 && (
              <p className='text-center mt-3'>No requests submitted yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
