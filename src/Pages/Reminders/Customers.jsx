import React, { useEffect, useState } from "react";
import CountdownTimer from "../../components/common/CountdownTimer";
import DatePickerComp from "../../components/common/DatePickerComp";
import DatePicker from "react-datepicker";
import {
  Form,
  Button,
  Table,
  Container,
  Card,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { TbDoorEnter } from "react-icons/tb";
import ExportToExcel from "../../components/common/ExportToExcel";
import { data } from "./data";
// import { data } from "../../Pages/CustomerPage/data";
import { toISOString } from "../../utils/common";
import ExportExcelComp from "../../components/common/ExportExcelComp";
import ReminderPopUp from "./ReminderPopUp";
import CustomerTable from "./CustomerTable";
import SwitchesComp from "./SwitchesComp";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import { getDateSet, getMaxNum } from "../../utils/Custtomer";

const Customers = ({ rawData = [] }) => {
  const [newData, setNewData] = useState(data);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [reminderQualifying, setReminderQualifying] = useState([]);

  const [reminderId, setReminderId] = useState(1);
  const [showReminder, setShowReminder] = useState(false);
  const [reminderCount, setReminderCount] = useState(1);
  const [firstSwitch, setFirstSwitch] = useState(true);
  const [secondSwitch, setSecondSwitch] = useState(true);
  const [thirdSwitch, setThirdSwitch] = useState(true);
  const [fourthSwitch, setFourthSwitch] = useState(true);
  const [incrementCount, setIncrementCount] = useState(12);
  const [toggleExpand, setToggleExpand] = useState(false);
  const [activateCustomer, setActivateCustomer] = useState(false);
  const [isElapsed, setElapsed] = useState(false);

  const [reminderArr, setReminderArr] = useState([]);

  const handleReminderArray = (data) => {
    const rArr = getDateSet(data.last_stamping_date, 1, incrementCount);
    console.log("handleReminderArray......", data, rArr);
    setReminderArr(rArr);
  };

  const RQ1 = newData.filter(
    (d) => new Date(d.next_stamping_date) <= new Date()
  );
  const RQ2 = newData.filter(
    (d) => new Date(d.next_stamping_date) <= new Date()
  );
  const RQ3 = newData.filter(
    (d) => new Date(d.next_stamping_date) <= new Date()
  );
  const RQ4 = newData.filter(
    (d) => new Date(d.next_stamping_date) <= new Date()
  );

  const handleCloseConfirm = () => setActivateCustomer(false);

  const handleActivateCustomer = (item) => {
    setActivateCustomer(true);
    setSelectedItem(item);
  };
  useEffect(() => {}, [activateCustomer]);
  useEffect(() => {
    if (RQ1.length > 0) {
      setReminderQualifying(RQ1);
    } else {
      setReminderQualifying([]);
      setShowReminder(false);
    }
  }, [selectedIndex, newDate]);

  const handleReminderClose = () => {
    setShowReminder(false);

    // setTimeout(() => {
    //   setFirstSwitch(true);
    //   setSecondSwitch(true);
    //   setThirdSwitch(true);
    //   setFourthSwitch(true);
    // }, 500); // 2-second delay
  };
  const handleSelectedDate = (date, item) => {
    const formattedDate = toISOString(date);
    const mData = newData.map((d) =>
      d.id === item.id ? { ...d, next_stamping_date: formattedDate } : d
    );
    setNewData(mData);
    setSelectedIndex(item.id);
    setSelectedDate(date);
    setNewDate(date);
  };
  const handleShowDesc = (item) => {
    setSelectedItem(item);
  };
  const handleOnChange = (id) => {
    setReminderId(id);

    if (id === 1) {
      setIncrementCount(12);
      setFirstSwitch((prev) => !prev);
      setSecondSwitch(true);
      setThirdSwitch(true);
      setFourthSwitch(true);
    } else if (id === 2) {
      setIncrementCount(6);

      setSecondSwitch((prev) => !prev);
      setFirstSwitch(true);
      setThirdSwitch(true);
      setFourthSwitch(true);
    } else if (id === 3) {
      setIncrementCount(3);

      setThirdSwitch((prev) => !prev);
      setFirstSwitch(true);
      setSecondSwitch(true);
      setFourthSwitch(true);
    } else if (id === 4) {
      setIncrementCount(1);
      setFourthSwitch((prev) => !prev);
      setFirstSwitch(true);
      setSecondSwitch(true);
      setThirdSwitch(true);
    }
    // setTimeout(() => {
    //   setShowReminder(true);
    // }, 1000); // 1-second delay
  };

  const reminderData = [
    {
      id: 1,
      title: "To Date Reminder(Yearly)",
      reminderQualifying: reminderQualifying,
      showReminder: showReminder,
      handleClose: handleReminderClose,
    },
    {
      id: 2,
      title: "Half Yearly Reminder",
      reminderQualifying: reminderQualifying,
      showReminder: showReminder,
      handleClose: handleReminderClose,
    },
    {
      id: 3,
      title: "Quarterly Reminder",
      reminderQualifying: reminderQualifying,
      showReminder: showReminder,
      handleClose: handleReminderClose,
    },
    {
      id: 4,
      title: "Monthly Reminder",
      reminderQualifying: reminderQualifying,
      showReminder: showReminder,
      handleClose: handleReminderClose,
    },
  ];

  const handleSetElapsed = (flag) => {
    setElapsed(flag);
    // console.log("handleSetElapsed ...");
  };
  console.log("incrementCount ...", reminderArr, incrementCount);

  return (
    <Container style={{ color: "aliceblue" }}>
      <ExportExcelComp
        title="Customer List"
        data={data}
        setShowReminder={setShowReminder}
      />
      <SwitchesComp
        handleOnChange={handleOnChange}
        firstSwitch={firstSwitch}
        secondSwitch={secondSwitch}
        thirdSwitch={thirdSwitch}
        fourthSwitch={fourthSwitch}
      />

      {showReminder &&
        reminderData.map((reminder) => {
          if (reminder.id === reminderId)
            return (
              <ReminderPopUp
                id={reminder.id}
                title={reminder.title}
                reminderQualifying={reminder.reminderQualifying}
                showReminder={showReminder}
                handleReminderClose={reminder.handleClose}
              />
            );
        })}

      {activateCustomer && (
        <ConfirmDialog
          title="Activate Customer"
          body="Do you want to activate this customer? Please confirm!"
          activateCustomer={activateCustomer}
          handleCloseConfirm={handleCloseConfirm}
        />
      )}

      <CustomerTable
        reminderArr={reminderArr}
        handleReminderArray={handleReminderArray}
        handleActivateCustomer={handleActivateCustomer}
        toggleExpand={toggleExpand}
        setToggleExpand={setToggleExpand}
        incrementCount={incrementCount}
        firstSwitch={firstSwitch}
        secondSwitch={secondSwitch}
        thirdSwitch={thirdSwitch}
        fourthSwitch={fourthSwitch}
        data={newData}
        selectedItem={selectedItem}
        selectedDate={selectedDate}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        newDate={newDate}
        handleSelectedDate={handleSelectedDate}
        handleShowDesc={handleShowDesc}
        isElapsed={isElapsed}
        handleSetElapsed={handleSetElapsed}
      />
    </Container>
  );
};

export default Customers;
