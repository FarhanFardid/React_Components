import Title from "../../components/Headers/Title";

const HelpSupport = () => {
  return (
    <div className="py-5 md:py-12  ">
      <Title
        main="Help and Support for Rural AgroCommerce"
        sub="We're Here to Assist You: Find Answers and Get Help Quickly"
      ></Title>
      <div className="p-2 md:p-8">
        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Introduction
          </h2>
          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            Welcome to the Help and Support page for Rural AgroCommerce. We`re
            dedicated to providing you with the resources and assistance you
            need. If you have any questions or encounter any issues, don`t
            hesitate to reach out.
          </p>
        </article>

        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Customer Support
          </h2>

          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            <ul>
              <li>
                <span className="font-bold text-green-600">Email:</span>{" "}
                support24@ruralagrocommerce.com (Response within 24 hours)
              </li>
              <li>
                <span className="font-bold text-green-600">Phone: </span> (123)
                456-7890 (Available Sat-Thu)
              </li>
            </ul>
          </p>
        </article>

        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Live Chat
          </h2>

          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            {" "}
            Access live chat support on our website during operating hours.
          </p>
        </article>

        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Guides and Tutorials
          </h2>
          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            <ul>
              <li>
                {" "}
                1. Step-by-step guides for placing an order, tracking a
                shipment, and more.
              </li>
              <li>
                2. Watch our tutorials to learn about using our services and
                products.
              </li>
              <li>
                3. Find detailed instructions on using and maintaining your
                purchases.
              </li>
            </ul>
          </p>
        </article>
        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Community Support
          </h2>
          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            <ul>
              <li>
                <span className="font-bold text-green-600">
                  Forums and Discussion Boards:{" "}
                </span>
                Join our community forums for peer support and advice.
              </li>
              <li>
                <span className="font-bold text-green-600">User Groups: </span>
                Connect with local user groups to share experiences and tips.
              </li>
            </ul>
          </p>
        </article>

        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Technical Support
          </h2>
          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            <ul>
              <li>
                <span className="font-bold text-green-600">
                  {" "}
                  Troubleshooting Common Issues:{" "}
                </span>
                Solutions for common technical problems.
              </li>
              <li>
                <span className="font-bold text-green-600">
                  {" "}
                  System Requirements:
                </span>{" "}
                Ensure your system meets our recommended requirements.
              </li>
              <li>
                <span className="font-bold text-green-600">
                  {" "}
                  Report a Bug:{" "}
                </span>
                Let us know about any technical issues or bugs you encounter.
              </li>
            </ul>
          </p>
        </article>
        <article className="text-justify p-2 md:p-7">
          <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">
            Feedback and Suggestions
          </h2>
          <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            <ul>
              <li>
                <span className="font-bold text-green-600">
                  Submit Feedback:{" "}
                </span>
                We value your feedback. Submit your suggestions here.
              </li>
              <li>
                <span className="font-bold text-green-600">
                  {" "}
                  Survey Participation:{" "}
                </span>{" "}
                Help us improve by participating in our user surveys.
              </li>
            </ul>
          </p>
        </article>
      </div>
    </div>
  );
};

export default HelpSupport;
