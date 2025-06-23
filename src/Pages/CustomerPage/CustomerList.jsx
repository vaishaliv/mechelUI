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
import { GrActions, GrUpdate } from "react-icons/gr";
import DatePicker from "react-datepicker";

import { NotificationModal } from "./NotificationModal";
import { CustomerModal } from "./CustomerModal";
import { EditMachineForm } from "./Machine/EditMachineForm";
import {
  AddCalibrationFooter,
  AddMachineFooter,
  AddServiceFooter,
  DeleteCalibrationFooter,
  DeleteCustomerFoot,
  DeleteMachineFoot,
  DeleteServiceFooter,
  EditMachineFooter,
} from "./Modal/ModalFooter";
import {
  AddMachineBody,
  AddModalBody,
  AddCalibrationBody,
  AddServiceBody,
  DeleteCustomerBody,
  DeleteServiceBody,
  EditCalibrationBody,
  EditMachineBody,
  EditServiceBody,
} from "./Modal/ModalBody";
import {
  AddCalibrationHeader,
  AddNewMachineHeader,
  AddNewServiceHeader,
  DeleteCalibrationHeader,
  DeleteCustomerHeader,
  DeleteMachineHeader,
  DeleteServiceHeader,
  EditCalibrationHeader,
  EditMachineHeader,
  EditServiceHeader,
} from "./Modal/ModalHeader";
import MainTable from "./MainTable";
import AddNewCustomer from "./MainInitial/AddNewCustomer";
import EditNewCustomer from "./MainInitial/EditNewCustomer";
import CustomerHeader from "./CustomerHeader";
import CustomerContext from "../../Contexts/CustomerContext";

const CustomerList = () => {
  const {
    pageData,
    setPageData,

    selectedCustomer,
    addNewFlag,
    setAddNewFlag,

    editCustomerFlag,
    setEditCustomerFlag,

    deleteCustomerFlag,
    setDeleteCustomerFlag,
    deletedCustomer,

    //machine...
    newMachine,
    setNewMachine,
    editMachineFlag,
    editedMachine,
    setEditedMachine,
    selectedMachine,
    addNewMachineFlag,
    deletedMachineFlag,
    deletedMachine,
    handleAddNewMachineSaleClose,
    handleEditMachineSaleClose,
    handleDeleteMachineClose,

    //service....
    newService,
    setNewService,
    editServiceFlag,
    editedService,
    setEditedService,
    addNewServiceFlag,
    selectedService,
    deletedServiceFlag,
    deletedService,
    handleAddNewServiceClose,
    handleEditServiceClose,
    handleDeleteServiceClose,

    //calibration....
    newCalibration,
    setNewCalibration,
    editCalibrationFlag,
    editedCalibration,
    setEditedCalibration,
    addNewCalibrationFlag,

    deletedCalibrationFlag,
    deletedCalibration,
    handleAddNewCalibrationClose,
    handleEditCalibrationClose,
    handleDeleteCalibrationClose,
  } = useContext(CustomerContext);

  const handleAddModalClose = () => setAddNewFlag(false);
  const handleEditModalClose = () => setEditCustomerFlag(false);
  const handleDeleteCustomerClose = () => setDeleteCustomerFlag(false);

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
        />
      )}
      <Container style={{ color: "aliceblue" }}>
        <>
          <CustomerHeader
            setAddNewFlag={setAddNewFlag}
            pageData={pageData}
            setPageData={setPageData}
          />
          <MainTable />
        </>
      </Container>
    </>
  );
};

export default CustomerList;
