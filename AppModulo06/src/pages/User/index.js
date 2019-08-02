import React from 'react';
import { View } from 'react-native';
// import { Container } from './styles';

export default function User({ navigation }) {
	console.tron.log(navigation.getParam('item'));

	return <View />;
}
// export default User;
// User.navigationOptions = ({ navigation }) => ({
// 	title: navigation.getParam('item').name,
// });
