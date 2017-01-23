export const getAllMoviesAPI = async() => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42990753b2bcd3d85d5a107553bbf96a&language=en-US');
    return await response.json();
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const findMoviesAPI = async(query) => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/search/multi?api_key=42990753b2bcd3d85d5a107553bbf96a&language=en-US&query=' + query);
    return await response.json();
  } catch (e) {
    console.log(e);
    return {};
  }
};
