import ToggleButton from "./ToggleButton";
import List from "./List";
import { useState } from "react";

export default function Box({ type, movies, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="box">
      <ToggleButton open={open} onOpen={setOpen}></ToggleButton>
      {open && (
        <>
          {children}
          <List type={type} movies={movies}></List>
        </>
      )}
    </div>
  );
}
