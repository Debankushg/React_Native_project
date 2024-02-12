import React, { useState, useEffect } from "react";
import { Text, FlatList, StyleSheet, View, Image } from "react-native";
const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data?.products, "Data");

  return (
    <View>
      <FlatList
        data={data?.products}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.rating}>Rating: {item.rating}</Text>
              <Text style={styles.stock}>In stock: {item.stock}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure item.id is a string
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  thumbnail: {
    width: "100%",
    height: 175,
    resizeMode: "cover",
  },
  content: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: "#ffc107",
    marginBottom: 10,
  },
  stock: {
    fontSize: 14,
    color: "#28a745",
  },
});

export default About;
