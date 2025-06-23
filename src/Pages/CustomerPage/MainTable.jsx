import React, { useContext } from "react";
import { Accordion, Button, Card, InputGroup, Table } from "react-bootstrap";
import { BiEdit, BiEditAlt, BiExport } from "react-icons/bi";
import {
  MdCompassCalibration,
  MdDelete,
  MdDeleteForever,
} from "react-icons/md";
import { motion } from "framer-motion";
import { BsFileExcel, BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FcSalesPerformance, FcServices } from "react-icons/fc";
import { CgAdd } from "react-icons/cg";
import { GrAction, GrActions } from "react-icons/gr";
import MachineTable from "./MachineTable";
import ServiceTable from "./ServiceTable";
import CalibrationTable from "./CalibrationTable";
import MainAccordion from "./MainAccordion";
import PhoneCompOriginal from "./MainInitial/PhoneCompOriginal";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";
import { customerJsonToExcel } from "./CustomerJsonToExcel";
import CustomerContext from "../../Contexts/CustomerContext";

const MainTable = ({}) => {
  const {
    pageData,
    setSelectedCustomer,
    setToggleRow,
    setEditCustomerFlag,
    setDeleteCustomerFlag,
    setDeletedCustomer,
    selectedCustomer,
    toggleMainRow,
  } = useContext(CustomerContext);
  return (
    <Table
      striped
      bordered
      hover
      className="p-5 mb-4"
      style={{ color: "aliceblue", border: "1px solid aliceblue" }}
    >
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pageData &&
          pageData.map((customer) => {
            const machineDetailsData = customer.sales_machineDetails;
            const serviceDetailsData = customer.service_contract_details;
            const calibrationDetailsData =
              customer.calibration_contract_details;

            return (
              <>
                <tr
                  key={customer.id}
                  onClick={(e) => {
                    setSelectedCustomer(customer);
                    setToggleRow((prev) => !prev);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => customerJsonToExcel(customer)}
                    >
                      <PiMicrosoftExcelLogoThin size={20} />
                    </Button>
                    <Button
                      variant="outline-info"
                      className="mx-2"
                      onClick={(e) => {
                        e.stopPropagation(); // Stops the event from propagating
                        setSelectedCustomer(customer);
                        setEditCustomerFlag(true);
                      }}
                    >
                      <BiEdit size={20} />
                    </Button>
                    <Button
                      className=""
                      variant="outline-danger "
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteCustomerFlag(true);
                        setDeletedCustomer(customer);
                      }}
                    >
                      <MdDeleteForever size={22} />
                    </Button>
                  </td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td style={{ width: "4%" }}>
                    <motion.div
                      style={{ cursor: "pointer", outline: 0 }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {toggleMainRow && selectedCustomer.id === customer.id ? (
                        <Button
                          variant="light"
                          className="round-button text-info"
                          onClick={() => {
                            // setSelectedCustomer(null);
                            setToggleRow((prev) => !prev);
                          }}
                        >
                          <motion.div
                            key="moon1"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                          >
                            <BsThreeDots />
                          </motion.div>
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          className="round-button text-info"
                          onClick={() => {
                            setSelectedCustomer(customer);
                            setToggleRow((prev) => !prev);
                          }}
                        >
                          <motion.div
                            key="sun1"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                          >
                            <BsThreeDotsVertical />
                          </motion.div>
                        </Button>
                      )}
                    </motion.div>
                  </td>
                </tr>
                {toggleMainRow && selectedCustomer.id === customer.id && (
                  <tr>
                    <td colSpan={5}>
                      <MainAccordion
                        machineDetailsData={machineDetailsData}
                        serviceDetailsData={serviceDetailsData}
                        calibrationDetailsData={calibrationDetailsData}
                      />
                    </td>
                  </tr>
                )}
              </>
            );
          })}
      </tbody>
    </Table>
  );
};

export default MainTable;
