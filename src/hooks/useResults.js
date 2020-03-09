import yelp from "../api/yelp";
import React, { useState, useEffect } from "react";

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErr] = useState("");

  const searchApi = async searchTerm => {
    console.log("search");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (errMessage) {
      console.log(errMessage);
      setErr("Something went wrong");
    }
  };
  //initial once only
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errMessage];
};
