import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://nomadsland.travel/en/api',
});

export const getJourneys = async () => {
    const response = await api.get('/roadbook');
    return response.data;
};
