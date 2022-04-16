// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
// }

// Example routes with users
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    const {name, email, password} = req.body
    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    }
    users.push(newUser)
    res.status(201).json(newUser)
  } 
}
  
  // else if (req.method === 'PUT') {
  //   const {name, email, password, id} = req.body
  //   const updateUser = {
  //     id: Date.now(),
  //     name,
  //     email,
  //     password
  //   }
  //   users.push(updateUser)
  //   res.status(201).json(updateUser)
  // }

// DEBUGS
  // console.log(req.body, "request body")
  // console.log(req.query, "request query")
  // console.log(req.cookies, "request cookie")
  // console.log(req.headers, "request headers")
  // console.log(req.url, "request url")
  //res.send, ("Send a custom response that is not a json object")
  //res.setHe{ader ("Set-Cookie", "This is a cookie")
  //res.json ({})
  // res.status()
  // res.end() closes the response stream

 
        