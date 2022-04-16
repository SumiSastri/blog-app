
import { useState } from 'react'

const UserEnquiries = () => {
    const [enquiries, setEnquiries] = useState([])

    const fetchEnquiries = async () => {
        const response = await fetch('/api/enquiries')
        const responseData = await response.json();
        setEnquiries (responseData)
      }
    
      const deleteEnquiry = async enquiryId => {
        const response = await fetch(`/api/enquiries/${enquiryId}`, {
          method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchEnquiries()
      }
        

    return ( <div>
         <button onClick={fetchEnquiries}>Show customer enquiries</button>     
 <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Enquiry</th>
      <th>Remove</th>
    </tr>
   </thead>
            {enquiries.map(enquiry => {
           return (
   <tbody key={enquiry.id}>
     <tr id={enquiry.id}>
       <td>{enquiry.name}</td>
       <td>{enquiry.enquiry}</td>
       <td><button className="button2" onClick={() => deleteEnquiry(enquiry.id)}>Delete</button></td>
     </tr>
  </tbody>
)
})}          
</table>
    </div> );
}

export default UserEnquiries;