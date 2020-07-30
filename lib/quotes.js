"use strict";

const axios = require("axios");

const API_URL = "https://quote-garden.herokuapp.com/";
const API_VERSION = "api/v2/";

exports.randomQuote = () => {
  return new Promise((success, reject) => {
    axios
      .get(`${API_URL}${API_VERSION}quotes/random`)
      .then(({ data }) => {
        success(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.authorQuotes = (authorName, page = 1, limit = 10) => {
  return new Promise((success, reject) => {
    if (authorName === undefined) {
      reject({ error: "Author is required" });
    }
    axios
      .get(
        `${API_URL}${API_VERSION}authors/${authorName}?page=${page}&limit=${limit}`
      )
      .then(({ data }) => {
        success(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.genreQuotes = (genre, page = 1, limit = 10) => {
  return new Promise((success, reject) => {
    if (genre === undefined) {
      reject({ error: "Genre is required" });
    }
    axios
      .get(`${API_URL}${API_VERSION}genre/${genre}?page=${page}&limit=${limit}`)
      .then(({ data }) => {
        success(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getQuotes = (page = 1, limit = 10) => {
  return new Promise((success, reject) => {
    axios
      .get(`${API_URL}${API_VERSION}quotes?page=${page}&limit=${limit}`)
      .then(({ data }) => {
        success(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.searchQuotes = (searchKeyword, page = 1, limit = 10) => {
  return new Promise((success, reject) => {
    if (searchKeyword === undefined) {
      reject({ error: "Search keyword required" });
    }
    axios
      .get(
        `${API_URL}${API_VERSION}quotes/${searchKeyword}?page=${page}&limit=${limit}`
      )
      .then(({ data }) => {
        success(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
