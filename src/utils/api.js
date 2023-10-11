import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend server's URL
});

export const fetchMenu = async () => {
  try {
    const response = await api.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    return null;
  }
};
