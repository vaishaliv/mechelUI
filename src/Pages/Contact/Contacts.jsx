import React from "react";
import { Table } from "react-bootstrap";

const Contacts = ({rawData}) => {
let data=rawData
  if(!data) return <h1>No Contact Data Found!</h1>
  return (
    <div style={{ color: "aliceblue" }}>
      Contacts
      <Table className="mb-4" style={{ color: "aliceblue", border:'1px solid aliceblue' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => {
          return  <tr key={i}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.msg}</td>
              <td>{d.createdDate}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Contacts;
