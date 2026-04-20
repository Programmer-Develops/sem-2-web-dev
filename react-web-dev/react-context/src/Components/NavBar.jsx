import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";

export default function NavBar() {
  const themeColor = useContext(ThemeContext);
  console.log(themeColor);

  return <h1 style={{ color: themeColor.clr }}>My Nav</h1>;
}
