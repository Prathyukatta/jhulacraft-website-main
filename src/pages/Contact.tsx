import { Header } from "../components/layout/Header";
import InquiryForm from "./InquiryForm"; // adjust path if needed

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="container-custom py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <InquiryForm />
      </div>
    </>
  );
};

export default ContactUs;
