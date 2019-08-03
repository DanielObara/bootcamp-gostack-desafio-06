import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
	Container,
	Header,
	Avatar,
	Name,
	Bio,
	Stars,
	Starred,
	OwnerAvatar,
	Info,
	Title,
	Author,
	Loading,
} from './styles';

function User({ navigation }) {
	const [stars, setStars] = useState([]);
	const [loading, setLoading] = useState(false);
	const user = navigation.getParam('item');

	useEffect(() => {
		const fetchAPI = async () => {
			setLoading(true);
			const response = await api.get(`/users/${user.login}/starred`);
			setStars([...stars, ...response.data]);
			setLoading(false);
		};
		fetchAPI();
	}, []);

	return (
		<Container>
			<Header>
				<Avatar source={{ uri: user.avatar }} />
				<Name>{user.nome}</Name>
				<Bio>{user.bio}</Bio>
			</Header>
			{loading ? (
				<Loading />
			) : (
				<Stars
					data={stars}
					keyExtractor={star => String(star.id)}
					renderItem={({ item }) => (
						<Starred>
							<OwnerAvatar source={{ uri: item.owner.avatar_url }} />
							<Info>
								<Title>{item.name}</Title>
								<Author>{item.owner.login}</Author>
							</Info>
						</Starred>
					)}
				/>
			)}
		</Container>
	);
}

User.navigationOptions = ({ navigation }) => ({
	title: navigation.getParam('item').nome,
});

User.propTypes = {
	navigation: PropTypes.shape({
		getParam: PropTypes.func,
	}).isRequired,
};
export default User;
