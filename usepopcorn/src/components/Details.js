import Box from "./Box";
import Detail from "./Detail";
import Loader from "./Loader";

export function Details({ movie, onBack, loaded }) {
  return (
    <Box>{!loaded ? <Detail movie={movie} onBack={onBack} /> : <Loader />}</Box>
  );
}
