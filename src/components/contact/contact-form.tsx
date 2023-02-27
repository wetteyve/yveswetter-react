import axios from "axios";
import { useRef, useState } from "react";
import {
  fadeInObserver,
  useIntersectionObserver,
} from "../../utils/intersection-observer";

type FormStatus = "Send" | "Submitting...";
interface IForm {
  clientName: string;
  clientMail: string;
  clientMessage: string;
}

const ContactForm = () => {
  const emptyForm: IForm = {
    clientName: "",
    clientMail: "",
    clientMessage: "",
  };

  const formRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(formRef, fadeInObserver);
  const [formStatus, setFormStatus] = useState<FormStatus>("Send");
  const [form, setForm] = useState<IForm>(emptyForm);
  const MAIL_CLIENT_URL =
    "https:///mailer.yveswetter.ch/mailer/contact-form?mailClient=yves";

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const response = await axios.post(MAIL_CLIENT_URL, form);
    if (response.status === 201) {
      alert("Message sent");
      setForm(emptyForm);
    } else {
      alert("Oops something went wrong. Please try again.");
    }
    setFormStatus("Send");
  };

  const onFormChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value } as IForm);
  };

  return (
    <div ref={formRef} data-origin="bottom" className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3 border-b-[1px] border-black">
          <input
            placeholder="Name"
            className="form-control w-full outline-none bg-stone-100"
            type="text"
            id="clientName"
            required
            value={form.clientName}
            onChange={onFormChange}
          />
        </div>
        <div className="mb-3 border-b-[1px] border-black">
          <input
            placeholder="Email"
            className="form-control w-full outline-none bg-stone-100"
            type="email"
            id="clientMail"
            required
            value={form.clientMail}
            onChange={onFormChange}
          />
        </div>
        <div className="mb-3  border-b-[1px] border-black">
          <textarea
            placeholder="Message"
            className="form-control w-full h-32  outline-none bg-stone-100"
            id="clientMessage"
            required
            value={form.clientMessage}
            onChange={onFormChange}
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
