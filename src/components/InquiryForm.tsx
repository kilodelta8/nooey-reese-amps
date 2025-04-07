// src/components/InquiryForm.tsx
import { useState, ChangeEvent, FormEvent, useEffect, JSX } from 'react';
import '../css/InquiryForm.css'; 

// --- Constants ---
const DESCRIPTION_MAX_LENGTH = 500;

// --- Interfaces ---
interface FormData {
  name: string;
  phone: string;
  email: string;
  make: string;
  model: string;
  description: string;
}

// Type for validation errors - Partial makes all keys optional
type FormErrors = Partial<Record<keyof FormData, string>> & { // Use Record for general field errors
    descriptionLength?: string; // Specific error for length check
};


// --- Helper Functions ---

// Basic Email Validation Regex
const isValidEmail = (email: string): boolean => {
  // Simple regex, consider a more robust one for production if needed
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Basic Phone Validation Regex (Allows digits, spaces, (), -, . and requires at least 7 digits)
const isValidPhone = (phone: string): boolean => {
    const digitCount = phone.replace(/\D/g, '').length;
    return /^[0-9\s().-]{7,}$/.test(phone) && digitCount >= 7;
};


// --- Component ---
function InquiryForm(): JSX.Element {
  // --- State ---
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    make: '',
    model: '',
    description: '',
  });

  // Add this state to store uploaded files
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [descriptionLength, setDescriptionLength] = useState(0);

  // --- Effects ---
  // Update character count when description changes
  useEffect(() => {
    setDescriptionLength(formData.description.length);
  }, [formData.description]);

  // --- Validation Logic ---
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number (at least 7 digits)';
    }
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.make.trim()) newErrors.make = 'Make is required';
    if (!formData.model.trim()) newErrors.model = 'Model is required';
    if (!formData.description.trim()) {
        newErrors.description = 'Description is required';
    } else if (formData.description.length > DESCRIPTION_MAX_LENGTH) {
        // Specific check even though textarea has maxLength
        newErrors.descriptionLength = `Description cannot exceed ${DESCRIPTION_MAX_LENGTH} characters.`;
    }


    return newErrors;
  };

  // --- Event Handlers ---
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    // Optionally clear the error for the field being edited
    if (errors[name as keyof FormData] || (name === 'description' && errors.descriptionLength)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
        ...(name === 'description' && { descriptionLength: undefined }) // Clear length error too if description changes
      }));
    }
  };

  // Add this handler for file input changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files)); // Convert FileList to an array
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('idle'); // Reset status on new attempt

    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation failed:", validationErrors);
      return; // Stop submission if validation fails
    }

    // If validation passes:
    console.log("Validation passed. Form data:", formData);
    setStatus('sending');

    // --- Email Sending Logic (Replace with your actual implementation) ---
    try {
      // Example using fetch with a third-party service like Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { // <-- Replace YOUR_FORM_ID
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submission successful!");
        setStatus('success');
        // Clear form
        setFormData({ name: '', phone: '', email: '', make: '', model: '', description: '' });
        setErrors({}); // Clear errors as well
      } else {
        console.error("Form submission failed with status:", response.status);
        setStatus('error');
         // Optionally parse server error response here
      }
    } catch (error) {
      console.error("Network error sending form:", error);
      setStatus('error');
    }
    // --- End of Email Sending Logic ---
  };

  // --- JSX ---
  return (
    <form onSubmit={handleSubmit} className="inquiry-form container" noValidate> {/* noValidate disables default browser validation bubbles */}
      {/* General Submission Status Messages */}
       {status === 'success' && <p className="status-message success">Thank you! Your inquiry has been sent.</p>}
       {status === 'error' && <p className="status-message error">Something went wrong sending your message. Please try again or contact us directly.</p>}

      {/* -- Name Field -- */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.name} // Accessibility hint for screen readers
          aria-describedby={errors.name ? "name-error" : undefined}
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <p id="name-error" className="error-message">{errors.name}</p>}
      </div>

      {/* -- Phone Field -- */}
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel" // Use type="tel" for semantic meaning and mobile keyboards
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={errors.phone ? 'input-error' : ''}
          placeholder="(555) 123-4567"
        />
        {errors.phone && <p id="phone-error" className="error-message">{errors.phone}</p>}
      </div>

      {/* -- Email Field -- */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email" // Use type="email" for semantic meaning and basic browser checks
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? 'input-error' : ''}
          placeholder="your.email@example.com"
        />
        {errors.email && <p id="email-error" className="error-message">{errors.email}</p>}
      </div>

      {/* -- Make Field -- */}
      <div className="form-group">
        <label htmlFor="make">Make (e.g., Fender, Zenith, Custom):</label>
        <input
          type="text"
          id="make"
          name="make"
          value={formData.make}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.make}
          aria-describedby={errors.make ? "make-error" : undefined}
          className={errors.make ? 'input-error' : ''}
        />
        {errors.make && <p id="make-error" className="error-message">{errors.make}</p>}
      </div>

      {/* -- Model Field -- */}
      <div className="form-group">
        <label htmlFor="model">Model (e.g., Deluxe Reverb, H500, N/A):</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.model}
          aria-describedby={errors.model ? "model-error" : undefined}
          className={errors.model ? 'input-error' : ''}
        />
        {errors.model && <p id="model-error" className="error-message">{errors.model}</p>}
      </div>

      {/* -- Description Field -- */}
      <div className="form-group">
        <label htmlFor="description">Description of Inquiry / Issue:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={6}
          maxLength={DESCRIPTION_MAX_LENGTH} // Browser-level limit
          aria-required="true"
          aria-invalid={!!errors.description || !!errors.descriptionLength}
          aria-describedby={ errors.description ? "description-error" : errors.descriptionLength ? "description-length-error" : "description-counter" }
          className={(errors.description || errors.descriptionLength) ? 'input-error' : ''}
        ></textarea>
         {/* Character Counter & Errors */}
        <div className="textarea-footer">
            {errors.description && <p id="description-error" className="error-message">{errors.description}</p>}
            {errors.descriptionLength && <p id="description-length-error" className="error-message">{errors.descriptionLength}</p>}
            <span id="description-counter" className={`char-counter ${descriptionLength > DESCRIPTION_MAX_LENGTH ? 'over-limit' : ''}`}>
                {descriptionLength}/{DESCRIPTION_MAX_LENGTH}
            </span>
        </div>
      </div>

      {/* -- Input Field for Pics -- */}
      <div className="form-group">
        <label htmlFor="pictures">Upload Pictures (optional):</label>
        <input
          type="file"
          id="pictures"
          name="pictures"
          accept="image/*" // Restrict to image files
          multiple // Allow multiple file uploads
          onChange={handleFileChange}
        />
        {uploadedFiles.length > 0 && (
          <ul className="uploaded-files-list">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* -- Submit Button -- */}
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
      </button>

    </form>
  );
}

export default InquiryForm;