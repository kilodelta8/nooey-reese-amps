// src/pages/ContactPage.tsx
import { JSX } from 'react';
import InquiryForm from '../components/InquiryForm'; // Adjust path if needed
import '../css/ContactPage.css'; // Optional: for specific contact page styling

function ContactPage(): JSX.Element {
  return (
    <div className="contact-page">
      <h1>Contact Us for Service or Inquiries</h1>

      <p className="contact-instructions">
        {/* Replace or refine this instructional text */}
        Ready to discuss a custom build, repair, or restoration? Please fill out the form below. To help us serve you best, include the **make and model** of your amplifier or radio, and provide a detailed **description** of the issue or your requirements. We'll get back to you as soon as possible.
      </p>

      {/* Render the enhanced Inquiry Form */}
      <InquiryForm />

      {/* You might also want to add other contact methods */}
      <div className="alternative-contact">
          <h2>Other Ways to Reach Us</h2>
          <p>If you prefer, you can also reach out directly:</p>
          <p><strong>Email:</strong> your-email@example.com</p>
          <p><strong>Phone:</strong> (555) 123-4567 (Please leave a message if we can't answer)</p>
          {/* Add address or hours if applicable */}
      </div>
    </div>
  );
}

export default ContactPage;