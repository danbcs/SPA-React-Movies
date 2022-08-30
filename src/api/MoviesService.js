import axios from 'axios';

const API_KEY = 'd3ce2531854afb85fd231cf28c53f7b6';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`
const withBaseUrlAndPage = (path, page) => `${BASE_URL}${path}?api_key=${API_KEY}&page=${page}`



export class MoviesService {

    static getMoviesTop(page) {
        return axios(withBaseUrlAndPage('movie/top_rated', page));
    }
    
    static getMoviesPopular(page) {
        return axios(withBaseUrlAndPage('movie/popular', page));
    }

    static getTvPopular(page) {
        return axios(withBaseUrlAndPage('tv/popular', page));
    }

    static getInfoById(type, id) {
        return axios(withBaseUrl(`${type}/${id}`));
    }

}