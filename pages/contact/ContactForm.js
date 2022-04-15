import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        name: name,
      })
    });
    const responseData = await response.json()
    console.log(responseData, "form submission")
  };

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <p>If you need any other information send us a brief description</p>
        <h6>Name</h6>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <h6>Message</h6>
        <input
          className='input2'
          type='text'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
