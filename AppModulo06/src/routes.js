import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

// O createAppContainer() não nos dá nenhuma funcionalidade de rota
// Retorna o container de onde estão as rotas
// O createSwitchNavigator() não cria nenhum feedback visual,
// apenas para conseguirmos redirecionar via código
const Routes = createAppContainer(
	createSwitchNavigator({
		Main,
		User,
	})
);

export default Routes;
