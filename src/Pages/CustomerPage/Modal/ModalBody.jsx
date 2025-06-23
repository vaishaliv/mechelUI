import AddMachineForm from "../Machine/AddMachineForm";
import { FormComp } from "../FormComp";
import { EditMachineForm } from "../Machine/EditMachineForm";
import AddServiceForm from "../Service/AddServiceForm";
import AddCalibrationForm from "../Calibration/AddCalibrationForm";
import EditCalibrationForm from "../Calibration/EditCalibrationForm";
import EditServiceForm from "../Service/EditServiceForm";

export const AddModalBody = () => <p>Add New Customer</p>;

export const EditModalBody = ({ selectedCustomer }) => (
  <div>
    <FormComp />
    <p>Edit Customer</p>;{JSON.stringify(selectedCustomer)}
  </div>
);
export const DeleteCustomerBody = ({ deletedCustomer }) => (
  <div>
    <h5 className="text-info">{deletedCustomer.name}</h5>
    <h6>Do you want to delete this record? Please confirm!</h6>
  </div>
);
export const DeleteMachineBody = ({ deletedMachine }) => (
  <div>
    <h5 className="text-info">{deletedMachine.name}</h5>
    <h6>Do you want to delete this record? Please confirm!</h6>
  </div>
);
export const DeleteServiceBody = ({ deletedService }) => (
  <div>
    <h5 className="text-info">{deletedService.name}</h5>
    <h6>Do you want to delete this record? Please confirm!</h6>
  </div>
);
export const DeleteCalibrationBody = ({ deletedCalibration }) => (
  <div>
    <h5 className="text-info">{deletedCalibration.name}</h5>
    <h6>Do you want to delete this record? Please confirm!</h6>
  </div>
);

export const AddCalibrationBody = ({
  handleClose,
  newCalibration,
  setNewCalibration,
  selectedCustomer,
  pageData,
  setPageData,
}) => (
  <>
    <AddCalibrationForm
      handleClose={handleClose}
      newCalibration={newCalibration}
      setNewCalibration={setNewCalibration}
      selectedCustomer={selectedCustomer}
      pageData={pageData}
      setPageData={setPageData}
    />
  </>
);
export const EditCalibrationBody = ({
  setEditedCalibration,
  editedCalibration,
  handleClose,
}) => (
  <>
    <EditCalibrationForm
      setEditedCalibration={setEditedCalibration}
      data={editedCalibration}
      handleClose={handleClose}
    />
  </>
);

export const AddServiceBody = ({
  handleClose,
  newService,
  setNewService,
  selectedCustomer,
  pageData,
  setPageData,
}) => (
  <>
    <AddServiceForm
      handleClose={handleClose}
      newService={newService}
      setNewService={setNewService}
      selectedCustomer={selectedCustomer}
      pageData={pageData}
      setPageData={setPageData}
    />
  </>
);
export const EditServiceBody = ({
  setEditedService,
  editedService,
  handleClose,
}) => (
  <>
    <EditServiceForm
      setEditedService={setEditedService}
      data={editedService}
      handleClose={handleClose}
    />
  </>
);
export const AddMachineBody = ({
  handleClose,
  newMachine,
  setNewMachine,
  selectedCustomer,
  pageData,
  setPageData,
}) => (
  <>
    <AddMachineForm
      handleClose={handleClose}
      newMachine={newMachine}
      setNewMachine={setNewMachine}
      selectedCustomer={selectedCustomer}
      pageData={pageData}
      setPageData={setPageData}
    />
  </>
);
export const EditMachineBody = ({
  setEditedMachine,
  editedMachine,
  handleClose,
}) => {
  return (
    <EditMachineForm
      setEditedMachine={setEditedMachine}
      editedMachine={editedMachine}
      handleClose={handleClose}
    />
  );
};
