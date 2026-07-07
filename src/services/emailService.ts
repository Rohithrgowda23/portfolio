import emailjs from "@emailjs/browser";

// Fill these in from your EmailJS dashboard (https://www.emailjs.com/).
// They are safe to expose on the client — EmailJS scopes access per template.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(data: ContactFormData) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file."
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
