import { useContext, useEffect, useState } from "react";
import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { GrActions } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import CustomerContext from "../../Contexts/CustomerContext";

const ServiceTable = ({serviceDetailsData}) => {
  const {
    pageData,
    setPageData,
    selectedCustomer,
    editedService,
    setEditedService,
    setEditServiceFlag,
    setDeletedService,
    setDeletedServiceFlag,
    setSelectedService,
    setServiceFlag,
    serviceFlag,
    selectedService,
  } = useContext(CustomerContext);
  const [serviceData, setServiceData] = useState(serviceDetailsData);

  useEffect(() => {
    const dummyServiceData = [...serviceDetailsData];
    if (selectedCustomer) {
      const indexCustomer = pageData.findIndex(
        (obj) => obj.id === selectedCustomer.id
      );
      const indexService = dummyServiceData.findIndex(
        (obj) => obj.id === editedService.id
      );
      if (indexService !== -1) {
        dummyServiceData[indexService] = editedService;
        setServiceData(dummyServiceData);
        const copiedPageData = [...pageData];
        copiedPageData[indexCustomer].service_contract_details[indexService] =
          editedService;
        console.log("SERVICE tABLE .....", serviceData, copiedPageData);

        setPageData(copiedPageData);
      }
    }
  }, [editedService]);

  console.log("Service tABLE .....", serviceData, editedService);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <GrActions />
          </th>
          <th>Party</th>
          <th>Contract No</th>
          <th>Make</th>
          <th>Model</th>
          <th>Number</th>
          <th>AMC Start Date</th>
          <th>AMC End Date</th>
          <th>Government Fees</th>
          <th>Stamping Fees</th>
          <th>Future Visit</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {serviceData &&
          serviceData.map((service) => {
            return (
              <>
                <tr key={service.id}>
                  <td>
                    <Button
                      variant="light"
                      className="p-1 cursor-pointer"
                      onClick={() => {
                        setEditedService(service);
                        setEditServiceFlag((prev) => !prev);
                      }}
                    >
                      <BiEditAlt />
                    </Button>
                    <Button
                      className="p-1 mx-1 cursor-pointer"
                      variant="light"
                      onClick={() => {
                        setDeletedService(service);
                        setDeletedServiceFlag((prev) => !prev);
                      }}
                    >
                      <MdDelete />
                    </Button>
                  </td>

                  {/* ---------------- */}
                  <td>{service.sold_to_party}</td>
                  <td>{service.contract_no}</td>
                  <td>{service.make}</td>
                  <td>{service.model}</td>
                  <td>{service.id_num}</td>
                  <td>{service.amc_start_date?.toDateString()}</td>
                  <td>{service.amc_end_date?.toDateString()}</td>
                  <td>{service.stamping_fees}</td>
                  <td>{service.stamping_expenses}</td>
                  <td>
                    <InputGroup className="mb-3">
                      <input
                        type="checkbox"
                        checked={service.future_visit}
                        readOnly={true}
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <Button
                      variant="light"
                      onClick={() => {
                        setSelectedService(service);
                        setServiceFlag((prev) => !prev);
                      }}
                    >
                      ...
                    </Button>
                  </td>
                </tr>
                {serviceFlag && service.id === selectedService.id && (
                  <tr>
                    <td colSpan={11}>
                      <Card className="p-4 w-50">
                        <Card.Header>Allowed Visits</Card.Header>
                        <Card.Body>
                          <InputGroup className="mb-3 w-50">
                            <InputGroup.Text id="basic-addon1">
                              <input
                                className="mb-2"
                                type="checkbox"
                                readOnly={true}
                                checked={service.yearly_visit}
                                title="Yearly Visit"
                              />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Yearly Visit"
                              readOnly={true}
                              aria-label="yearlyVisit"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3 w-50">
                            <InputGroup.Text id="basic-addon1">
                              <input
                                className="mb-2"
                                type="checkbox"
                                readOnly={true}
                                checked={service.half_yearly_visit}
                                title="Half Yearly Visit"
                              />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Half Yearly Visit"
                              readOnly={true}
                              aria-label="halfYearlyVisit"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3 w-50">
                            <InputGroup.Text id="basic-addon1">
                              <input
                                className="mb-2"
                                type="checkbox"
                                readOnly={true}
                                checked={service.quarterly_visit}
                                placeholder="Quarterly Visit"
                              />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Quarterly Visit"
                              readOnly={true}
                              aria-label="quarterlyYearlyVisit"
                            />
                          </InputGroup>

                          <InputGroup className="mb-3 w-50">
                            <InputGroup.Text id="basic-addon1">
                              <input
                                className="mb-2"
                                type="checkbox"
                                readOnly={true}
                                checked={service.monthly_visit}
                                placeholder="Monthly Visit"
                              />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Monthly Visit"
                              readOnly={true}
                              aria-label="monthlyYearlyVisit"
                            />
                          </InputGroup>
                        </Card.Body>
                      </Card>
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
export default ServiceTable;
