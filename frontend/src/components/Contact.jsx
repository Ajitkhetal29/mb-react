import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    choice: "",
    location: "",
    number: "",
  });

  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm("service_3qxauyp", "template_pvmnnin", formRef.current, "GoZgeEbgB3GxueDMC");
      console.log("email sent");
    } catch (error) {
      console.log(error);
    }

    setShowContactForm(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactForm(true);
      console.log("Form opened");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
          showContactForm ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Dark backdrop */}
        <div
          onClick={() => setShowContactForm(false)}
          className="absolute inset-0 bg-black/50"
        ></div>

        {/* Modal content */}
        <div
          className={`bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] 
                max-w-md max-h-[80vh] overflow-y-auto relative transform 
                transition-all duration-500 ${
                  showContactForm
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                } p-4 sm:p-6 md:p-8`}
        >
          {/* Logo */}
          <div className="flex items-center justify-end mb-2 sm:mb-4">
            <img
              src="img/logo/logo.png"
              className="w-20 sm:w-24 md:w-28"
              alt="Logo"
            />
          </div>

          <h2 className="text-xl sm:text-2xl text-center oswald_span mb-2">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base mb-4 text-center maven-pro">
            Please enter the details below to get in touch with us
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3 sm:mb-4 ">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-1 maven-pro"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                onChange={handleFormdata}
                className="shadow border maven-pro rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Email */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-1 maven-pro"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@domain.com"
                onChange={handleFormdata}
                className="shadow border maven-pro rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Contact Number */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="number"
                className="block text-gray-700 text-sm font-bold mb-1 maven-pro"
              >
                Contact No:
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                required
                placeholder="e.g. 9876543210"
                onChange={handleFormdata}
                className="shadow border rounded maven-pro w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Project Choice */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="choice"
                className="block text-gray-700  text-sm font-bold mb-1 maven-pro"
              >
                Project:
              </label>
              <select
                name="choice"
                id="choice"
                required
                onChange={handleFormdata}
                className="shadow border maven-pro rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Project</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="1+1 JODI">1+1 JODI</option>
              </select>
            </div>

            {/* Location */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="location"
                className="block maven-pro text-gray-700 text-sm font-bold mb-1 maven-pro"
              >
                Location:
              </label>
              <select
                name="location"
                id="location"
                required
                onChange={handleFormdata}
                className="shadow border maven-pro rounded w-full py-2 px-3 maven-pro text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a location</option>
                <option value="Bhayandar East">Bhayandar East</option>
                <option value="Bhayandar West">Bhayandar West</option>
                <option value="Mira road">Mira Road</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-1 maven-pro"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message in brief"
                onChange={handleFormdata}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-black maven-pro cursor-pointer text-black  hover:text-white  py-1 px-4 rounded border border-black "
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={() => setShowContactForm(false)}
                className="bg-red-500 hover:bg-black maven-pro text-black cursor-pointer hover:text-white  py-1 px-4 rounded border border-black "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
