import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '../../services/navigations';
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
	const [page, setPage] = useState(1);
	const [refresh, setRefresh] = useState(false);
	const user = navigation.getParam('item');

	// Cria função para chamada API
	const fetchAPI = async pg => {
		setLoading(true);
		const response = await api.get(`/users/${user.login}/starred`, {
			params: { pg },
		});
		console.tron.log('TCL: fetchAPI -> pg', pg);
		console.tron.log('TCL: fetchAPI -> response', response);
		setStars(pg >= 2 ? [...stars, ...response.data] : response.data);

		setLoading(false);
		setRefresh(false);
	};
	useEffect(() => {
		fetchAPI(page);
	}, [page]);

	const refreshList = () => {
		setRefresh(true);
		setStars([]);
	};
	const loadMore = () => {
		const nextPage = page + 1;

		fetchAPI(nextPage);
	};
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
					onEndReachedThreshold={0.1}
					onEndReached={() => loadMore()}
					// onRefresh={() => refreshList()}
					// refreshing={refresh}
					data={stars}
					keyExtractor={star => String(star.id)}
					renderItem={({ item }) => (
						<Starred onPress={() => navigate('Repository', { item })}>
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
