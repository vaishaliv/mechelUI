import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const MachineContext = createContext();

export const MachineProvider = ({ children }) => {
  return <MachineContext.Provider>{children}</MachineContext.Provider>;
};

export default MachineContext;
