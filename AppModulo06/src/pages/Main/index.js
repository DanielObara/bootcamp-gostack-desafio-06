import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';
import api from '../../services/api';

export default function Main() {
	const [newUser, setUserName] = useState();
	const [users, setNewUser] = useState([]);

	const fetchMyAPI = useCallback(async () => {
		const res = await api.get(`/users/${newUser}`);
		console.log('TCL: fetchMyAPI -> res', res);
		console.log('Usuarios no array', users);
		const data = {
			nome: res.data.name,
			login: res.data.login,
			bio: res.data.bio,
			avatar: res.data.avatar_url,
		};
		setNewUser([...users, data]);
		setUserName('');
		return res;
	});

	return (
		<Container>
			<Form>
				<Input
					autoCorrect={false}
					autoCapitalize="none"
					placeholder="Adicionar usuário"
					value={newUser}
					onChangeText={text => setUserName(text)}
				/>
				<SubmitButton onPress={() => fetchMyAPI()}>
					<Icon name="add" size={20} color="#fff" />
				</SubmitButton>
			</Form>
		</Container>
	);
}

Main.navigationOptions = {
	title: 'Usuários',
};
