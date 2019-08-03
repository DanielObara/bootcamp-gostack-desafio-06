import React from 'react';
import { StatusBar } from 'react-native';

import { setNavigator } from './services/navigations';
import './config/ReactotronConfig';

import Routes from './routes';

const App = () => {
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#15DC6E" />

			<Routes ref={setNavigator} />
		</>
	);
};

export default App;
