import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = async () => {
  const [key, setKey] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: { key },
        location: "san jose"
      }
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={key} onTermChange={setKey} onTermSubmit={searchApi} />
      <Text>We have found results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
