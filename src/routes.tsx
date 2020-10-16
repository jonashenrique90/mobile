import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import  Header from './components/Header';

const Routes = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
				<Screen 
				name="OrphanagesMap"
				component={OrphanagesMap}>
				</Screen>

				<Screen 
				name="OrphanageDetails" 
				options={{
					headerShown: true,
					header: () => <Header showCancel={false} title="Orfanato" />
				}} 
				component={OrphanageDetails}>
				</Screen>

				<Screen 
				name="SelectMapPosition"
				options={{
					headerShown: true,
					header: () => <Header title="Selecione no mapa" />
				}} 
				component={SelectMapPosition}>
				</Screen>

				<Screen 
				name="OrphanageData"
				options={{
					headerShown: true,
					header: () => <Header title="Informe os dados" />
				}}  
				component={OrphanageData}>

				</Screen>
			</Navigator>
		</NavigationContainer>
	)
}

export default Routes;
