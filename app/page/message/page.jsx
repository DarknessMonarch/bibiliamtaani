"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";
import styles from "@/app/style/message.module.css";

import {
  UserIcon as UserNameIcon,
  EnvelopeIcon as EmailIcon,
} from "@heroicons/react/24/outline";

export default function Message() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function onSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/users/send/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.formContactContainer}>
    
      <div className={styles.contactWrapinfo}>
      <div className={styles.contactInfo}>
        <h1>Contact us</h1>
        <p>Feel free to contact us anytime and we will get back to you</p>
      </div>
        {/* Email */}
        <div className={styles.contactInputContainer}>
          <div className={styles.contactInput}>
            <EmailIcon
              className={styles.contactIcon}
              alt="email icon"
              height={20}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="bibiliamtaani@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>
        {/* Message */}
        <div className={styles.contactInputContainer}>
          <div className={styles.contactInput}>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          {errors.message && (
            <p className={styles.errorText}>{errors.message}</p>
          )}
        </div>
        <div className={styles.formcontactBtnWrapper}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formcontactButton}
          >
            {isLoading ? <Loader /> : "Contact Us"}
          </button>
        </div>
      </div>
    </form>
  );
}
