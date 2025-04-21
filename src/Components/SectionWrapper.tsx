import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = "" }: Props) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`font-saudi ${isRTL ? "text-right" : "text-left"} ${className}`}
    >
      {children}
    </div>
  );
}
