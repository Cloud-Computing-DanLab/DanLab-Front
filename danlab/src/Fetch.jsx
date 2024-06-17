import axios from "axios";

const AUTH_BASE_URL = 'http://172.25.235.130:31179/auth';
const LAB_BASE_URL = 'http://172.25.235.130:31179/lab';
const LAB_EVENT_BASE_URL = 'http://172.25.235.130:31179/lab-event';
const ARTICLE_BASE_URL = 'http://172.25.235.130:31179/article'

// AUTH
export const authenticate = (code, state) => {
    return axios.get(`${AUTH_BASE_URL}/kakao/callback?code=${code}&state=${state}`);
};

export const loginPage = () => {
    return axios.get(`${AUTH_BASE_URL}/loginPage`)
}

export const register = (body) => {
    return axios.post(`${AUTH_BASE_URL}/signup/`, body)
}

export const getMyInfo = () => {
    return axios.get(`${AUTH_BASE_URL}/info/`)
}

// LAB
export const getLabList = () => {
    return axios.get(`${LAB_BASE_URL}/`)
}

export const getLabInfo = (labId) => {
    return axios.get(`${LAB_BASE_URL}/${labId}`)
}

// LAB-EVENT
export const getLabEventList = () => {
    return axios.get(`${LAB_EVENT_BASE_URL}/`)
}

export const getLabIdEventList = (labId) => {
    return axios.get(`${LAB_EVENT_BASE_URL}/${labId}`)
}

export const getLabEventInfo = (labId) => {
    return axios.get(`${LAB_EVENT_BASE_URL}/${labId}`)
}

// ARTICLE
export const getArticleList = () => {
    return axios.get(`${ARTICLE_BASE_URL}/`)
}

export const getArticleInfo = (id) => {
    return axios.get(`${ARTICLE_BASE_URL}/${id}`)
}

export const makeArticle = (body) => {
    return axios.post(`${ARTICLE_BASE_URL}/`, body)
}
