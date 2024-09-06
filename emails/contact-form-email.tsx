import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
      Contact Form Submission
    </h1>
    <p style={{ marginBottom: "10px" }}>
      From <strong>{name}</strong> at{" "}
      <a href={`mailto:${email}`} style={{ color: "#1d4ed8" }}>
        {email}
      </a>
    </p>
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #eaeaea",
        marginBottom: "20px",
      }}
    />
    <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Message:</h2>
    <p style={{ marginBottom: "20px" }}>{message}</p>
    <a
      href={`mailto:${email}`}
      style={{
        display: "inline-block",
        backgroundColor: "#3b82f6",
        color: "#ffffff",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Reply
    </a>
  </div>
);

export default ContactFormEmail;
