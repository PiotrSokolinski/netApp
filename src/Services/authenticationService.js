export const registerUserService = (request) => {
    const REGISTER_API_ENDPOINT = "https://localhost:44367/api/users";
    
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(REGISTER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };
  
  export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = "https://localhost:44367/api/users/authenticate";
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(handleResponse)
      .then(user => {
        console.log(user, "user in fetch")
          if (user) {
              user.authdata = window.btoa(request.user.email + ':' + request.user.password);
              localStorage.setItem('user', JSON.stringify(user));
              window.location.reload(true);
          }

          return user;
      });
  };

  export function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata, 'Content-Type': 'application/json' };
    } else {
        return {};
    }
}
  export const emailPasswordUsernameService = (request) => {
    const RESET_EMAIL_API_ENDPOINT = "https://localhost:44367/api/users";
    const userId = JSON.parse(localStorage.getItem('user')).userId
    const data = {
      userId,
      ...request.user
    }
    const parameters = {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify(data)
    };
  
    return fetch(`${RESET_EMAIL_API_ENDPOINT}/${userId}`, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };


  function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
  }

export const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  window.location.reload(true);
}