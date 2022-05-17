import { enquiries } from '../../../mocks/mockEnquiries'

function Enquiry({ enquiry }) {
  return (
    <div>
      {enquiry.id}. {enquiry.name}{enquiry.enquiry}
    </div>
  )
}

export default Enquiry

export async function getStaticProps(context) {
  const { params } = context
  const { enquiryId } = params

  const enquiry = enquiries.find(enquiry => enquiry.id === parseInt(enquiryId))
  console.log(enquiry)

  /** NOTE: WITH INTERNAL APIS there is no need to call the api route - it is done automatically
  eg: const response = await fetch(`http:localhost:3000/api/enquiries/${enquiryId}`) can be ommitted
  */

  return {
    props: {
      enquiry
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { enquiryId: '1' } },
      { params: { enquiryId: '2' } },
      { params: { enquiryId: '3' } }
    ],
    fallback: false
  }
}