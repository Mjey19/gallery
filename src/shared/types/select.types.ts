import { HtmlHTMLAttributes } from "react";

export interface SelectTypes extends HtmlHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  optionArr: string[];
}
