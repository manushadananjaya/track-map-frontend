import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage=""
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => console.log(email, password)}
      />
      <NavLink
        text="Don't have an account? Sign up instead!"
        routeName="Signup"
      />
    </View>

  );
  
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 15,
  },
  link: {
    color: 'blue',
  },
});

export default SigninScreen;
