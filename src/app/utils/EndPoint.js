export default {
  api_url: 'http://localhost:3000/api/v1/',
  api_token: 'Bearer ' + localStorage.getItem('jwtToken'),
  is_logged_in: function () {
    return localStorage.getItem('jwtToken') != null;
  }
}