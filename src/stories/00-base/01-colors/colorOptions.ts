type ColorName = "white" | "black" | "blue" | "green" | "beige";
type Hex = `#${string}`;
type ColorsType = Record<ColorName, Hex>;
const colors: ColorsType = {
  white: "#FFF",
  black: "#212121",
  blue: "#2E3A8C",
  green: "#3B755F",
  beige: "#F2EBDB",
};
const ColorsTypeHexToColorName: Record<Hex, ColorName> = {
  "#FFF": "white",
  "#212121": "black",
  "#2E3A8C": "blue",
  "#3B755F": "green",
  "#F2EBDB": "beige",
};
type ColorMapType = Record<Hex, Hex>;
const secondaryColorMap: ColorMapType = {
  "#FFF": "#3B755F",
  "#212121": "#FFF",
  "#2E3A8C": "#FFF",
  "#3B755F": "#FFF",
  "#F2EBDB": "#3B755F",
};
export {
  ColorName,
  ColorsType,
  Hex,
  colors,
  secondaryColorMap,
  ColorsTypeHexToColorName,
};
