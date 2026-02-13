"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  text: string;
  className?: string;
  disabled?: boolean;
  loader?: ReactNode;
}

const AppButton: React.FC<CustomAButtonProps> = ({
  icon,
  text,
  loader,
  className = "",
  disabled,
  onLoadCapture,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={` active:shadow-inner focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-gray-300  disabled:pointer-events-none disabled:opacity-50  shadow-md transition duration-300 ease-in-out   hover:shadow-lg  focus:border-none disabled:bg-[#D5EDFF] bg-red-primary text-white py-9px px-18px  md:text-base text-sm flex items-center justify-center   gap-2 rounded-full ${className}`}
      {...props}
    >
      {loader}
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default AppButton;
