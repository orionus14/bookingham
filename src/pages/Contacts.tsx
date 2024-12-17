import React, { useState } from 'react';
import H1Text from '../components/H1Text';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="p-12">
      <H1Text text="Contact Us" />

      <div className="mt-8 space-y-6">
        <div className="flex items-center space-x-4">
          <MapPin className="text-blue-600" size={24} />
          <div>
            <h3 className="text-xl font-semibold">Our Location</h3>
            <p>123 Book St, Booktown, BT 4567</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Phone className="text-blue-600" size={24} />
          <div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p>(123) 456-7890</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Mail className="text-blue-600" size={24} />
          <div>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p>contact@bookingham.com</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>
        {formSubmitted ? (
          <div className="text-center text-green-600">
            <p>Thank you for reaching out! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                rows={4}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Location</h2>
        <div className="w-full h-64 bg-gray-300 rounded-lg">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.148133801715!2d-74.0060152843456!3d40.71277597933013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2f40cbf405%3A0x6cf0a42367baf1bc!2sNew%20York%20Public%20Library!5e0!3m2!1sen!2sus!4v1623904951600!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;