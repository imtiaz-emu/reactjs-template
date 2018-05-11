export default {
  api_url: 'https://cryptic-badlands-35281.herokuapp.com/api/v1/',
  api_token: 'Bearer ' + localStorage.getItem('jwtToken'),
  is_logged_in: function () {
    return localStorage.getItem('jwtToken') != null;
  }
}
