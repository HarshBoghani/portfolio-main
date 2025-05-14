// components/ui/Loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white-500 border-opacity-50"></div>
    </div>
  );
};

export default Loading;
