/* eslint-disable no-param-reassign */
import axios from 'axios';

const fetchWrapper = axios.create({
	baseURL: 'https://api-fresh-harvest.code-commando.com/api/v1/',
  
	// timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

fetchWrapper.interceptors.request.use(
	config => {
		const token = JSON.parse(localStorage.getItem('auth'));
		if (token?.token) {
      console.log(accessToken);
			config.headers.Authorization = `Bearer ${token?.token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

fetchWrapper.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;

		// Check if the error is due to an expired accessToken
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const newToken = await refreshAccessToken();
        console.log('new accessToken',newToken);

				// Update new accessToken
				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return axios(originalRequest);
			} catch (refreshError) {
				// If accessToken refresh fails, redirect to login or handle as needed
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

// refresh the access accessToken
async function refreshAccessToken() {
	try {
		const user = JSON.parse(localStorage.getItem('user'));

		const response = await fetchWrapper.post('/refreshToken', {
			refreshToken: localStorage.getItem('refreshToken'),
			email: user.emailAddress,
		});

		const { accessToken, refreshToken } = response.data;

		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('refreshToken', refreshToken);

		return accessToken;
	} catch (error) {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem('accessToken');
		}

		return Promise.reject(error);
	}
}

export default fetchWrapper;