import { useState } from "react";

type FormStatus = "Send" | "Submitting...";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("Send");
  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3 border-b-[1px] border-black">
          <input
            placeholder="Name"
            className="form-control w-full outline-none bg-stone-100"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-3 border-b-[1px] border-black">
          <input
            placeholder="Email"
            className="form-control w-full outline-none bg-stone-100"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3  border-b-[1px] border-black">
          <textarea
            placeholder="Message"
            className="form-control w-full h-32  outline-none bg-stone-100"
            id="message"
            required
          />
        </div>
        <button
          disabled={formStatus === "Submitting..."}
          className={`btn btn-danger my-6 py-2 px-4 shadow-md text-white rounded-md
                      transition-all ease-in-out duration-150
                      ${
                        formStatus === "Send"
                          ? "bg-[#4CAF50] hover:scale-105 "
                          : "bg-[#FF5252]"
                      }`}
          type="submit"
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
