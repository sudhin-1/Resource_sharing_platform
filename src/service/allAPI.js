import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

const REQUESTS_URL = `${BASEURL}/requests`; 

// Add request
export const addDataAPI = (reqBody) => {
  return commonAPI('POST', REQUESTS_URL, reqBody);
};

// Get all requests
export const getDataAPI = () => {
  return commonAPI('GET', REQUESTS_URL);
};

// Update a request by ID
export const updateDataAPI = (id, updatedFields) => {
  return commonAPI('PATCH', `${REQUESTS_URL}/${id}`, updatedFields);
};

// Delete a request by ID (optional)
export const deleteDataAPI = (id) => {
  return commonAPI('DELETE', `${REQUESTS_URL}/${id}`);
};
