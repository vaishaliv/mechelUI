import React, { createContext, useEffect, useState } from "react";
import { data } from "../Pages/CustomerPage/data";
import _ from "lodash";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [pageData, setPageData] = useState(data);

  const [toggleMainRow, setToggleRow] = useState(false);
  const [machineFlag, setMachineFlag] = useState(false);
  const [serviceFlag, setServiceFlag] = useState(false);
  const [calibrationFlag, setCalibrationFlag] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState({});

  const [addNewFlag, setAddNewFlag] = useState(false);
  const [newCustomer, setNewCustomer] = useState({});
  const [editCustomerFlag, setEditCustomerFlag] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({});

  const [deleteCustomerFlag, setDeleteCustomerFlag] = useState(false);
  const [deletedCustomer, setDeletedCustomer] = useState({});

  const copiedArray = _.cloneDeep(pageData);
  const machineDetails = [...copiedArray, copiedArray.sales_machineDetails];
  const serviceDetails = [...copiedArray, copiedArray.service_contract_details];
  const calibrationDetails = [
    ...copiedArray,
    copiedArray.calibration_contract_details,
  ];

  const [machineDetailsData, setMachineDetailsData] = useState(machineDetails);
  const [serviceDetailsData, setServiceDetailsData] = useState(serviceDetails);
  const [calibrationDetailsData, setCalibrationDetailsData] =
    useState(calibrationDetails);

  const handleDeleteCustomerClose = () => setDeleteCustomerFlag(false);
  const handleAddModalClose = () => setAddNewFlag(false);
  const handleEditModalClose = () => setEditCustomerFlag(false);

  //Machine....
  const [newMachine, setNewMachine] = useState({});
  const [editMachineFlag, setEditMachineFlag] = useState(false);
  const [editedMachine, setEditedMachine] = useState({});
  const [selectedMachine, setSelectedMachine] = useState({});
  const [addNewMachineFlag, setAddNewMachineFlag] = useState(false);
  const [deletedMachineFlag, setDeletedMachineFlag] = useState(false);
  const [deletedMachine, setDeletedMachine] = useState({});
  const handleAddNewMachineSaleClose = () => setAddNewMachineFlag(false);
  const handleEditMachineSaleClose = () => setEditMachineFlag(false);
  const handleDeleteMachineClose = () => setDeletedMachineFlag(false);

  //Service....
  const [newService, setNewService] = useState({});
  const [editServiceFlag, setEditServiceFlag] = useState(false);
  const [editedService, setEditedService] = useState({});
  const [addNewServiceFlag, setAddNewServiceFlag] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [deletedServiceFlag, setDeletedServiceFlag] = useState(false);
  const [deletedService, setDeletedService] = useState({});
  const handleAddNewServiceClose = () => setAddNewServiceFlag(false);
  const handleEditServiceClose = () => setEditServiceFlag(false);
  const handleDeleteServiceClose = () => setDeletedServiceFlag(false);

  //Calibration....
  const [newCalibration, setNewCalibration] = useState({});
  const [editCalibrationFlag, setEditCalibrationFlag] = useState(false);
  const [editedCalibration, setEditedCalibration] = useState({});
  const [selectedCalibration, setSelectedCalibration] = useState({});
  const [addNewCalibrationFlag, setAddNewCalibrationFlag] = useState(false);
  const [deletedCalibrationFlag, setDeletedCalibrationFlag] = useState(false);
  const [deletedCalibration, setDeletedCalibration] = useState({});
  const handleAddNewCalibrationClose = () => setAddNewCalibrationFlag(false);
  const handleEditCalibrationClose = () => setEditCalibrationFlag(false);
  const handleDeleteCalibrationClose = () => setDeletedCalibrationFlag(false);

  useEffect(() => {
    const filteredArray1 = machineDetailsData.filter(
      (item) => item !== undefined
    );
    const filteredArray2 = serviceDetailsData.filter(
      (item) => item !== undefined
    );
    const filteredArray3 = calibrationDetailsData.filter(
      (item) => item !== undefined
    );

    setMachineDetailsData(filteredArray1);
    setServiceDetailsData(filteredArray2);
    setCalibrationDetailsData(filteredArray3);
  }, []);
  return (
    <CustomerContext.Provider
      value={{
        pageData,
        setPageData,
        toggleMainRow,
        setToggleRow,
        machineFlag,
        setMachineFlag,
        serviceFlag,
        setServiceFlag,
        calibrationFlag,
        setCalibrationFlag,
        selectedCustomer,
        setSelectedCustomer,
        addNewFlag,
        setAddNewFlag,
        newCustomer,
        setNewCustomer,
        editCustomerFlag,
        setEditCustomerFlag,
        editedCustomer,
        setEditedCustomer,
        deleteCustomerFlag,
        setDeleteCustomerFlag,
        deletedCustomer,
        setDeletedCustomer,

        //machine...
        newMachine,
        setNewMachine,
        editMachineFlag,
        setEditMachineFlag,
        editedMachine,
        setEditedMachine,
        selectedMachine,
        setSelectedMachine,
        addNewMachineFlag,
        setAddNewMachineFlag,
        deletedMachineFlag,
        setDeletedMachineFlag,
        deletedMachine,
        setDeletedMachine,
        handleAddNewMachineSaleClose,
        handleEditMachineSaleClose,
        handleDeleteMachineClose,

        //service....
        newService,
        setNewService,
        editServiceFlag,
        setEditServiceFlag,
        editedService,
        setEditedService,
        addNewServiceFlag,
        setAddNewServiceFlag,
        selectedService,
        setSelectedService,
        deletedServiceFlag,
        setDeletedServiceFlag,
        deletedService,
        setDeletedService,
        handleAddNewServiceClose,
        handleEditServiceClose,
        handleDeleteServiceClose,

        //calibration....
        newCalibration,
        setNewCalibration,
        editCalibrationFlag,
        setEditCalibrationFlag,
        editedCalibration,
        setEditedCalibration,
        selectedCalibration,
        setSelectedCalibration,
        addNewCalibrationFlag,
        setAddNewCalibrationFlag,

        deletedCalibrationFlag,
        setDeletedCalibrationFlag,
        deletedCalibration,
        setDeletedCalibration,
        handleAddNewCalibrationClose,
        handleEditCalibrationClose,
        handleDeleteCalibrationClose,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;
