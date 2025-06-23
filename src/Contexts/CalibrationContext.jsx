import React, { createContext, useEffect, useState } from "react";

const CalibrationContext = createContext();

export const CalibrationProvider = ({ children }) => {
  return <CalibrationContext.Provider>{children}</CalibrationContext.Provider>;
};

export default CalibrationContext;
