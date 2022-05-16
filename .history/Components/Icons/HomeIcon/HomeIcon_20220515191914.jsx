import { useHover } from "../../Hooks/useHover";

export default function HomeIcon() {
  const [hover, isHovered] = useHover();

  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 25V17.5H17.5V25H23.75V15H27.5L15 3.75L2.5 15H6.25V25H12.5Z"
          fill="black"
        />
      </svg>
    </>
  );
}
