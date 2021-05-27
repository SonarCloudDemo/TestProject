import { useParams } from "react-router-dom";

export function Details() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams();

  return <div>{id}</div>;
}
