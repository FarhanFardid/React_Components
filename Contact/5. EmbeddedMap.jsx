// Change map info and styling as necessary.

import React from "react";
const EmbeddedMap = () => {
  return (
    <div className="text-center mb-3">
      <h2 className="text-xl md:text-4xl font-bold mb-4 text-center text-green-600  md:py-5">
        Find Us Here
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.671261061211!2d90.39298181445683!3d23.75162759459513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c750dfbe59ef%3A0x378b31b65d440a3!2sKarwan%20Bazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620223630787!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-80 pt-3"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
