import { useState } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxEUpfyHfUJ3UiPDsXMofdKLmAeV_QaVUZkzfqtqaVxHjerL3fO0PrR93MA8VMrYDb/exec";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScwNpvd5c1zwZq-sPs0Lkip7LmUtgKc2s8weVJC_ySDdvfGeQ/viewform?usp=dialog";

export default function CustomGoogleForm() {
  const initialFormState = {
    "Timestamp": new Date().toISOString(),
    "First Name": "",
    "Last Name": "",
    "Email Address": "",
    "Phone number": "",
    "Select a program": "",
    "Preferred Start Date": "",
    "Relevant Experience": "",
    "Why do you want to join this program": "",
    "Gender": "",
    "Date of Birth": "",
    "District": ""
  };

  const [form, setForm] = useState(initialFormState);
  const [message, setMessage] = useState({ text: "", isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validateDate = (dateStr: string): boolean => {
    // Accepts DD/MM/YYYY, DD-MM-YYYY, or DD.MM.YYYY
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[0-2])[\/\-\.](\d{4})$/;
    return dateRegex.test(dateStr.trim());
  };

  const formatDate = (dateStr: string): string => {
    // Standardize to DD/MM/YYYY format for backend
    return dateStr.replace(/[\/\-\.]/g, '/');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "Submitting...", isError: false });

    // Client-side validation
    if (!form["Date of Birth"] || !validateDate(form["Date of Birth"])) {
      setMessage({ text: "Please enter a valid Date of Birth (DD/MM/YYYY)", isError: true });
      setIsSubmitting(false);
      return;
    }

    if (!form["Preferred Start Date"] || !validateDate(form["Preferred Start Date"])) {
      setMessage({ text: "Please enter a valid Preferred Start Date (DD/MM/YYYY)", isError: true });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        ...form,
        "Date of Birth": formatDate(form["Date of Birth"]),
        "Preferred Start Date": formatDate(form["Preferred Start Date"])
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();

      if (result.success) {
        setMessage({ text: "Registration successful!", isError: false });
        setForm({ ...initialFormState, Timestamp: new Date().toISOString() });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      setMessage({ 
        text: error instanceof Error ? error.message : "An unexpected error occurred",
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name*</label>
          <input
            type="text"
            name="First Name"
            value={form["First Name"]}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name*</label>
          <input
            type="text"
            name="Last Name"
            value={form["Last Name"]}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Email Address*</label>
        <input
          type="email"
          name="Email Address"
          value={form["Email Address"]}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Phone number*</label>
        <input
          type="tel"
          name="Phone number"
          value={form["Phone number"]}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Program Selection */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Select a program*</label>
        <select
          name="Select a program"
          value={form["Select a program"]}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a program...</option>
          <option value="Program 1">Program 1</option>
          <option value="Program 2">Program 2</option>
          <option value="Program 3">Program 3</option>
        </select>
      </div>

      {/* Date Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Date of Birth (DD/MM/YYYY)*</label>
          <input
            type="text"
            name="Date of Birth"
            placeholder="DD/MM/YYYY"
            value={form["Date of Birth"]}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Preferred Start Date (DD/MM/YYYY)*</label>
          <input
            type="text"
            name="Preferred Start Date"
            placeholder="DD/MM/YYYY"
            value={form["Preferred Start Date"]}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">District*</label>
        <input
          type="text"
          name="District"
          value={form["District"]}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Gender*</label>
        <select
          name="Gender"
          value={form["Gender"]}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      {/* Experience */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Relevant Experience</label>
        <textarea
          name="Relevant Experience"
          value={form["Relevant Experience"]}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Motivation */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Why do you want to join this program?*</label>
        <textarea
          name="Why do you want to join this program"
          value={form["Why do you want to join this program"]}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
            isSubmitting 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        
        <a
          href="#register"
          onClick={handleRegisterClick}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md text-center transition-colors"
        >
          Register Now
        </a>
      </div>

      {/* Status Message */}
      {message.text && (
        <div className={`p-3 rounded-md ${
          message.isError 
            ? 'bg-red-100 text-red-700 border border-red-200' 
            : 'bg-green-100 text-green-700 border border-green-200'
        }`}>
          {message.text}
        </div>
      )}
    </form>
  );
}