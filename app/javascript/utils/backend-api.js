const API_URL = 'http://localhost:3000/api';

export const getCurrentUser = () => {
    let current_user = localStorage.getItem("userData");
    if (current_user){
        return JSON.parse(current_user);
    }
    return null;
}

const authRequest = async (method, url, data) => {
    let params = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(data){
        params = {...params, body: JSON.stringify(data)}
    }
    const response = await fetch(url, params)
    if (response.ok) {
        const jsonRes = await response.json();
        localStorage.setItem("token", response.headers.get('Authorization'));
        localStorage.setItem("userData", JSON.stringify(jsonRes.data));
        return jsonRes;
    } else if(response.status === 401) {
        throw new Error('Please enter correct Email and Password');
    } else {
        throw new Error('Something went wrong');
    }
}

const apiWithTokenRequest = async (method, url, data) => {
    let params = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    }
    if(data){
        params = {...params, body: JSON.stringify(data)}
    }
    const response = await fetch(url, params)
    if (response.ok) {
        const jsonRes = await response.json();

        return jsonRes;
    } else {
        throw new Error('Something went wrong');
    }
}

export const loginUser = async (data) => {
    const loginResponse = await authRequest('POST', `${API_URL}/login`, data)
    return loginResponse 
}

export const signupUser = async (data) => {
    const signUpRes = await authRequest('POST', `${API_URL}/signup`, data)
    return signUpRes  
}

export const logoutUser = async () => {
    const logoutResponse = await apiWithTokenRequest('DELETE', `${API_URL}/logout`)
    console.log("logoutResponse.status", logoutResponse);
    if (logoutResponse.status == 200) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }
    return logoutResponse  
}

export const getReferrals = async () => {
    const response = await apiWithTokenRequest('GET', `${API_URL}/referrals`)
    console.log("response111", response);
    return response;
}

export const invite = async (data) => {
    const response = await apiWithTokenRequest('POST', `${API_URL}/invite`, data)
    return response;
}