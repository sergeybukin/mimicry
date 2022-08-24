import { TextFieldTypes } from "@ionic/core";
import { ErrorOption } from "react-hook-form/dist/types/errors";

export interface IField {
  inputType: TextFieldTypes;
  placeholder: string;
  name: string;
  rules: any;
}

export type Error = { path: string; error: ErrorOption };
