import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const OrphanageDetails = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.textDetails}> Olá Orfãos, bom dia!!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textDetails: {
		color: '#000',
	},
});

export default OrphanageDetails;