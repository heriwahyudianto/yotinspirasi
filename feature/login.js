import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import styles from '../style';

function Login({navigation}) {
  const [userName, setUserName] = React.useState('JeanJTowne@dayrep.com');
  const [password, setPassword] = React.useState('I2CYzMrNcH(oZ6afsU1ghbdY');

  const loginAct = () => {
      console.log(userName, password)
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <>
          <View>
            <Text
              style={[
                styles.ml10,
                styles.mr10,
                styles.sectionTitle,
                styles.mt10,
              ]}>
              Login
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={(userName) => setUserName(userName)}
              defaultValue="JeanJTowne@dayrep.com"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              defaultValue="I2CYzMrNcH(oZ6afsU1ghbdY"
              secureTextEntry={true}
            />
            <View style={[styles.ml10, styles.mt10, styles.mr10]}>
              <Button
                onPress={() => loginAct()}
                title="Login"
                accessibilityLabel="Login"
              />
            </View>
          </View>
        </>
      </SafeAreaView>
    </>
  );
}

export default Login;
