// src/context/DataContext.js

"use client";

import React, { createContext, useContext } from "react";
import {
  featuredDoctors,
  latestPosts,
  usersOpinions,
  faqs,
  clinics,
  specialties,
  cities,
} from "../data/appData";

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const value = {
    featuredDoctors,
    latestPosts,
    usersOpinions,
    faqs,
    clinics,
    specialties,
    cities,
    // You can also add state here, like for a logged-in user
    // user: null,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Create a custom hook to use the data
export const useData = () => {
  return useContext(DataContext);
};
