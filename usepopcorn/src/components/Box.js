import ToggleButton from "./ToggleButton";
import List from "./List";
import { useState } from "react";

export default function Box({
  type = "",
  movies = null,
  onSelect,
  onLoading,
  className,
  children,
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="box">
      <ToggleButton open={open} onOpen={setOpen}></ToggleButton>
      {open && (
        <>
          {children}
          {movies && (
            <List
              type={type}
              movies={movies}
              onSelect={onSelect}
              onLoading={onLoading}
              className={className}
            />
          )}
        </>
      )}
    </div>
  );
}
