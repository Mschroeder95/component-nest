import { useEffect, useState } from "react";

interface UseIsMobileResponse {
  isMobile: boolean;
}

export default function useMobileCheck(
  override: boolean | undefined,
): UseIsMobileResponse {
  if (override !== undefined) {
    return {
      isMobile: override,
    };
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      const isMobileCondition =
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        window.innerWidth < 900;
      if (isMobileCondition != isMobile) {
        setIsMobile(isMobileCondition);
      }
    });
  });

  return {
    isMobile,
  };
}
