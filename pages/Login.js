import React, {Component} from 'react';
import {
	StyleSheet, 
	Text, 
	View,
	Image,
	TextInput,
	ScrollView,
	Button,
	StatusBar,
	TouchableOpacity,
	TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from './Home';

class Login extends Component {

	constructor() {
	    super();
	    this.state = {
	      lang: 'English',
	      email: 'Telepon atau Email',
	      password: 'Kata Sandi',
	      login: 'Masuk',
	      forgotPassword: 'LUPA KATA SANDI?',
	      or: 'ATAU',
	      createAccount: 'BUAT AKUN FACEBOOK BARU',
	    }
	}

	 englishLang = () => {
      this.setState({ 
          lang: 'Indonesia',
       	  email: 'Telephone or Email',
	      password: 'Password',
	      login: 'Login',
	      forgotPassword: 'Forgot Password?',
	      or: 'OR',
	      createAccount: 'Create a New Account'
      })
    }

	login = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Home'
            }
        })
    }

	render() {
		return (
			<ScrollView>
			<StatusBar barStyle = "dark-content" backgroundColor = "#30477C" translucent = {true}/>
			<View style={styles.container}>
				<View style={styles.banner}>
					<Image style={styles.bannerImg} source={require('../src/img/banner.png')} />
				</View>
				<View style={styles.content}>
					<View style={styles.lang}>
					<TouchableOpacity>
						<Text onPress={this.englishLang}>{this.state.lang} •</Text>
					</TouchableOpacity>
						<Text>Bahasa Malaysia • </Text>
						<TouchableHighlight>
				                <TouchableHighlight
							          onPress={() => {
							            this.setModalVisible(true);
							          }}>
							          <Text>Lainnya</Text>
							     </TouchableHighlight>
				        </TouchableHighlight>
					</View>
					<View style={styles.textInput}>
						<TextInput style={styles.formInput} placeholder={this.state.email} />
						<TextInput style={styles.formInput} placeholder={this.state.password} secureTextEntry={true} />
					</View>
					<View style={styles.loginButton}>
						<Button title={this.state.login} color="#4E68A2" onPress={() => this.login()}/>
					</View>
					<Text style={styles.textForgot}>{this.state.forgotPassword}</Text>
				</View>
				<View style={styles.orTextContainer}>
					<View style={styles.orTextLine}></View>
					<Text style={styles.orText}>{this.state.or}</Text>
					<View style={styles.orTextLine}></View>
				</View>
				<View style={styles.signOutButton}>
						<Button style={styles.buttonSignOut} title={this.state.createAccount} color="#07A007"/>
				</View>
		    </View>
		    </ScrollView>
		)
	}
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        flex: 1.7
    },
    content: {
        flex: 3,
        marginHorizontal: 20
    },
    bannerImg: {
        height: 184,
        width: "100%"
    },
    lang: {
        paddingTop: 10,
        color: "#707276",
        fontSize: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },
    textInput: {
        marginTop: 20
    },
    formInput: {
        height: 40,
        borderBottomColor: "#ECEAEC",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    loginButton: {
        marginTop: 10
    },
    textForgot: {
        marginTop: 20,
        textAlign: "center"
    },
    signOutButton: {
        marginTop: 25,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    orTextContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    orTextLine: {
        width: "45%",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    orText: {
        width: "10%",
        paddingLeft: 2,
        marginBottom: -6
    }
})