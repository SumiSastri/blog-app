import { enquiries } from "../../../mocks/mockEnquiries";

export default function handler(req, res) {
  const { enquiryId } = req.query
  if (req.method === 'GET') {
    const enquiry = enquiries.find(enquiry => enquiry.id === parseInt(enquiryId))
    res.status(200).json(enquiry)
  } else if (req.method === 'DELETE') {
    const deletedEnquiry = enquiries.find(
      enquiry => enquiry.id === parseInt(enquiryId)
    )
    const index = enquiries.findIndex(
      enquiry => enquiry.id === parseInt(enquiryId)
    )
    enquiries.splice(index, 1)
    res.status(200).json(deletedEnquiry)
  }
}