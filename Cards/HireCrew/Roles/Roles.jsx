// Hire Crew Project demo Role Component
// Change design , content and logo as necessary

import Title from "../headings/Title";
import image2 from "../../assets/Images/Image 2.svg";
import image3 from "../../assets/Images/Image 3.svg";
import image4 from "../../assets/Images/Image 4.svg";
import image5 from "../../assets/Images/Image 5.svg";
import image6 from "../../assets/Images/Image 6.svg";
import image7 from "../../assets/Images/Image 7.svg";
import RoleCard from "../card/RoleCard";
const Role = () => {
  const roleInfo = [
    {
      heading: "Project Managers",
      details:
        '"Oversee construction projects, ensuring timelines, budgets, and quality meet objectives with effective team coordination."',
      img: image2,
    },
    {
      heading: "Site Supervisors",
      details:
        '"Site supervisors oversee daily operations, ensuring safety, efficiency, and compliance on construction sites."',
      img: image3,
    },
    {
      heading: "Engineers (Civil, electrical)",
      details:
        '"Construction engineers manage projects, ensuring designs are implemented effectively, meeting safety and quality standards."',
      img: image4,
    },
    {
      heading: "Architects",
      details:
        '"Architects design buildings and structures, balancing functionality, aesthetics, and client requirements with technical expertise."',
      img: image5,
    },
    {
      heading: "Skilled Tradespeople",
      details:
        '"Construction skilled tradespeople specialize in various crafts, ensuring quality workmanship in building and renovation projects."',
      img: image6,
    },
    {
      heading: "General Laborers",
      details:
        '"General laborers support construction projects by performing tasks such as loading, unloading, and site cleaning."',
      img: image7,
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Title
        main="Roles we Fill"
        sub='"We fill roles in construction, matching skilled professionals like engineers, supervisors,
and laborers to projects requiring expertise and efficiency."'
      ></Title>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-12 py-6">
        {roleInfo.slice(0, 4).map((info, index) => (
          <RoleCard key={index} info={info}></RoleCard>
        ))}
        <div className="md:col-start-2 md:col-span-1">
          <RoleCard info={roleInfo[4]}></RoleCard>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <RoleCard info={roleInfo[5]}></RoleCard>
        </div>
      </div>
    </div>
  );
};

export default Role;
