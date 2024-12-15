import { Hex } from "../../00-base/01-colors/colorOptions";
export interface OptionsUpdateData {
  color: Hex | string;
  linked: boolean;
  active: boolean;
}
