import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface IHeaderProps {
	title: string;
	showCancel?: boolean
}

const Header = ({ title, showCancel= true }: IHeaderProps) => {
	const navigation = useNavigation();
	function handleGoBackToHomepage() {
		navigation.navigate('OrphanagesMap');
	}
	return (
		<View style={styles.container}>
			<BorderlessButton onPress={navigation.goBack}>
				<Feather name="arrow-left" size={24} color="#15b6d6">
				</Feather>
			</BorderlessButton>

			<Text style={styles.title}>{title}</Text>

			{ showCancel ? (
				<BorderlessButton onPress={handleGoBackToHomepage}>
					<Feather name="x" size={24} color="#ff669d">
					</Feather>
				</BorderlessButton>
			) : (
				<View></View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		backgroundColor: '#f9fafc',
		borderBottomWidth: 1,
		borderColor: '#dde3f0',
		paddingTop: 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Nunito_600SemiBold',
		color: '#8fa7b3',
		fontSize: 16,
	}
})

export default Header;

