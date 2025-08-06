import { useState } from 'react';
import { Home, Users, FormInput, MapPin, Phone, Mail, Briefcase, Award, GraduationCap, Star, X } from 'lucide-react';
import './App.css';

// Main App component that handles navigation and rendering different pages.
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [message, setMessage] = useState('');
  
  // A simple utility to create a custom modal for messages instead of `alert()`.
  const MessageBox = ({ message, onClose }) => {
    if (!message) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[100] p-4 transition-opacity duration-300">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg w-full relative transform scale-100 transition-transform duration-300">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <X size={24} />
          </button>
          <p className="text-gray-800 text-xl font-semibold text-center mb-4">{message}</p>
        <button onClick={onClose} className="mt-2 w-full bg-indigo-700 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-800 transition-colors duration-300">
          Dismiss
        </button>
      </div>
    </div>
  );
};
  
  // The Home Page component
  const HomePage = () => {
    return (
      <div className="space-y-16">
        {/* Hero Section with background image */}
        <section 
          className="relative bg-center bg-cover bg-no-repeat rounded-3xl shadow-xl overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center"
          style={{ backgroundImage: "url('https://bastikipathshala.org/wp-content/uploads/2024/02/IMG-20240216-WA0047-576x1024.jpg')" }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          {/* Content over the image */}
          <div className="relative z-10 container mx-auto px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Building a Brighter Future, One Child at a Time
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto mb-10">
              At Basti Ki Pathshala, we are committed to breaking the cycle of poverty by providing quality education and resources to underprivileged children in slum areas.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <button
                onClick={() => setCurrentPage('about')}
                className="bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-indigo-800 transform hover:scale-105 transition-all duration-300"
              >
                Our Mission
              </button>
              <button
                onClick={() => setCurrentPage('volunteer')}
                className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300"
              >
                Support Our Work
              </button>
            </div>
          </div>
        </section>
  
        {/* Our Programs Section */}
        <section className="bg-indigo-700 text-white rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Our Core Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
              <GraduationCap size={60} className="text-indigo-700 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Academic Support</h3>
              <p className="text-gray-600">
                We provide essential after-school tutoring and educational resources to help students build a strong academic foundation.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Briefcase size={60} className="text-indigo-700 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Skills Training</h3>
              <p className="text-gray-600">
                Our vocational programs equip youth with practical skills, increasing their opportunities for employment and financial independence.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Award size={60} className="text-indigo-700 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Community Advocacy</h3>
              <p className="text-gray-600">
                We work with communities to advocate for better living conditions and resources, ensuring a holistic environment for children.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  // The About Us component
  const AboutUs = () => {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 border-b-4 border-indigo-500 pb-4">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to empower underprivileged children by providing access to quality education, healthcare, and sustainable living resources. We believe in creating a world where every child has the opportunity to thrive.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is a future where all children, regardless of their background, can live with dignity and reach their full potential. We strive to be a catalyst for positive, lasting change.
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 border-b-4 border-indigo-500 pb-4">Contact Us</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="flex items-start space-x-4 p-6 bg-indigo-50 rounded-2xl shadow-md">
            <MapPin size={32} className="text-indigo-700 mt-1" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Address</h4>
              <p className="text-gray-600">Please provide address from the website</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-indigo-50 rounded-2xl shadow-md">
            <Phone size={32} className="text-indigo-700 mt-1" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Phone</h4>
              <p className="text-gray-600">Please provide phone number from the website</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-indigo-50 rounded-2xl shadow-md">
            <Mail size={32} className="text-indigo-700 mt-1" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Email</h4>
              <p className="text-gray-600">contact@bastikipathshala.org</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // The Volunteer Form component
  const VolunteerForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simple validation
      if (!formData.name || !formData.email) {
        setMessage('Please fill in your name and email.');
        return;
      }
  
      // Log the data to the console for demonstration
      console.log('Form Submitted!', formData);
      setMessage('Thank you for your interest! We will get in touch with you shortly.');
  
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Join the Basti Ki Pathshala Family</h2>
        <p className="text-lg text-gray-600 mb-8">
          Fill out the form below to become a part of our mission as an educator, community organizer, or social impact contributor. We will get in touch with you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-5 py-3 border-2 border-gray-200 rounded-xl shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-5 py-3 border-2 border-gray-200 rounded-xl shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">
              Tell us why you want to join our team
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-5 py-3 border-2 border-gray-200 rounded-xl shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="I am passionate about..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-xl hover:bg-indigo-800 transform hover:scale-105 transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'volunteer':
        return <VolunteerForm />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900 min-h-screen flex flex-col">
      <MessageBox message={message} onClose={() => setMessage('')} />
      
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <a href="#" className="flex items-center space-x-3 text-3xl font-extrabold text-indigo-800 mb-4 sm:mb-0">
            <img
              src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti-Ki-Pathshala-Official-Logo.jpg"
              alt="Basti Ki Pathshala Official Logo"
              className="w-10 h-10 rounded-full"
              onError={(e) => {
                e.target.src = 'https://placehold.co/40x40/2563eb/ffffff?text=Logo';
              }}
            />
            <span>Basti Ki Pathshala</span>
          </a>
          <ul className="flex space-x-4 md:space-x-8 text-lg font-medium">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  currentPage === 'home' ? 'text-indigo-700 bg-indigo-100 font-bold shadow-inner' : 'text-gray-600 hover:text-indigo-700 hover:bg-indigo-50'
                }`}
              >
                <Home size={20} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  currentPage === 'about' ? 'text-indigo-700 bg-indigo-100 font-bold shadow-inner' : 'text-gray-600 hover:text-indigo-700 hover:bg-indigo-50'
                }`}
              >
                <Users size={20} />
                <span>About Us</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('volunteer')}
                className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  currentPage === 'volunteer' ? 'text-indigo-700 bg-indigo-100 font-bold shadow-inner' : 'text-gray-600 hover:text-indigo-700 hover:bg-indigo-50'
                }`}
              >
                <FormInput size={20} />
                <span>Volunteer</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
  
      <main className="flex-grow p-4 md:p-12">
        {renderPage()}
      </main>
  
      <footer className="bg-gray-800 text-gray-300 py-10 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
