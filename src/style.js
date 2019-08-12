import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Applied to
  root: {
      boxSizing: 'border-box',
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5rem',
      backgroundColor: '#FAF0E6',
      width: '100%',
  },
  entrylist: {
      backgroundColor: '#F5DEB3',
      width: '100%',
      padding: '0.5rem',
  },
  input: {
      marginBottom: '0.5rem',
  },
  textarea: {
      alignSelf: 'stretch',
      marginBottom: '0.5rem',
  },
  button: {
      alignSelf: 'flex-end',
      marginBottom: '0.5rem',
      backgroundColor: '#ff0000',
      width: '8rem',
  },
});

export default styles;
