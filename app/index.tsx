import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.redBox} />
        <View style={styles.redBox} />
      </View>

      <View style={styles.middle}>
        <View style={styles.row}>
          <View style={styles.greenBox} />
          <View style={styles.greenBox} />
          <View style={styles.greenBox} />
        </View>

        <View style={styles.row}>
          <View style={styles.greenBox} />
          <View style={styles.greenBox} />
          <View style={styles.greenBox} />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.cornerGreen} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 3,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },

  middle: {
    flex: 5,
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },

  bottom: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  cornerGreen: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
  },
});