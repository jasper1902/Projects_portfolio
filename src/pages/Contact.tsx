import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";
const Contact = () => {
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

            <form className="flex items-center justify-center flex-col gap-4">
              <Input
                isRequired
                type="text"
                label="Your Name"
                defaultValue=""
                className="max-w-xs"
              />
              <Input
                isRequired
                type="email"
                label="Your Email"
                defaultValue=""
                className="max-w-xs"
              />
              <Input
                isRequired
                type="text"
                label="Subject"
                defaultValue=""
                className="max-w-xs"
              />
              <Textarea
                isRequired
                labelPlacement="outside"
                placeholder="Enter your Message"
                className="max-w-xs"
              />

              <Button color="primary" isDisabled>
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
