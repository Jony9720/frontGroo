import axios from 'axios';

export const createServicio = async (servicioData) => {
    const response = await axios.post('http://localhost:59444/api/servicios', servicioData);
    return response.data;
};

export const fetchServicios = async () => {
    const response = await axios.get('http://localhost:59444/api/servicios');
    return response.data;
};

export const updateEstadoServicio = async (id, estado) => {
    const response = await axios.put(`http://localhost:59444/api/servicios/${id}`, { estado });
    return response.data;
};

export const updateServicio = async (id, servicio) => {
    const response = await axios.put(`http://localhost:59444/api/servicios/${id}`, servicio); // Envía los datos directamente
    return response.data;
};

export const archivarServicio = async (id) => {
    const response = await axios.put(`http://localhost:59444/api/servicios/archivar/${id}`);
    return response.data;
};

export const fetchServiciosDashboard = async () => {
    const response = await axios.get('http://localhost:59444/api/servicios/grooming-dashboard');
    return response.data;
};
