export default function Container({ children , style }) {
  return (
    <>
      <div className="Container" style={{ style }}>{children}</div>
    </>
  );
}
