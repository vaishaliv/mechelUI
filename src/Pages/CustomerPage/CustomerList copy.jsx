import React, { useContext, useEffect, useRef, useState } from "react";
import { data } from "./data";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { PiDotsThreeVertical, PiScalesBold } from "react-icons/pi";
import { BiAddToQueue, BiEdit, BiEditAlt } from "react-icons/bi";
import {
  FcAddColumn,
  FcDeleteDatabase,
  FcDeleteRow,
  FcSalesPerformance,
  FcServices,
} from "react-icons/fc";
import { FiDelete } from "react-icons/fi";
import {
  MdCompassCalibration,
  MdDelete,
  MdDeleteForever,
  MdOutlineCompassCalibration,
  MdOutlineUpdate,
} from "react-icons/md";
import { FaSalesforce, FaServicestack } from "react-icons/fa";
import { LuArrowDownWideNarrow } from "react-icons/lu";
import {
  CgAdd,
  CgEditBlackPoint,
  CgEditExposure,
  CgEditFlipH,
  CgEditHighlight,
} from "react-icons/cg";
import _ from "lodash";
import { GrActions, GrUpdate } from "react-icons/gr";
import DatePicker from "react-datepicker";

import { NotificationModal } from "./NotificationModal";
import { CustomerModal } from "./CustomerModal";
import { EditMachineForm } from "./Machine/EditMachineForm";
import {
  AddModalFooter,
  AddCalibrationFooter,
  AddMachineFooter,
  AddServiceFooter,
  DeleteCalibrationFooter,
  DeleteCustomerFoot,
  DeleteMachineFoot,
  DeleteServiceFooter,
  EditCalibrationFooter,
  EditMachineFooter,
  EditModalFoot,
  EditServiceFooter,
} from "./Modal/ModalFooter";
import {
  AddMachineBody,
  AddModalBody,
  AddCalibrationBody,
  // AddMachineBody,
  AddServiceBody,
  DeleteCustomerBody,
  DeleteServiceBody,
  EditCalibrationBody,
  EditMachineBody,
  EditModalBody,
  EditServiceBody,
} from "./Modal/ModalBody";
import {
  AddModalHeader,
  AddCalibrationHeader,
  AddNewMachineHeader,
  AddNewServiceHeader,
  DeleteCalibrationHeader,
  DeleteCustomerHeader,
  DeleteMachineHeader,
  DeleteServiceHeader,
  EditCalibrationHeader,
  EditMachineHeader,
  EditModalHeader,
  EditServiceHeader,
} from "./Modal/ModalHeader";
import MainTable from "./MainTable";
import { FormComp } from "./FormComp";
import AddNewCustomer from "./MainInitial/AddNewCustomer";
import EditInitialBody from "./MainInitial/EditInitialBody";
import EditNewCustomer from "./MainInitial/EditNewCustomer";
import CustomerHeader from "./CustomerHeader";
import CustomerContext from "../../Contexts/CustomerContext";

