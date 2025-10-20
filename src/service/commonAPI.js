import axios from 'axios';

const commonAPI = async (httpMethod, url, reqBody = null) => {
  try {
    const res = await axios({
      method: httpMethod,
      url,
      data: reqBody
    });
    return res.data; 
  } catch (err) {
    console.error('API Error:', err);
    throw err; 
  }
};

export default commonAPI;
