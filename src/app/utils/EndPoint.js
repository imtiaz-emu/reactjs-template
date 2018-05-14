export default {
  api_url: 'http://localhost:3000/api/v1/',
  // api_url: 'https://cryptic-badlands-35281.herokuapp.com/api/v1/',
  api_token: 'Bearer ' + localStorage.getItem('jwtToken'),
  current_profile_id: localStorage.getItem('current_profile_id'),
  is_logged_in: function () {
    return localStorage.getItem('jwtToken') != null;
  }
}
