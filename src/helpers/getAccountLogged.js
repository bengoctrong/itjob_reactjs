import Axios from 'axios';
export function getAccountLogged() {
    let token = localStorage.getItem('access_token');
    Axios.defaults.headers.common['Authorization'] = token;
    Axios.post("http://it-job-login.herokuapp.com/public/api/user/me", {
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'text/html; charset=utf-8'   
          }), 
    }).then((res) => {
        console.log(res.data.data.account);
    }).catch((error) => {
    });
}