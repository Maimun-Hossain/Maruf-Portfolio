import { useRef } from "react";
import bg from "../../assets/bg-01.jpg";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygwh4q5",
        "template_1nbwe2x",
        form.current,
        "BTAfe8Hsii5fSDk2F"
      )
      .then(
        (result) => {
          console.log(result.text);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message Delivered",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="min-h-screen py-20"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-white">
          GET IN <span className="text-green-900">TOUCH</span>
        </h1>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 ">
        {/* name */}
        <div className="card bg-[#1a1a1a] rounded-md mt-5">
          <div className="card-body">
            <h2 className="text-xs font-bold">NAME</h2>
            <div className="divider mt-0 mb-0 hover:w-full divider-success w-7"></div>
            <p className="text-lg font-bold text-white">MARUF HOSSAIN</p>
          </div>
        </div>
        {/* address */}
        <div className="card bg-[#1a1a1a] rounded-md mt-5">
          <div className="card-body">
            <h2 className="text-xs font-bold">ADDRESS</h2>
            <div className="divider mt-0 mb-0 hover:w-full divider-success w-7"></div>
            <p className="text-lg font-bold text-white">MAGDEBURG, GERMANY</p>
          </div>
        </div>
        {/* call me */}
        <div className="card bg-[#1a1a1a] rounded-md mt-5">
          <div className="card-body">
            <h2 className="text-xs font-bold">CALL ME</h2>
            <div className="divider mt-0 mb-0 hover:w-full divider-success w-7"></div>
            <p className="text-lg font-bold text-white">+880 17033 86612</p>
          </div>
        </div>
        {/* email */}
        <div className="card bg-[#1a1a1a] rounded-md mt-5">
          <div className="card-body">
            <h2 className="text-xs font-bold">EMAIL</h2>
            <div className="divider mt-0 mb-0 hover:w-full divider-success w-7"></div>
            <p className="text-lg font-bold text-white">maimun78l@gmail.com</p>
          </div>
        </div>
      </div>
      {/* form section */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="card-body bg-[#1a1a1a] w-3/4 mx-auto mt-10 p-5 md:p-24 rounded-lg"
      >
        <h2 className="mb-5 text-3xl font-semibold text-white">
          Send me a message
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="input focus:border-green-900 bg-transparent rounded-sm border border-zinc-700"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input focus:border-green-900 bg-transparent rounded-sm border border-zinc-700"
              required
              name="user_email"
            />
          </div>
        </div>
        {/* subject */}
        <div className="form-control mt-5">
          <input
            type="text"
            placeholder="Subject"
            className="input text-[#A2A2A2] focus:border-green-900 bg-transparent rounded-sm border border-zinc-700"
            name="subject"
          />
        </div>
        {/* text area */}
        <textarea
          name="message"
          className="textarea mt-5 min-h-[250px] focus:border-green-900 bg-transparent rounded-sm border border-zinc-700"
          placeholder="Message"
        ></textarea>
        {/* button */}
        <div className="form-control mt-6">
          <input
            className="btn rounded-sm bg-[#005522] text-white"
            type="submit"
            value="SEND MESSAGE"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
