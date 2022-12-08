import { useState } from "react";
import "../styles/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setFormValue(() => {
      return {
        ...formValue,
        [name]: value,
      };
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    const { name, email, message } = formValue;
    if (name === "") {
      toast.error("पहले कुछ भरें");
    } else if (email === "") {
      toast.error("पहले कुछ भरें");
    } else if (!email.includes("@")) {
      toast.error("अवैध ईमेल");
    } else if (message === "") {
      toast.error("पहले कुछ भरें");
    } else {
      toast.success("सफलतापूर्वक भेज दिया");
      setFormValue({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <>
      <section className="containerHero">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
            autoComplete="off"
            value={formValue.name}
            onChange={onChangeValue}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            autoComplete="off"
            required
            value={formValue.email}
            onChange={onChangeValue}
          />

          <textarea
            name="message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"
            value={formValue.message}
            onChange={onChangeValue}
          ></textarea>

          <button
            type="submit"
            value="send"
            className="btnSubmit"
            onClick={submitData}
          >
            Send
          </button>
        </form>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
export default Contact;
