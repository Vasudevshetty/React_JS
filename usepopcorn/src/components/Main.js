export const average = (array) =>
  !array
    ? array.reduce((acc, curr) => (acc = acc + curr), 0) / array.length
    : 0;

export function Main({ children }) {
  return <main className="main">{children}</main>;
}
