import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  // This hook is used to get the latitude and longitude from the URL search params
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
