import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 p-6">
      <h1 className="text-3xl web-medium mb-[40px] font-bold text-purple-900">About Us</h1>
      <p className="text-lg my-4">Welcome to <span className='text-purple-900'>Fontasie</span>!  Your favourite Web animation Manager. We specialize in creating visually stunning text animations using the latest web technologies.</p>
      <p className="text-lg my-4">Our team of designers and developers have extensive experience in creating custom animations that will make your website or application stand out. Whether you're looking to add some flair to your landing page or want to create an immersive experience for your users, we've got you covered.</p>
      <p className="text-lg my-4">We use a variety of tools and techniques to create our animations, including CSS, JavaScript, and the latest animation libraries. Our animations are also fully responsive, so they'll look great on any device.</p>
      <p className="text-lg my-4 mt-[40px]">Thank you for visiting our site. We hope you enjoy our animations as much as we enjoyed creating them.</p>
    </div>
  );
};

export default AboutPage;