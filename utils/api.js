const BASE_API = 'https://yts.lt/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(
      `${BASE_API}movie_suggestions.json?movie_id=${id}`,
    );
    const { data } = await query.json();
    return data.movies.filter(i => i.genres);
  }
  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json`);
    const { data } = await query.json();
    return data.movies.filter(i => i.genres);
  }
}

export default new Api();
