import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialContactValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [contact, setContact] = useState<Contact>(initialContactValue);

  const onChangeInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/contact/`, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setContact(initialContactValue);
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-[1240px] mx-auto p-8 lg:grid lg:grid-cols-2 flex flex-col items-center justify-center gap-8"
      >
        <Card>
          <CardBody>
            <h2 className="card-title lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-center mb-5">
              Contact Form
            </h2>

            <form
              onSubmit={onSubmit}
              className="flex items-center justify-center flex-col gap-4"
            >
              <Input
                isRequired
                type="text"
                label="Your Name"
                className="max-w-xs"
                name="name"
                onChange={onChangeInputState}
                value={contact.name}
              />
              <Input
                isRequired
                type="email"
                label="Your Email"
                className="max-w-xs"
                name="email"
                onChange={onChangeInputState}
                value={contact.email}
              />
              <Input
                isRequired
                type="text"
                label="Subject"
                className="max-w-xs"
                name="subject"
                onChange={onChangeInputState}
                value={contact.subject}
              />
              <Textarea
                isRequired
                labelPlacement="outside"
                placeholder="Enter your Message"
                className="max-w-xs"
                name="message"
                onChange={onChangeInputState}
                value={contact.message}
              />

              <Button color="primary" type="submit">
                Send
              </Button>
            </form>
          </CardBody>
        </Card>

        <div className="lg:text-2xl md:text-xl  text-base font-bold flex flex-col gap-8">
          <h2>Contact details</h2>
          <p className="flex items-center gap-4">
            <MdEmail />
            jasper.1199a@gmail.com
          </p>
          <p className="flex items-center gap-4">
            <BsFillTelephoneFill />
            +6664 479 5844
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
