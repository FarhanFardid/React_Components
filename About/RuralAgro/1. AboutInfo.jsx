// Change the content as necessary
// Import the Title file from directory

import Title from "../../components/Headers/Title";
const About = () => {
  return (
    <>
      <div className="pt-8 md:pt-16">
        {" "}
        <Title
          main="About Us"
          sub="Empowering Farmers, Connecting Communities"
        ></Title>
      </div>

      <div className="text-center text-sm md:text-xl font-medium px-8 pt-7 pb-12 md:px-16 md:pt-16 md:pb-24">
        <article>
          <span className="text-base md:text-2xl font-bold text-amber-600">
            RuralAgro Commerce
          </span>
          , is dedicated to transforming the agricultural marketplace by
          seamlessly connecting farmers with buyers. Our user-friendly platform
          streamlines the process from product submission to delivery, ensuring
          a transparent and efficient experience for all. We believe in
          leveraging technology to support sustainable agriculture, promote fair
          trade, and build a thriving community where farmers and buyers can
          prosper together. By providing farmers with greater market access and
          buyers with a diverse selection of high-quality products.
        </article>
        <article className="py-4 md:py-8">
          We aim to foster trust and collaboration in the agricultural industry.
          Our commitment to continuous improvement and user satisfaction drives
          us to regularly update and enhance our platform based on your
          feedback. Join us in creating a more connected and equitable
          agricultural ecosystem, where everyone benefits from the power of
          technology and community.
        </article>
      </div>
    </>
  );
};

export default About;
