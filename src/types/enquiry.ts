export interface EnquiryData {
  fullName: string;
  email: string;
  phone: string;
  community: string;
  moveInDate: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryData, string>>;