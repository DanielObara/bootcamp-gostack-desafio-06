import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

export default function User(props) {
	// const [stars, setStars] = useState([]);
	// const user = navigation.getParam('item');
	// console.tron.log('TCL: User -> user', user);
	console.tron.log(props.navigation.getParam('item'));

	// useEffect(() => {
	// 	const fetchAPI = async () => {
	// 		const response = await api.get(`/users/${user.login}/starred`);
	// 		setStars(response.data);
	// 	};
	// 	fetchAPI();
	// }, []);
	return <View />;
}

// User.navigationOptions = ({ navigation }) => ({
// 	title: navigation.getParam('item').name,
// });

// User.propTypes = {
// 	navigation: PropTypes.shape({
// 		getParam: PropTypes.func,
// 	}).isRequired,
// };
// export default User;
