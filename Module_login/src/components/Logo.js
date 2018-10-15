import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class Logo extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={{ width: 150, height: 220 }}
					source={require('../images/logo_b&w.png')} />
				<Text style={styles.logoText}>U Q M S</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	logoText: {
		marginVertical: 15,
		fontSize: 24,
		fontWeight: 'bold',
		color: 'rgba(255, 255, 255, 1)'
	}
});