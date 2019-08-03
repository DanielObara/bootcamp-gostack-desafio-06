import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

// O createAppContainer() não nos dá nenhuma funcionalidade de rota
// Retorna o container de onde estão as rotas
// O createSwitchNavigator() não cria nenhum feedback visual,
// apenas para conseguirmos redirecionar via código
const Routes = createAppContainer(
	createStackNavigator(
		{
			Main,
			User,
			Repository,
		},
		{
			headerLayoutPreset: 'center',
			headerBackTitleVisible: false,
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: '#15DC6E',
				},
				headerTintColor: '#FFF',
			},
		}
	)
);

export default Routes;
