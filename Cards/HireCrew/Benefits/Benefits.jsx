// Hire Crew Project demo benefits section
// Change design , content and logo as necessary
import Title from "../headings/Title";
import icon4 from "../../assets/Icons/Icon 4.svg";
import icon5 from "../../assets/Icons/Icon 5.svg";
import icon6 from "../../assets/Icons/Icon 6.svg";
import icon7 from "../../assets/Icons/Icon 7.svg";
import BenefitCard from "../card/BenefitCard";
const Benefits = () => {
  const benefitsInfo = [
    {
      heading: "Access to Skilled Labor",
      details:
        "We Provide a pool of highly trained professtional ready to contribute to your projects globally.",
      icon: icon4,
    },
    {
      heading: "Cost-Effective Solutions",
      details:
        "Our service are designed to save you time and reduce hiring costs by taking care of the entire recruitment process.",
      icon: icon5,
    },
    {
      heading: "Compliance & Documentation",
      details:
        "We handle all necessary paperwork, ensuring compliance with international labor laws & regulations.",
      icon: icon6,
    },
    {
      heading: "Tailored Recruitment",
      details:
        "We customize our recruitment process to match the specific requirements of your projects, ensuring a perfect fit for every role.",
      icon: icon7,
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Title
        main="Benefits of Hiring Through Us"
        sub='"Benefit from our efficient hiring process, matching qualified candidates to your construction
projects, ensuring quality and reliability."'
      ></Title>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16 md:gap-y-0 md:gap-x-14 py-12 md:py-24">
        {benefitsInfo.map((info, index) => (
          <BenefitCard key={index} info={info}></BenefitCard>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
