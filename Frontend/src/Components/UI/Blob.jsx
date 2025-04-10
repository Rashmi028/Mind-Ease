import React from "react";

const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl animate-blob ${className}`}
  />
);

export default Blob;
