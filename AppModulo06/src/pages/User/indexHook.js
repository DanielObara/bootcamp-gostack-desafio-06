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
	async function fetchAPI() {
		setLoading(true);
		try {
			console.log('TCL: fetchAPI -> pg', page);
			const response = await api.get(`/users/${user.login}/starred`, {
				params: { page },
			});
			console.log('TCL: fetchAPI -> response', response.data);
			if (page >= 2) {
				await setStars([...stars, ...response.data]);
			} else {
				await setStars([...response.data]);
			}

			console.log('TCL: fetchAPI -> stars', stars);
			setLoading(false);
			setRefresh(false);
		} catch (error) {
			console.log('erro ao buscar dados', error);
		}
	}

	// useEffect(() => {
	// 	console.log('effect 1');

	// 	fetchAPI();
	// }, []);

	useEffect(() => {
		console.log('effect');
		fetchAPI(page);
		console.log('stars effect', stars);
	}, [page]);

	const loadMore = () => {
		const nextPage = page + 1;
		setPage(nextPage);
		// fetchAPI(nextPage);
	};
	const refreshList = () => {
		setRefresh(true);
		setStars([]);
		console.log('passou do set stars');
		fetchAPI();
		console.log('passou do fetchAPI');
	};

	return (
		<Container>
			<Header>
				<Avatar source={{ uri: user.avatar }} />
				<Name>{user.name}</Name>
				<Bio>{user.bio}</Bio>
			</Header>
			{loading ? (
				<Loading />
			) : (
				<Stars
					onEndReachedThreshold={0.2}
					onEndReached={() => loadMore()}
					onRefresh={() => refreshList()}
					refreshing={refresh}
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
	title: navigation.getParam('item').name,
});

User.propTypes = {
	navigation: PropTypes.shape({
		getParam: PropTypes.func,
	}).isRequired,
};
export default User;
