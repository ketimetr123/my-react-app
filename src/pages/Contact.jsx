import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nMessage: ${message}`
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 rounded-xl shadow-2xl flex flex-col w-[500px] space-y-4 p-4 mx-auto mt-20"
    >
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="p-2 rounded-lg bg-gray-200"
        type="text"
        placeholder="Enter Your Name"
      />{" "}
      <input
        onChange={(e) => setSurname(e.target.value)}
        value={surname}
        className="p-2 rounded-lg bg-gray-200"
        type="text"
        placeholder="Enter Your Surname"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="p-2 rounded-lg bg-gray-200"
        type="email"
        placeholder="Enter Email"
      />
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="p-2 rounded-lg bg-gray-200"
        placeholder="Message"
      ></textarea>
      <button
        className="bg-green-400 w-[90px] p-2 rounded-xl mx-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default Contact;
