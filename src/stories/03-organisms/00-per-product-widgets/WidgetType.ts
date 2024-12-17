import { titleMapKey } from "@/stories/02-molecules/00-product-widget/TitleMapKey";
import { ActionType } from "./ActionType";
import { ColorName } from "@/stories/00-base/01-colors/colorOptions";

export interface WidgetType {
  id: number;
  type: titleMapKey;
  amount: number;
  action: ActionType;
  active: boolean;
  linked: boolean;
  selectedColor: ColorName;
}
