import { useState } from "react";

const EnquiriesTable = () => {
  const [enquiries, setEnquiries] = useState([]);
//   const [name, setName] = useState("");
//   const [enquiry, setEnquiry] = useState("");

  const fetchEnquiries = async () => {
    const response = await fetch("/api/enquiries");
    const responseData = await response.json();
    setEnquiries(responseData);
  };

  const deleteEnquiry = async (enquiryId) => {
    const response = await fetch(`/api/enquiries/${enquiryId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchEnquiries();
  };

//   const updateEnquiry = async (enquiryId) => {
//     const response = await fetch(`/api/enquiries/${enquiryId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         enquiry: enquiry,
//         name: name,
//       }),
//     });
//     const responseData = await response.json();
//     console.log(responseData, "form submission");
//   };

  return (
    <div>
      <button onClick={fetchEnquiries}>Show customer enquiries</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Enquiry</th>
            <th>Remove</th>
          </tr>
        </thead>
        {enquiries.map((enquiry) => {
          return (
            <tbody key={enquiry.id}>
              <tr id={enquiry.id}>
                <td
                //   value={name}
                //   onChange={(event) => setName(event.target.value)}
                >
                  {enquiry.name}
                </td>
                <td
                //   value={enquiry}
                //   onChange={(event) => setEnquiry(event.target.value)}
                >
                  {enquiry.enquiry}
                </td>
                <td>
                  <button
                    className='button2'
                    onClick={() => deleteEnquiry(enquiry.id)}
                  >
                    Delete
                  </button>
                  {/* <button onClick={() => updateEnquiry(enquiry.id)}className='button3'>Edit</button> */}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default EnquiriesTable;
