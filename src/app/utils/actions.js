export function updateUser(url, email, password, remember_me) {
  return dispatch => {
    fetch(url, {
            method: 'POST',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                email: email,
                password: password,
                remember_me: remember_me
            }),
        })
            .then(res => res.json())
            .then(response => {
                if (typeof response.access_token == "undefined")
                    dispatch({type: "DISPLAY_LOGIN_ERRORS", payload: response.error.user_authentication});
                else {
                    localStorage.setItem('jwtToken', response.access_token);
                    dispatch({type: "UPDATE_USER", payload: response.user});
                }
            })
            .catch(error => console.error('Error:', error))

    }
}