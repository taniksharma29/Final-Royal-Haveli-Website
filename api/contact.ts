import type { VercelRequest, VercelResponse } from '@vercel/node';

const formatDateTime = (date: Date) => {
  return date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const buildHtmlBody = (payload: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const items = [
    ["Full Name", payload.name || "(not provided)"],
    ["Email Address", payload.email || "(not provided)"],
    ["Phone Number", payload.phone || "(not provided)"],
    ["Subject", payload.subject || "(not provided)"],
    ["Message", payload.message || "(not provided)"],
    ["Submission Date/Time", formatDateTime(new Date())],
  ];

  return `
    <html>
      <body style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
        <h2 style="margin-bottom: 0.4rem;">New Website Form Submission - Royal Haveli</h2>
        <p style="margin-top: 0; color: #555;">A visitor submitted the contact form on the Royal Haveli website. Details are below.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
          ${items
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #ddd; background: #f9f9f9; width: 180px; font-weight: 700;">${label}</td>
                  <td style="padding: 10px 12px; border: 1px solid #ddd; background: #fff;">${value}</td>
                </tr>
              `,
            )
            .join("")}
        </table>
      </body>
    </html>
  `;
};

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  const { name, email, phone, subject, message } = req.body ?? {};
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const emailFrom = process.env.EMAIL_FROM?.trim();
  const emailTo = "royalhavelisj@gmail.com";

  if (!resendApiKey) {
    return res.status(500).json({ success: false, error: "Missing RESEND_API_KEY server configuration." });
  }

  if (!emailFrom) {
    return res.status(500).json({ success: false, error: "Missing EMAIL_FROM server configuration." });
  }

  const payload = {
    name: String(name || "").trim(),
    email: String(email || "").trim(),
    phone: String(phone || "").trim(),
    subject: String(subject || "").trim(),
    message: String(message || "").trim(),
  };

  const html = buildHtmlBody(payload);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: emailFrom,
        to: emailTo,
        subject: "New Website Form Submission - Royal Haveli",
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      const message = data?.error?.message || data?.message || "Failed to send email.";
      return res.status(502).json({ success: false, error: message });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ success: false, error: "Unable to send email. Please try again later." });
  }
};

export default handler;
