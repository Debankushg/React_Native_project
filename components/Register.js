import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    const data = { name, email, address, phoneNo };
    console.log(data);
    if (data) {
      alert(
        `Form Submitted!\nName: ${name}\nEmail: ${email}\nAddress:${address}\nPhone-No:${phoneNo}`
      );
      // Navigate to the Home screen or perform any other action
      navigation.navigate("Login");
    } else {
      alert(`Please Fill Required Fields`);
    }
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
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        keyboardType="address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone No"
        value={phoneNo}
        onChangeText={(text) => setPhoneNo(text)}
        keyboardType="Phone No"
      />

      {/* Submit Button */}
      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmit}
        underlayColor="#3498db"
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
    padding: 8,
    width: "100%",
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

export default Register;