const CustomerList = () => {
  const {
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
  } = useContext(CustomerContext);
  // const [pageData, setPageData] = useState(data);

  // const [toggleMainRow, setToggleRow] = useState(false);
  // const [machineFlag, setMachineFlag] = useState(false);
  // const [serviceFlag, setServiceFlag] = useState(false);
  // const [calibrationFlag, setCalibrationFlag] = useState(false);

  // const [selectedCustomer, setSelectedCustomer] = useState({});
  // const [selectedMachine, setSelectedMachine] = useState({});
  // const [selectedService, setSelectedService] = useState({});
  // const [selectedCalibration, setSelectedCalibration] = useState({});

  // const [addNewMachineFlag, setAddNewMachineFlag] = useState(false);
  // const [addNewServiceFlag, setAddNewServiceFlag] = useState(false);
  // const [addNewCalibrationFlag, setAddNewCalibrationFlag] = useState(false);
  //--------------------------------------------------------------------
  // const [newMachine, setNewMachine] = useState({});
  // const [editMachineFlag, setEditMachineFlag] = useState(false);
  // const [editedMachine, setEditedMachine] = useState({});

  // const [newService, setNewService] = useState({});
  // const [editServiceFlag, setEditServiceFlag] = useState(false);
  // const [editedService, setEditedService] = useState({});

  // const [newCalibration, setNewCalibration] = useState({});
  // const [editCalibrationFlag, setEditCalibrationFlag] = useState(false);
  // const [editedCalibration, setEditedCalibration] = useState({});
  //--------------------------------------------------------------------

  // const [addNewFlag, setAddNewFlag] = useState(false);
  // const [newCustomer, setNewCustomer] = useState({});
  // const [editCustomerFlag, setEditCustomerFlag] = useState(false);
  // const [editedCustomer, setEditedCustomer] = useState({});

  // const [deleteCustomerFlag, setDeleteCustomerFlag] = useState(false);
  // const [deletedCustomer, setDeletedCustomer] = useState({});
  //--------------------------------------------------------------------

  // const [deletedMachineFlag, setDeletedMachineFlag] = useState(false);
  // const [deletedMachine, setDeletedMachine] = useState({});

  // const [deletedServiceFlag, setDeletedServiceFlag] = useState(false);
  // const [deletedService, setDeletedService] = useState({});

  // const [deletedCalibrationFlag, setDeletedCalibrationFlag] = useState(false);
  // const [deletedCalibration, setDeletedCalibration] = useState({});
  //--------------------------------------------------------------------

  // const copiedArray = _.cloneDeep(pageData);
  // const machineDetails = [...copiedArray, copiedArray.sales_machineDetails];
  // const serviceDetails = [...copiedArray, copiedArray.service_contract_details];
  // const calibrationDetails = [
  //   ...copiedArray,
  //   copiedArray.calibration_contract_details,
  // ];
  // const [machineDetailsData, setMachineDetailsData] = useState(machineDetails);
  // const [serviceDetailsData, setServiceDetailsData] = useState(serviceDetails);
  // const [calibrationDetailsData, setCalibrationDetailsData] =
  //   useState(calibrationDetails);

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

  const handleEditMachineClose = () => {
    setEditMachineFlag(false);
    set;
  };
  const handleAddModalClose = () => setAddNewFlag(false);
  const handleEditModalClose = () => setEditCustomerFlag(false);
  const handleAddNewMachineSaleClose = () => setAddNewMachineFlag(false);

  const handleAddNewServiceClose = () => setAddNewServiceFlag(false);
  const handleAddNewCalibrationClose = () => setAddNewCalibrationFlag(false);

  const handleEditMachineSaleClose = () => setEditMachineFlag(false);

  const handleEditServiceClose = () => setEditServiceFlag(false);

  const handleEditCalibrationClose = () => setEditCalibrationFlag(false);

  const handleDeleteCustomerClose = () => setDeleteCustomerFlag(false);

  const handleDeleteMachineClose = () => setDeletedMachineFlag(false);

  const handleDeleteServiceClose = () => setDeletedServiceFlag(false);

  const handleDeleteCalibrationClose = () => setDeletedCalibrationFlag(false);

  const DeleteCalibrationBody = () => (
    <div>
      <h5 className="text-info">{deletedCalibration.name}</h5>
      <h6>Do you want to delete this record? Please confirm!</h6>
    </div>
  );

  if (addNewFlag)
    return (
      <AddNewCustomer
        modalShow={addNewFlag}
        handleClose={handleAddModalClose}
      />
    );
  if (editCustomerFlag)
    return (
      <EditNewCustomer
        customerData={selectedCustomer}
        handleClose={handleEditModalClose}
        data={selectedCustomer}
      />
    );
  return (
    <>
      {addNewMachineFlag && (
        <CustomerModal
          modalShow={addNewMachineFlag}
          handleClose={handleAddNewMachineSaleClose}
          header={<AddNewMachineHeader />}
          body={
            <AddMachineBody
              handleClose={handleAddNewMachineSaleClose}
              newMachine={newMachine}
              setNewMachine={setNewMachine}
              selectedCustomer={selectedCustomer}
              pageData={pageData}
              setPageData={setPageData}
            />
          }
          footer={<AddMachineFooter />}
          position="centered"
        />
      )}
      {editMachineFlag && (
        <CustomerModal
          modalShow={editMachineFlag}
          handleClose={handleEditMachineSaleClose}
          header={<EditMachineHeader />}
          body={
            <EditMachineBody
              editedMachine={editedMachine}
              setEditedMachine={setEditedMachine}
              handleClose={handleEditMachineSaleClose}
            />
          }
          footer={<EditMachineFooter />}
          data={selectedMachine}
          position="centered"
          customClass="w-80"
        />
      )}
      {addNewServiceFlag && (
        <CustomerModal
          modalShow={addNewServiceFlag}
          handleClose={handleAddNewServiceClose}
          header={<AddNewServiceHeader />}
          body={
            <AddServiceBody
              handleClose={handleAddNewServiceClose}
              newService={newService}
              setNewService={setNewService}
              selectedCustomer={selectedCustomer}
              pageData={pageData}
              setPageData={setPageData}
            />
          }
          footer={<AddServiceFooter />}
          data={selectedService}
          position="centered"
        />
      )}
      {editServiceFlag && (
        <CustomerModal
          modalShow={editServiceFlag}
          handleClose={handleEditServiceClose}
          header={<EditServiceHeader />}
          body={
            <EditServiceBody
              setEditedService={setEditedService}
              editedService={editedService}
              handleClose={handleEditServiceClose}
            />
          }
          data={editedService}
        />
      )}
      {editCalibrationFlag && (
        <CustomerModal
          modalShow={editCalibrationFlag}
          handleClose={handleEditCalibrationClose}
          header={<EditCalibrationHeader />}
          body={
            <EditCalibrationBody
              setEditedCalibration={setEditedCalibration}
              editedCalibration={editedCalibration}
              handleClose={handleEditCalibrationClose}
            />
          }
          data={editedCalibration}
        />
      )}

      {addNewCalibrationFlag && (
        <CustomerModal
          modalShow={addNewCalibrationFlag}
          handleClose={handleAddNewCalibrationClose}
          header={<AddCalibrationHeader />}
          body={
            <AddCalibrationBody
              handleClose={handleAddNewCalibrationClose}
              newCalibration={newCalibration}
              setNewCalibration={setNewCalibration}
              selectedCustomer={selectedCustomer}
              pageData={pageData}
              setPageData={setPageData}
            />
          }
          footer={<AddCalibrationFooter />}
        />
      )}
      {deleteCustomerFlag && (
        <NotificationModal
          modalShow={deleteCustomerFlag}
          handleClose={handleDeleteCustomerClose}
          header={<DeleteCustomerHeader />}
          body={<DeleteCustomerBody deletedCustomer={deletedCustomer} />}
          footer={
            <DeleteCustomerFoot
              handleDeleteCustomerClose={handleDeleteCustomerClose}
            />
          }
          // data={deletedCustomer}
        />
      )}
      {deletedMachineFlag && (
        <NotificationModal
          modalShow={deletedMachineFlag}
          handleClose={handleDeleteMachineClose}
          header={<DeleteMachineHeader />}
          body={<DeleteMachineHeader deletedMachine={deletedMachine} />}
          footer={
            <DeleteMachineFoot
              handleDeleteMachineClose={handleDeleteMachineClose}
            />
          }
          // data={deletedMachine}
        />
      )}
      {deletedServiceFlag && (
        <NotificationModal
          modalShow={deletedServiceFlag}
          handleClose={handleDeleteServiceClose}
          header={<DeleteServiceHeader />}
          body={<DeleteServiceBody deletedService={deletedService} />}
          footer={
            <DeleteServiceFooter
              handleDeleteMachineClose={handleDeleteMachineClose}
            />
          }
          // data={deletedService}
        />
      )}
      {deletedCalibrationFlag && (
        <NotificationModal
          modalShow={deletedCalibrationFlag}
          handleClose={handleDeleteCalibrationClose}
          header={<DeleteCalibrationHeader />}
          body={
            <DeleteCalibrationBody deletedCalibration={deletedCalibration} />
          }
          footer={
            <DeleteCalibrationFooter
              handleDeleteMachineClose={handleDeleteMachineClose}
            />
          }
          // data={deletedCalibration}
        />
      )}
      <Container style={{ color: "aliceblue" }}>
        <>
          {/* <div className="mb-1">
            <Button onClick={() => setAddNewFlag((prev) => !prev)}>
              <BiAddToQueue /> Add New
            </Button>
          </div> */}
          <CustomerHeader
            setAddNewFlag={setAddNewFlag}
            pageData={pageData}
            setPageData={setPageData}
          />
          <MainTable
            newMachine={newMachine}
            pageData={pageData}
            setPageData={setPageData}
            machineDetailsData={machineDetailsData}
            serviceDetailsData={serviceDetailsData}
            calibrationDetailsData={calibrationDetailsData}
            editedMachine={editedMachine}
            editedService={editedService}
            editedCalibration={editedCalibration}
            setSelectedCustomer={setSelectedCustomer}
            setToggleRow={setToggleRow}
            setEditCustomerFlag={setEditCustomerFlag}
            setDeleteCustomerFlag={setDeleteCustomerFlag}
            setDeletedCustomer={setDeletedCustomer}
            selectedCustomer={selectedCustomer}
            toggleMainRow={toggleMainRow}
            setAddNewMachineFlag={setAddNewMachineFlag}
            setEditedMachine={setEditedMachine}
            setEditMachineFlag={setEditMachineFlag}
            setDeletedMachine={setDeletedMachine}
            setDeletedMachineFlag={setDeletedMachineFlag}
            machineFlag={machineFlag}
            selectedMachine={selectedMachine}
            setAddNewServiceFlag={setAddNewServiceFlag}
            setEditedService={setEditedService}
            setEditServiceFlag={setEditServiceFlag}
            setDeletedService={setDeletedService}
            setDeletedServiceFlag={setDeletedServiceFlag}
            setSelectedService={setSelectedService}
            setServiceFlag={setServiceFlag}
            setAddNewCalibrationFlag={setAddNewCalibrationFlag}
            setEditedCalibration={setEditedCalibration}
            setEditCalibrationFlag={setEditCalibrationFlag}
            setDeletedCalibration={setDeletedCalibration}
            setDeletedCalibrationFlag={setDeletedCalibrationFlag}
            setSelectedCalibration={setSelectedCalibration}
            setCalibrationFlag={setCalibrationFlag}
            selectedCalibration={selectedCalibration}
            setSelectedMachine={setSelectedMachine}
            setMachineFlag={setMachineFlag}
            serviceFlag={serviceFlag}
            selectedService={selectedService}
            calibrationFlag={calibrationFlag}
          />
        </>
      </Container>
    </>
  );
};

export default CustomerList;
