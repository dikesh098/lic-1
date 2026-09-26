const ADVISOR_WHATSAPP_NUMBER = "918788377635"; // +91 8788377635, international format, no symbols

/**
 * Builds a WhatsApp deep link pre-filled with a contextual message.
 * Never pass private customer information (policy numbers, personal
 * details) into this — the message is visible in the URL.
 */
export function generateWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${ADVISOR_WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hello Nila Ma'am, I would like to know more about insurance options.",
  renewal: "Hello Nila Ma'am, I need assistance regarding my policy renewal.",
  support: "Hello Nila Ma'am, I need help regarding my existing policy.",
  review: "Hello Nila Ma'am, I would like to request a review of my policy.",
};

export const ADVISOR_PHONE_DISPLAY = "+91 87883 77635";
export const ADVISOR_PHONE_TEL = "+918788377635";
export const ADVISOR_EMAIL = "nilagautam1981@gmail.com";
