import { useState } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxEUpfyHfUJ3UiPDsXMofdKLmAeV_QaVUZkzfqtqaVxHjerL3fO0PrR93MA8VMrYDb/exec";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScwNpvd5c1zwZq-sPs0Lkip7LmUtgKc2s8weVJC_ySDdvfGeQ/viewform?usp=dialog";

export default function CustomGoogleForm() {
  const [form, setForm] = useState({
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
  });

  const [message, setMessage] = useState({ text: "", isError: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateDate = (dateStr: string, fieldName: string): string | null => {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr.trim())) {
      return `Please enter ${fieldName} in DD/MM/YYYY format`;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage({ text: "Submitting...", isError: false });

    // Validate date formats
    const dobError = validateDate(form["Date of Birth"], "date of birth");
    const startDateError = validateDate(form["Preferred Start Date"], "preferred start date");
    
    if (dobError || startDateError) {
      setMessage({ text: dobError || startDateError || "", isError: true });
      return;
    }

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          ...form,
          "Date of Birth": form["Date of Birth"].trim(),
          "Preferred Start Date": form["Preferred Start Date"].trim()
        }),
        headers: { "Content-Type": "application/json" },
      });
      
      const data = await res.json();
      if (data.success) {
        setMessage({ text: "Registration successful!", isError: false });
        // Reset form after successful submission
        setForm({
          ...form,
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
        });
      } else {
        setMessage({ text: data.error || "Submission failed", isError: true });
      }
    } catch (err) {
      setMessage({ text: "Network error. Please try again.", isError: true });
    }
  };

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">First Name*</label>
          <input
            type="text"
            name="First Name"
            value={form["First Name"]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last Name*</label>
          <input
            type="text"
            name="Last Name"
            value={form["Last Name"]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Email Address*</label>
        <input
          type="email"
          name="Email Address"
          value={form["Email Address"]}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone number*</label>
        <input
          type="tel"
          name="Phone number"
          value={form["Phone number"]}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Select a program*</label>
        <select
          name="Select a program"
          value={form["Select a program"]}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select...</option>
          <option value="Program 1">Program 1</option>
          <option value="Program 2">Program 2</option>
          <option value="Program 3">Program 3</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Date of Birth (DD/MM/YYYY)*</label>
          <input
            type="text"
            name="Date of Birth"
            placeholder="DD/MM/YYYY"
            value={form["Date of Birth"]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Preferred Start Date (DD/MM/YYYY)*</label>
          <input
            type="text"
            name="Preferred Start Date"
            placeholder="DD/MM/YYYY"
            value={form["Preferred Start Date"]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">District*</label>
        <input
          type="text"
          name="District"
          value={form["District"]}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Gender*</label>
        <select
          name="Gender"
          value={form["Gender"]}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Relevant Experience</label>
        <textarea
          name="Relevant Experience"
          value={form["Relevant Experience"]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Why do you want to join this program?*</label>
        <textarea
          name="Why do you want to join this program"
          value={form["Why do you want to join this program"]}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
          rows={4}
        />
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition flex-1"
        >
          Submit Application
        </button>
        
        <a
          href="#register"
          onClick={handleRegisterClick}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition flex-1 text-center"
        >
          Register Now
        </a>
      </div>

      {message.text && (
        <div className={`p-3 rounded ${message.isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message.text}
        </div>
      )}
    </form>
  );
}