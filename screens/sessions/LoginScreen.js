import React from 'react'
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper'
import styles from './styles' ;
const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <View style = {styles.authFormContainer}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Email"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      <View style = {styles.errorMsg}>
        {errors.email && <Text>You must fill in your email</Text>}
      </View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style = {styles.formInput}
            label="Password"
            mode="outlined"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      <View>
        {errors.password && <Text>You must fill in your password</Text>}
      </View>
      <View>
        <Button
          style = {styles.submitButton}
          mode="contained"
          compact={false}
          onPress={handleSubmit(onSubmit)}
          icon="account-arrow-right"
        >
          Sign in
        </Button>
      </View>
    </View>
  )
};
export default LoginScreen;