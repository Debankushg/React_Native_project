import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    const data = { name, email };
    if (data.email === "" && data.name === "") {
      alert(`Please Fill your Name and Email`);
    } else {
      // alert(`Form Submitted!\nName: ${name}\nEmail: ${email}`);
      // Navigate to the Home screen or perform any other action
      navigation.navigate("Home", { email, name });
    }
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic or navigate to the forgot password screen
    // For simplicity, we'll just display an alert in this example
    alert("Forgot Password?");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Submit Button */}
      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmit}
        underlayColor="#3498db"
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>

      {/* Register Button */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}
      >
        <Text style={{ fontSize: 18, color: "gray" }}>
          Don't have an account?
        </Text>
        <TouchableHighlight
          style={styles.linkButton}
          onPress={handleRegister}
          underlayColor="transparent"
        >
          <Text style={styles.linkButtonText}>Register</Text>
        </TouchableHighlight>
      </View>

      {/* Forgot Password Button */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "gray" }}>
          Forgot your password?
        </Text>
        <TouchableHighlight
          style={styles.linkButton}
          onPress={handleForgotPassword}
          underlayColor="transparent"
        >
          <Text style={styles.linkButtonText}>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#a2e8b5",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding:10,
    width: "80%",
    borderRadius:8,
    textAlign:"center"
  },
  button: {
    backgroundColor: "#2980b9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  linkButton: {
    backgroundColor: "transparent",
    paddingVertical: 2,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 2,
  },
  linkButtonText: {
    color: "#3498db",
    fontSize: 18,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Login;
