import { Form } from "react-router-dom";
import "./contact.css";

export const Contact = () => {
  return (
    <>
      <div className="container">
      <div className="containerfluid">
          {/* col five */}
          <div className="colum-5">
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out to us.</p>
          <p>Email:<a href="">pukhrajnemiwal9@gmail.com</a></p>
          <p>Phone: +919784139574</p>
          <p>Address: Busstand Raghunathgarh(Sikar)</p>
        </div>
        {/* col seven */}
        <div className="colum-7">
          <h1>Send Us a Message</h1>
          <Form action="" className="colum-7-form">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name"></input>
            <label htmlFor="name">Email:</label>
            <input type="text" name="email"></input>
            <label htmlFor="name">Message:</label>
            <textarea name="name" id="name" rows="8"></textarea>
            <button className="colum-7-form-btn" type="submit">Send Message</button>
          </Form>
        </div>
      </div>
      </div>
    </>
  );
};
