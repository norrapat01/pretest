import axios from 'axios';

const API_URL = 'https://6650ac8dec9b4a4a6032f7e6.mockapi.io/api/Starbuck';

export const fetchStarbucksData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Starbucks data:', error);
    throw error;
  }
};
