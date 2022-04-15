// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // console.log(req.body, "request body")
  // console.log(req.query, "request query")
  // console.log(req.cookies, "request cookie")
  // console.log(req.headers, "request headers")
   // console.log(req.url, "request url")
  res.status(200).json({ name: 'John Doe' })

  //res.send, ("Send a custom response that is not a json object")
  //res.setHe{ader ("Set-Cookie", "This is a cookie")
  //res.json ({})
  // res.status()
  // res.end() closes the response stream
}

// fetch ('http://localhost:3000/api/hello', {method: 'POST', 
// headers {
//   'Content-Type': 'application/json'
// },
// body:  JSON.stringify({
//   greeting: "Hi',
//   userType: 'admin',
//   password: 1234
// })
