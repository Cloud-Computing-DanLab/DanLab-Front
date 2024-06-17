import axios from "axios";

const AUTH_BASE_URL = 'http://172.25.235.130:31179/auth';
const LAB_BASE_URL = 'http://172.25.235.130:31179/lab';
const LAB_EVENT_BASE_URL = 'http://172.25.235.130:31179/lab-event';
const ARTICLE_BASE_URL = 'http://172.25.235.130:31179/article'

// AUTH
export const authenticate = (code, state) => {
    return axios.get(`${AUTH_BASE_URL}/auth/kakao/callback?code=${code}&state=${state}`);
};

export const loginPage = () => {
    return axios.get(`${AUTH_BASE_URL}/auth/loginPage`)
}

export const register = (body) => {
    return axios.post(`${AUTH_BASE_URL}/auth/signup`, body)
}

// export const tokenValid = (token) => {
//     return axios.get(`${AUTH_BASE_URL}/auth/valid`, {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     });
// };

export const getMyInfo = () => {
    return axios.get(`${AUTH_BASE_URL}/auth/info`)
}

// LAB
export const getLabList = (searchKeyword) => {
    return axios.get(`${LAB_BASE_URL}/lab?page=0&size=10&searchKeyword=${searchKeyword}`)
}

export const getLabInfo = (labId) => {
    return axios.get(`${LAB_BASE_URL}/${labId}`)
}

// LAB-EVENT
export const getLabEventList = (labId) => {
    return axios.get(`${LAB_EVENT_BASE_URL}?labId=${labId}&page=0&size=10`)
}

export const getLabEventInfo = (labId) => {
    return axios.get(`${LAB_EVENT_BASE_URL}/${labId}`)
}

// ARTICLE
export const getArticleList = () => {
    return axios.get(`${ARTICLE_BASE_URL}?page=0&size=10`)
}

export const makeArticle = (body) => {
    return axios.post(`${ARTICLE_BASE_URL}`, body)
}
