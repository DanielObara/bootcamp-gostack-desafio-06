import React, { useState, useCallback, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from '../../services/navigations';
import {
	Container,
	Form,
	Input,
	SubmitButton,
	List,
	User,
	Avatar,
	Name,
	Bio,
	ProfileButton,
	ProfileButtonText,
} from './styles';
import api from '../../services/api';

export default function Main() {
	const [newUser, setUserName] = useState();
	const [loading, setLoading] = useState(false);
	const [users, setNewUser] = useState([]);

	const fetchMyAPI = useCallback(async () => {
		setLoading(true);
		const res = await api.get(`/users/${newUser}`);

		const data = {
			nome: res.data.name,
			login: res.data.login,
			bio: res.data.bio,
			avatar: res.data.avatar_url,
		};
		setNewUser([...users, data]);
		setUserName('');
		setLoading(false);
		Keyboard.dismiss();
		return res;
	});

	useEffect(() => {
		const fetchStore = async () => {
			const store = await AsyncStorage.getItem('users');
			if (store) setNewUser(JSON.parse(store));
		};
		fetchStore();
	}, []);

	useEffect(() => {
		AsyncStorage.setItem('users', JSON.stringify(users));
	}, [users]);

	return (
		<Container>
			<Form>
				<Input
					autoCorrect={false}
					autoCapitalize="none"
					placeholder="Adicionar usuário"
					value={newUser}
					returnKeyType="send"
					onChangeText={text => setUserName(text)}
					onSubmitEditing={() => fetchMyAPI()}
				/>
				<SubmitButton loading={loading} onPress={() => fetchMyAPI()}>
					{loading ? (
						<ActivityIndicator color="#fff" />
					) : (
						<Icon name="add" size={20} color="#fff" />
					)}
				</SubmitButton>
			</Form>

			<List
				data={users}
				keyExtractor={user => user.login}
				renderItem={({ item }) => (
					<User>
						<Avatar source={{ uri: item.avatar }} />
						<Name>{item.nome}</Name>
						<Bio>{item.bio}</Bio>

						<ProfileButton onPress={() => navigate('User', { item })}>
							<ProfileButtonText>Ver perfil</ProfileButtonText>
						</ProfileButton>
					</User>
				)}
			/>
		</Container>
	);
}

Main.navigationOptions = {
	title: 'Usuários',
};
