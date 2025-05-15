import { Text, View, StyleSheet } from 'react-native';

function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Made by @starrykss</Text>
    </View>
  );
}

export default Copyright;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  text: {
    color: 'white',
    fontWeight: 400,
    opacity: 0.5,
  },
});
