import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate} from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';

const Checkout: FC = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
  document.querySelectorAll("input, textarea, select").forEach((el) => {
    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement
    ) {
      el.required = true;
    }
  });
}, [])

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  if(form.checkValidity()) {
    toast.success("Form submitted successfully!");
    setTimeout(() => {
      navigate('/');
    }, 3000);
  } 
};


    return (
    <main className={`min-h-screen w-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
        {/* Billing Info Section */}
        <div className={`rounded-lg shadow-md p-6 md:p-8 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Billing Info</h1>
              <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Please enter your billing info</p>
            </div>
            <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Step 1 of 4</div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="address" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>

                {/* Town / City Field */}
                <div>
                  <label htmlFor="city" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Town or city"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Info Section */}
        <div className={`rounded-lg shadow-md p-6 md:p-8 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Rental Info</h1>
              <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Please select your rental date</p>
            </div>
            <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Step 2 of 4</div>
          </div>

          {/* Rental Form */}
          <div className="space-y-8">
            {/* Pick-Up Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <input type="radio" checked readOnly className="w-4 h-4 text-blue-600" />
                <label className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Pick - Up</label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Locations */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Locations</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select your city"
                      readOnly
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                      }`}
                    />
                    <svg 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select your date"
                      readOnly
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                      }`}
                    />
                    <svg 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Time */}
                <div className="md:col-span-2">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Time</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select your time"
                      readOnly
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                      }`}
                    />
                    <svg 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <input type="radio" readOnly className="w-4 h-4 text-blue-600" />
                <label className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Drop - Off</label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Locations */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Locations</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select your city"
                      readOnly
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                      }`}
                    />
                    <svg 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select your date"
                      readOnly
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                      }`}
                    />
                    <svg 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Time */}
                <div className="md:col-span-2">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Time</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select your time"
                      readOnly
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                          : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                      }`}
                    />
                    <svg 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Payment Method Section */}
        <div className={`rounded-lg shadow-md p-6 md:p-8 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Payment Method</h1>
              <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Please enter your payment method</p>
            </div>
            <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Step 3 of 4</div>
          </div>

          {/* Payment Options */}
          <div className="space-y-6">
            {/* Credit Card Option */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <input type="radio" name="payment" value="credit" defaultChecked className="w-4 h-4 text-blue-600" />
                <label className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Credit Card</label>
              </div>

              {/* Credit Card Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Card Number</label>
                  <input
                    type="text"
                    placeholder="Card number"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Expiration Date</label>
                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Card Holder</label>
                  <input
                    type="text"
                    placeholder="Card holder"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>CVC</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400' 
                        : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                    }`}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Confirmation Section */}
        <div className={`rounded-lg shadow-md p-6 md:p-8 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Confirmation</h1>
              <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>We are getting to the end. Just few clicks and your rental is ready!</p>
            </div>
            <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Step 4 of 4</div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Marketing Checkbox */}
              <div className={`flex items-start gap-3 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <input 
                  type="checkbox" 
                  id="marketing" 
                  name="marketing"
                  className={`mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}
                />
                <label htmlFor="marketing" className={`text-sm cursor-pointer ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I agree with sending an Marketing and newsletter emails. No spam, promissed!
                </label>
              </div>

              {/* Terms Checkbox */}
              <div className={`flex items-start gap-3 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms"
                  className={`mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}
                />
                <label htmlFor="terms" className={`text-sm cursor-pointer ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            {/* Security Section */}
            <div className={`flex items-start gap-3 pt-6 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <div>
                <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>All your data are safe</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>We are using the most advanced security to provide you the best experience ever.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Link 
            to="/car-details" 
            className={`px-6 py-2 border rounded-md transition-colors ${
              isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Back
          </Link>
          <button 
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Rent Now
          </button>
        </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;

