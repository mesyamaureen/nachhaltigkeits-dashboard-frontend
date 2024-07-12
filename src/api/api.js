import axios from 'axios';

export const fetchKpi = async () => {
    try {
      const baseUrl = import.meta.env.VITE_APP_BACKEND_BASE_URL;
      const endPoint = `${baseUrl}/kpis`
      const response = await axios.get(endPoint); // Passe die URL entsprechend an
      // Füge die `visible` Eigenschaft hinzu
      const kpis = response.data.map(kpi => ({ ...kpi, visible: false }));
      return kpis;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
      }
    };

    export const fetchOrganisatorisch = async () => {
      try {
        const baseUrl = import.meta.env.VITE_APP_BACKEND_BASE_URL;
        const endPoint = `${baseUrl}/organisatorisch`
        const response = await axios.get(endPoint); // Passe die URL entsprechend an
        // Füge die `visible` Eigenschaft hinzu
        const organisatorisch = response.data.map(organisatorisch => ({ ...organisatorisch, visible: false }));
        return organisatorisch;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
        }
      }
    // 'http://localhost:8080/api/kpis'