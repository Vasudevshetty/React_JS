import { Loader } from "./Loader";

export function Movies({ movies, loaded }) {
  return loaded && !movies && <Loader />;
}
