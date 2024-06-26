import axios from 'axios';

export const fetchKpi = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/kpis'); // Passe die URL entsprechend an
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
  }
};
