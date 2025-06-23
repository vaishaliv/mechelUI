import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  return <ServiceContext.Provider>{children}</ServiceContext.Provider>;
};

export default ServiceContext;
