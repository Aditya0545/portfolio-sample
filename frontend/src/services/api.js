import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProjects = () => api.get('/api/projects');
export const getExperiences = () => api.get('/api/experiences');
export const getAchievements = () => api.get('/api/achievements');
export const getContact = () => api.get('/api/contact');

export default api; 