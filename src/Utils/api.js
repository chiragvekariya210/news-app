import axios from "axios";

const api = (url = "", method) => {
    const options = {
      method,
      url: `${url}`,
    };
    return axios(options);
  };

  export const getNewsList = (categories,search='') => api(`https://newsapi.org/v2/top-headlines?category=${categories}&q=${search}&language=en&pageSize=100&apiKey=7bb717f7b8794b48ac10cf627c361374`, "GET");
