import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import "./EnquiryForm.css";

import { communities } from "../../data/communities";

import type {
  EnquiryData,
  EnquiryErrors,
} from "../../types/enquiry";

import {
  validateEnquiry,
  validateField,
} from "../../utils/validation";

const initialFormData: EnquiryData = {
  fullName: "",
  email: "",
  phone: "",
  community: "",
  moveInDate: "",
  message: "",
};

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function EnquiryForm() {
  const [formData, setFormData] =
    useState<EnquiryData>(initialFormData);

  const [errors, setErrors] =
    useState<EnquiryErrors>({});

  const [submittedEnquiry, setSubmittedEnquiry] =
    useState<EnquiryData | null>(null);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    const fieldName = name as keyof EnquiryData;

    setFormData((currentData) => ({
      ...currentData,
      [fieldName]: value,
    }));

    if (errors[fieldName]) {
      const error = validateField(fieldName, value);

      setErrors((currentErrors) => ({
        ...currentErrors,
        [fieldName]: error || undefined,
      }));
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const validationErrors =
      validateEnquiry(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Submitted enquiry:", formData);

    setSubmittedEnquiry(formData);
  }

  function handleNewEnquiry() {
    setFormData(initialFormData);
    setErrors({});
    setSubmittedEnquiry(null);
  }

  if (submittedEnquiry) {
    return (
      <section
        className="enquiry"
        id="enquiry"
        aria-labelledby="enquiry-title"
      >
        <div className="enquiry__container">
          <div
            className="enquiry__success"
            role="status"
          >
            <p className="enquiry__eyebrow">
              Enquiry received
            </p>

            <h2 id="enquiry-title">
              Thanks, {submittedEnquiry.fullName}.
            </h2>

            <p>
              We've received your enquiry about{" "}
              <strong>
                {submittedEnquiry.community}
              </strong>
              . Our team will be in touch soon.
            </p>

            <button
              className="enquiry__new-enquiry"
              type="button"
              onClick={handleNewEnquiry}
            >
              Send another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="enquiry"
      id="enquiry"
      aria-labelledby="enquiry-title"
    >
      <div className="enquiry__container">
        <div className="enquiry__intro">
          <p className="enquiry__eyebrow">
            Find your next home
          </p>

          <h2
            className="enquiry__title"
            id="enquiry-title"
          >
            Start your enquiry.
          </h2>

          <p className="enquiry__description">
            Tell us a little about what you're looking
            for and our team will be in touch.
          </p>
        </div>

        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-field">
            <label htmlFor="fullName">
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              aria-invalid={
                errors.fullName ? "true" : "false"
              }
              aria-describedby={
                errors.fullName
                  ? "fullName-error"
                  : undefined
              }
            />

            {errors.fullName && (
              <p
                className="form-field__error"
                id="fullName-error"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={
                errors.email ? "true" : "false"
              }
              aria-describedby={
                errors.email
                  ? "email-error"
                  : undefined
              }
            />

            {errors.email && (
              <p
                className="form-field__error"
                id="email-error"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-invalid={
                errors.phone ? "true" : "false"
              }
              aria-describedby={
                errors.phone
                  ? "phone-error"
                  : undefined
              }
            />

            {errors.phone && (
              <p
                className="form-field__error"
                id="phone-error"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="community">
              Community of interest
            </label>

            <select
              id="community"
              name="community"
              value={formData.community}
              onChange={handleChange}
              required
              aria-invalid={
                errors.community ? "true" : "false"
              }
              aria-describedby={
                errors.community
                  ? "community-error"
                  : undefined
              }
            >
              <option value="">
                Select a community
              </option>

              {communities.map((community) => (
                <option
                  key={community}
                  value={community}
                >
                  {community}
                </option>
              ))}
            </select>

            {errors.community && (
              <p
                className="form-field__error"
                id="community-error"
              >
                {errors.community}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="moveInDate">
              Preferred move-in date
            </label>

            <input
              id="moveInDate"
              name="moveInDate"
              type="date"
              min={getTodayDate()}
              value={formData.moveInDate}
              onChange={handleChange}
              required
              aria-invalid={
                errors.moveInDate
                  ? "true"
                  : "false"
              }
              aria-describedby={
                errors.moveInDate
                  ? "moveInDate-error"
                  : undefined
              }
            />

            {errors.moveInDate && (
              <p
                className="form-field__error"
                id="moveInDate-error"
              >
                {errors.moveInDate}
              </p>
            )}
          </div>

          <div className="form-field form-field--full">
            <div className="form-field__label-row">
              <label htmlFor="message">
                Message
                <span> (optional)</span>
              </label>

              <span
                className="form-field__counter"
                aria-live="polite"
              >
                {formData.message.length}/500
              </span>
            </div>

            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={
                errors.message ? "true" : "false"
              }
              aria-describedby={
                errors.message
                  ? "message-error"
                  : undefined
              }
            />

            {errors.message && (
              <p
                className="form-field__error"
                id="message-error"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="form-field--full">
            <button
              className="enquiry-form__submit"
              type="submit"
            >
              Submit enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;