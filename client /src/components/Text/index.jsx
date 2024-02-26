import React from "react";

const sizeClasses = {
  txtInterMedium14Bluegray800: "font-inter font-medium",
  txtInterRegular16Gray500: "font-inter font-normal",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterMedium14Bluegray900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
