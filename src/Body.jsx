import "./Body.css";
import Top from "./Top";
import Bottom from "./Bottom";
export default function Body({ theme }) {
  return (
    <div className={`Body ${theme ? "dark" : "light"}`}>
      <Top theme={theme} />
      <Bottom theme={theme} />
    </div>
  );
}
