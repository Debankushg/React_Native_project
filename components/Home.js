import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";

const Home = (props) => {
  data = [
    {
      id: "1",
      name: "Ram",
    },
    {
      id: "2",
      name: "Sam",
    },
    {
      id: "3",
      name: "Jack",
    },
    {
      id: "4",
      name: "Tony",
    },
    {
      id: "5",
      name: "Amit",
    },
    {
      id: "6",
      name: "Amrita",
    },
    {
      id: "7",
      name: "Sonam",
    },
    {
      id: "8",
      name: "Rohan",
    },
    {
      id: "9",
      name: "Bunty",
    },
    {
      id: "10",
      name: "Anil",
    },
    {
      id: "11",
      name: "Koni",
    },
    {
      id: "12",
      name: "Puja",
    },
  ];


  const { name, email } = props.route.params;

  return (
    <View style={{ marginBottom: 70, backgroundColor: "#3b82f680" }}>
      <Text
        style={{
          fontSize: 30,
          padding: 10,
          textAlign: "center",
          color: "#3b0049",
        }}
      >
        Welcome To the List Component
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 20,
    color: "#fff",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    backgroundColor: "#072711",
    borderRadius: 10,
  },
});

export default Home;
