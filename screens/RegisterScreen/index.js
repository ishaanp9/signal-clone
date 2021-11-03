import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import styles from './styles';
import {auth} from '../../firebase';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Create a Signal Account</Text>
      <Input
        placeholder="Full Name"
        autoFocus
        type="text"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        placeholder="Profile Picture URL (optional)"
        type="text"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
        onSubmitEditing={register}
      />
      <Button
        containerStyle={styles.button}
        raised
        title="Sign up"
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
