import { useEffect, useState } from "react";

export default (query: string) => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setMatch(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setMatch(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return match;
};
