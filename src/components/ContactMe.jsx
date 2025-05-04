import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us, " + formData.name + "!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 mt-10">
            <h2 className="text-3xl font-bold text-teal-700 text-center mb-6">Contact Me</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-teal-500" />
                        <span>Travel Mate HQ, Faridabad, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-teal-500" />
                        <span>+91 9643359747</span>
                    </div>
                    <div className="flex align-left flex-col gap-3">
                        <div className="flex items-center gap-3">
                        <FaEnvelope className="text-teal-500" />
                        <span>contact@travelmate.com</span>
                        </div>
                        <img
                            src="../../public/App.png"
                            alt="Contact Us"
                            className="w-32 h-32 mt-4 mx-auto"
                        />
                    </div>
                </div>




                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
