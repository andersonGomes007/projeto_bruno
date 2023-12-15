import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginForm: {
    width: '50%',
    alignItems: 'center',
  },
  loginInput: {
    padding: 15,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  loginButton: {
    padding: 10,
    width: 100,
    backgroundColor: 'blue',
    color: '#f3f3f3',
    borderRadius: 10,
    textAlign: 'center',
  },
});
export { styles };
