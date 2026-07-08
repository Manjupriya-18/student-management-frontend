import React from "react";

import {

FaMapMarkerAlt,

FaEnvelope,

FaPhone

}

from "react-icons/fa";

const Contact=()=>{

return(

<section
  id="contact"
  className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-100"
>
  <div className="max-w-7xl mx-auto px-10">

    <h1 className="text-5xl font-bold text-center mb-4">
      Get In Touch
    </h1>

    <p className="text-center text-gray-600 mb-16">
      Have questions? We'd love to hear from you.
    </p>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Left Side */}
      <div className="space-y-6">

        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt
              className="text-blue-600"
              size={28}
            />
            <div>
              <h3 className="font-semibold text-lg">
                Address
              </h3>
              <p className="text-gray-600">
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4">
            <FaEnvelope
              className="text-green-600"
              size={28}
            />
            <div>
              <h3 className="font-semibold text-lg">
                Email
              </h3>
              <p className="text-gray-600">
                support@edumanage.com
              </p>
            </div>
          </div>
        </div>

       

      </div>

      {/* Right Side Form */}
      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Send Message
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>

        </div>

      </div>

    </div>

  </div>
</section>

);

};

export default Contact;