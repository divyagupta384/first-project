import React from 'react';

const Footer = () => {
  return (
    <div className=" text-grey py-9">
      <div className="text-center">
        <p className='m-0'>&copy; {new Date().getFullYear()}TouchWood.All rights reserved | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
