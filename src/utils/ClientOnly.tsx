import { useEffect, useState } from "react";

export const ClientOnly = ({ children, delay = 1000 }: { children: React.ReactNode, delay?: number }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};