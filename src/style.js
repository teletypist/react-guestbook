import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Applied to
  root: {
      maxWidth: '650px',
      margin: '1rem auto',
      boxSizing: 'border-box',
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5rem',
      background: 'Linen',
      width: '100%',
  },
  entrylist: {
      background: 'LightCyan',
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
  },
});
