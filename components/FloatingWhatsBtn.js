"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () =>
    import("@digicroz/react-floating-whatsapp").then(
      (mod) => mod.FloatingWhatsApp
    ),
  { ssr: false }
);

export default function FloatingWhatsBtn() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <FloatingWhatsApp
      phoneNumber="919026840092"
      accountName="Pranjal Singh"
      statusMessage="Typically replies within an hour"
      chatMessage="Hello! 👋 Thanks for visiting my portfolio. How can I help you with your web or AI project today?"
      placeholder="Type a message..."
      darkMode={true}
      allowClickAway={false}
      allowEsc={true}
      notification={true}
      notificationSound={false}
    />
  );
}