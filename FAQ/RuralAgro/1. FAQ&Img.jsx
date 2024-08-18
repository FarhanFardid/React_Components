// Need to install material UI
// Change the image and Q/A as required

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaAngleDown } from "react-icons/fa";
import Title from "../../components/Headers/Title";
import faqImg from "../../assets/images/others/Faq.jpg";
const FAQ = () => {
  return (
    <>
      <Title
        main="Frequently Asked Questions (FAQs)"
        sub="Your Questions Answered: Everything You Need to Know"
      ></Title>
      <div className="hero  bg-base-200 py-1 md:py-8  bg-green-50">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="md:p-24 p-4 flex-1 ">
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="font-bold">
                  Question 1. How does Rural AgroCommerce connect farmers and
                  buyers?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Rural AgroCommerce provides a platform where farmers can list
                  their fresh, organic agricultural products for sale. Buyers
                  can browse through these listings, place orders, and have the
                  products delivered to their doorstep. This direct connection
                  ensures that buyers receive high-quality products while
                  supporting local farmers.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Question 2. What areas does Rural AgroCommerce serve?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Rural AgroCommerce serves a wide range of rural and urban
                  areas. Each specific area is managed by a dedicated manager
                  who oversees the delivery process to ensure timely and
                  efficient service. You can check the availability in your area
                  by entering the area location on our website.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  Question 3. How are the products delivered to buyers?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Once an order is placed, the manager of the specific area
                  arranges for the products to be delivered through our reliable
                  delivery system. Our managers coordinate with local farmers
                  and delivery personnel to ensure that all products reach
                  buyers fresh and in excellent condition. Delivery times and
                  tracking information are provided to keep you updated on your
                  order status.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex-1 p-3">
            {" "}
            <img
              src={faqImg}
              className="w-full rounded-lg shadow-2xl"
              alt="FAQ Img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
