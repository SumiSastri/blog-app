import { enquiries } from "../../../mocks/mockEnquiries";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(enquiries)
  } else if (req.method === 'POST') {
    const {enquiry, name} = req.body
    const newEnquiry = {
      id: Date.now(),
      enquiry,
      name,
    }
    enquiries.push(newEnquiry)
    res.status(201).json(newEnquiry)
  }
}