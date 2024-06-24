import React from 'react';

const TermsConditions = () => {
    return (
        <div className="py-5 md:py-12  ">
        <Title
          main="Terms and Conditions for Rural AgroCommerce"
          sub="Your Guide to Using Our Services Safely and Responsibly"
        ></Title>
        <div className="p-2 md:p-8">
          <article className="text-justify p-2 md:p-7">
            <h2 className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Introduction</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            Welcome to Rural AgroCommerce. By using our website and services, you agree to comply with and be bound by these terms and conditions. Please read them carefully.
            </p>
          </article>
  
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">User Responsibilities</h2>
  
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
             Users are expected to use our website responsibly. Prohibited activities include, but are not limited to, spamming, engaging in illegal activities, and misusing the website`s content or services.
             
            </p>
          </article>
  
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Account Management</h2>
  
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
              {" "}
              When creating an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your account and password. We reserve the right to suspend or terminate accounts at our discretion.
            </p>
          </article>
  
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Purchases and Payments</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            Our ordering process is designed to be simple and secure. We accept various payment methods, and all transactions are subject to applicable pricing, taxes, and shipping fees
            </p>
          </article>
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Return and Refund Policy</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            We accept returns and provide refunds under certain conditions. Please refer to our detailed return and refund policy for more information on how to initiate a return.
            </p>
          </article>
  
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Intellectual Property</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            All content on our website, including text, images, logos, and trademarks, is the property of Rural AgroCommerce. Unauthorized use of this content is prohibited.
            </p>
          </article>
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Disclaimers and Limitation of Liability</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            We provide our website and services `as is` and make no warranties regarding the content or functionality. Our liability is limited to the maximum extent permitted by law.
            </p>
    
          </article>
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Governing Law and Dispute Resolution</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            These terms are governed by the laws of Bangladesh. Any disputes will be resolved through arbitration or mediation as outlined in our dispute resolution policy.
            </p>
          </article>
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Third-Party Links</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            Our website may contain links to third-party sites. We are not responsible for the content or practices of these sites.
            </p>
          </article>
          <article className="text-justify p-2 md:p-7">
            <h2  className="text-lg md:text-4xl font-bold text-amber-800 py-2 md:py-5">Changes to Terms and Conditions</h2>
            <p className="text-xs md:text-xl font-medium pt-2 md:pt-3">
            We may update these terms and conditions periodically. Users will be notified of any changes via email or through a notice on our website.
            </p>
          </article>
        </div>
      </div>
    );
};

export default TermsConditions;