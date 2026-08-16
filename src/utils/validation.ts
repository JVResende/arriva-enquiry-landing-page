import type { EnquiryData, EnquiryErrors } from '../types/enquiry';

export function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

export function validateAustralianPhone(phone: string) {
  const cleanedPhone = phone.replace(/[\s()-]/g, '');

  const mobilePattern = /^(?:\+61|0)4\d{8}$/;
  const landlinePattern = /^(?:\+61|0)[2378]\d{8}$/;

  return (
    mobilePattern.test(cleanedPhone) ||
    landlinePattern.test(cleanedPhone)
  );
}

export function validateMoveInDate(date: string) {
  if (!date) {
    return false;
  }

  const selectedDate = new Date(`${date}T00:00:00`);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return selectedDate >= today;
}

export function validateField(
  field: keyof EnquiryData,
  value: string,
) {
  switch (field) {
    case 'fullName':
      return value.trim()
        ? ''
        : 'Please enter your full name.';

    case 'email':
      if (!value.trim()) {
        return 'Please enter your email address.';
      }

      return validateEmail(value)
        ? ''
        : 'Please enter a valid email address.';

    case 'phone':
      if (!value.trim()) {
        return 'Please enter your phone number.';
      }

      return validateAustralianPhone(value)
        ? ''
        : 'Please enter a valid Australian phone number.';

    case 'community':
      return value
        ? ''
        : 'Please select a community.';

    case 'moveInDate':
      if (!value) {
        return 'Please select your preferred move-in date.';
      }

      return validateMoveInDate(value)
        ? ''
        : 'Move-in date must be today or later.';

    case 'message':
      return value.length <= 500
        ? ''
        : 'Message cannot exceed 500 characters.';

    default:
      return '';
  }
}

export function validateEnquiry(formData: EnquiryData) {
  const errors: EnquiryErrors = {};

  Object.keys(formData).forEach((field) => {
    const fieldName = field as keyof EnquiryData;

    const error = validateField(
      fieldName,
      formData[fieldName],
    );

    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}