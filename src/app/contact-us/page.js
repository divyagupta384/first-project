"use client";
// import React from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// const ContactUs = () => {
//   return (
//     <div>
//       <Header />
//       <div>
//         <form></form>
//       </div>
//       <div className="flex flex-col items-center space-y-6 py-10">
//         <div className="w-full max-w-lg space-y-4">
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               id="name"
// onchange={(event) => handleChange("name", event.target.value)}
//               placeholder="Enter your name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label>Phone No</label>
//             <input
//               type="phone no"
//               id="phone "
//               placeholder="+91 78XXXXXX67"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <label>Decription</label>
//             <textarea
//               id="message"
//               placeholder="type here..."
//               rows="4"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             ></textarea>
//           </div>
//           <button className="border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-l ml-4 mt-4 ">
//             Submit Form
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;

// import  as React from "react";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// // import { useFormik } from "formik";

// const ContactUs = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//     // onSubmit: (values) => {
//     //   console.log(values);
//     // },
//   });

//   return (
//     <></>
//     // <div>
//     //   <Header />
//     //   <form onSubmit={formik.handleSubmit}>
//     //     <label htmlFor="name">Name</label>
//     //     <input
//     //       id="name"
//     //       type="text"
//     //       placeholder="Enter your name"
//     //       onChange={formik.handleChange}
//     //       value={formik.values.name}
//     //     />
//     //     <label htmlFor="email">Email Address</label>
//     //     <input
//     //       id="email"
//     //       type="email"
//     //       placeholder="Enter your email"
//     //       onChange={formik.handleChange}
//     //       value={formik.values.email}
//     //     />
//     //     <label htmlFor="phone">Phone Number</label>
//     //     <input
//     //       id="phone"
//     //       type="text"
//     //       placeholder="+91 78XXXXXX35"
//     //       onChange={formik.handleChange}
//     //       value={formik.values.number}
//     //     />
//     //     <button type="submit">Submit</button>
//     //   </form>
//     //   <Footer />
//     // </div>
//   );
// };
// export default ContactUs;

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form:", formData);
  };
  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmit} />
        <div className="flex flex-col items-center space-y-6 py-10">
          <div className="w-full max-w-lg space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label>Phone No</label>
              <input
                type="phone"
                id="phone "
                placeholder="+91 78XXXXXX67"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label>Decription</label>
              <textarea
                id="message"
                placeholder="type here..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button className="border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-l ml-4 mt-4 ">
              Submit Form
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
