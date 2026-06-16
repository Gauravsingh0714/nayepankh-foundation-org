import { useState } from 'react';
import toast from 'react-hot-toast';
import { m } from 'framer-motion';
import { FiAlertCircle, FiSend } from 'react-icons/fi';
import { contactContent } from '../../data/content';
import PrimaryButton from '../Shared/PrimaryButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Helper validation states
  const nameTrimmed = formData.name.trim();
  const messageTrimmed = formData.message.trim();
  const isNameInvalid = touched.name && (!nameTrimmed || nameTrimmed.length < 2 || !/^[A-Za-z\s]+$/.test(nameTrimmed));
  const isEmailInvalid = touched.email && (!formData.email.trim() || !validateEmail(formData.email));
  const isMessageInvalid = touched.message && (!messageTrimmed || messageTrimmed.length < 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all as touched
    setTouched({ name: true, email: true, message: true });
    
    const { name, email, subject, message } = formData;
    const nameVal = name.trim();
    const messageVal = message.trim();

    if (!nameVal || nameVal.length < 2 || !/^[A-Za-z\s]+$/.test(nameVal)) {
      toast.error("Please enter a valid name (at least 2 letters, letters/spaces only).");
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      toast.error("Please enter a valid email address (e.g., name@domain.com).");
      return;
    }
    if (!messageVal || messageVal.length < 10) {
      toast.error("Your message must be at least 10 characters long.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        toast.success("Thank you! Your message was sent successfully.", {
          id: toastId,
          duration: 5000,
        });
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        setTouched({ name: false, email: false, message: false });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast.error("Oops! Something went wrong. Please try again.", {
          id: toastId,
          duration: 5000,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-surface-container-lowest dark:bg-background-dark px-margin-mobile md:px-margin-desktop border-b border-surface-variant/30 dark:border-white/5">
      <div className="max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Contact Details Column */}
          <div className="flex flex-col gap-8 text-left">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-container/10 text-primary dark:text-primary-container rounded-full font-label-md text-xs border border-primary-container/20 uppercase tracking-wider mb-3">
                Reach Out
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface dark:text-surface-light font-bold mb-4">
                {contactContent.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant leading-relaxed">
                {contactContent.subtitle}
              </p>
            </div>
            
            {/* Info details */}
            <div className="flex flex-col gap-6">
              {contactContent.info.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container/10 dark:bg-primary-container/20 flex items-center justify-center text-primary dark:text-primary-container shrink-0">
                    {item.icon && <item.icon className="text-2xl select-none" aria-hidden="true" />}
                  </div>
                  <div>
                    <h3 className="font-title-md text-base font-semibold text-on-surface dark:text-surface-light mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                        className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded px-0.5"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-surface-light dark:bg-surface-dark-elevation rounded-2xl p-8 shadow-sm border border-surface-variant dark:border-white/10 text-left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              
              {/* Full Name Input */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface dark:text-surface-light mb-2" htmlFor="name">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="E.g., John Doe"
                  className={`w-full bg-surface-container-lowest dark:bg-background-dark border rounded-lg px-4 py-3 text-on-surface dark:text-surface-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow ${
                    isNameInvalid 
                      ? 'border-error ring-1 ring-error/50' 
                      : 'border-outline-variant dark:border-white/10'
                  }`}
                  aria-required="true"
                  aria-invalid={isNameInvalid}
                  disabled={isSubmitting}
                />
                {isNameInvalid && (
                  <p className="text-xs text-error mt-1.5 flex items-center gap-1">
                    <FiAlertCircle className="text-[14px]" />
                    Please enter a valid name (at least 2 letters, letters/spaces only).
                  </p>
                )}
              </div>

              {/* Email Address Input */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface dark:text-surface-light mb-2" htmlFor="email">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="E.g., john@example.com"
                  className={`w-full bg-surface-container-lowest dark:bg-background-dark border rounded-lg px-4 py-3 text-on-surface dark:text-surface-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow ${
                    isEmailInvalid 
                      ? 'border-error ring-1 ring-error/50' 
                      : 'border-outline-variant dark:border-white/10'
                  }`}
                  aria-required="true"
                  aria-invalid={isEmailInvalid}
                  disabled={isSubmitting}
                />
                {isEmailInvalid && (
                  <p className="text-xs text-error mt-1.5 flex items-center gap-1">
                    <FiAlertCircle className="text-[14px]" />
                    Please enter a valid email address (e.g., name@domain.com).
                  </p>
                )}
              </div>

              {/* Subject Selection Box */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface dark:text-surface-light mb-2" htmlFor="subject">
                  Inquiry Category
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-lowest dark:bg-background-dark border border-outline-variant dark:border-white/10 rounded-lg px-4 py-3 text-on-surface dark:text-surface-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                  disabled={isSubmitting}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Volunteering Opportunities">Volunteering Opportunities</option>
                  <option value="Student Internships">Student Internships</option>
                  <option value="Partnership Collaboration">Partnership Collaboration</option>
                  <option value="Donation Support">Donation Support</option>
                </select>
              </div>

              {/* Message Input */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface dark:text-surface-light mb-2" htmlFor="message">
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('message')}
                  maxLength={500}
                  placeholder="Describe how we can help you..."
                  className={`w-full bg-surface-container-lowest dark:bg-background-dark border rounded-lg px-4 py-3 text-on-surface dark:text-surface-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow min-h-[120px] resize-y ${
                    isMessageInvalid 
                      ? 'border-error ring-1 ring-error/50' 
                      : 'border-outline-variant dark:border-white/10'
                  }`}
                  aria-required="true"
                  aria-invalid={isMessageInvalid}
                  disabled={isSubmitting}
                />
                <div className="flex justify-between items-center mt-1.5">
                  <div>
                    {isMessageInvalid && (
                      <p className="text-xs text-error flex items-center gap-1">
                        <FiAlertCircle className="text-[14px]" />
                        Please enter a message (at least 10 and up to 500 characters).
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-on-surface-variant dark:text-surface-variant font-mono">
                    {formData.message.length}/500 characters
                  </span>
                </div>
              </div>

              <PrimaryButton
                type="submit"
                className="mt-2 w-full sm:w-auto self-start"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Inquiries...' : 'Send Message'}
                <FiSend className="text-[18px] select-none" aria-hidden="true" />
              </PrimaryButton>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}


