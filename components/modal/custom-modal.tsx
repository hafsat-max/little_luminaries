// CustomModal.tsx
"use client";

import React, { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  overlayColor?: string; // e.g. "#15254E66"
};

export const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
  overlayColor = "#15254E66",
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="custom-modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(21, 37, 78, 0.8)", // #15254E @ 40%
           // 👈 blur happens here
            WebkitBackdropFilter: "blur(24px) saturate(120%)",
            zIndex: 9999,
          }}
        >
          {/* Modal content */}
          <motion.div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "24px",
              maxWidth: "480px",
              width: "90%",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.35)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
