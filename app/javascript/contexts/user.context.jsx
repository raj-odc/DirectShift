import React, { useState, useEffect, createContext } from 'react';

import {getCurrentUser} from '../utils/backend-api'

import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);
    let navigate = useNavigate();


	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = await getCurrentUser();
            console.log("cuser", cuser);
			if (cuser === null) {
				localStorage.setItem('userData', '');
				cuser = '';
			}

			setCurrentUser(cuser);
		};

		checkLoggedIn();
	}, []);

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{children}
		</UserContext.Provider>
	);
};


export default UserContext;