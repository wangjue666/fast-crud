import { Ref } from "vue";
import { TableColumnsProps } from "/src/d/crud";

export type ColumnsFilterItem = {
  key: string;
  title: string;
  fixed: boolean | string;
  show: boolean;
  __show: boolean;
  __disabled: boolean;
};

export type ColumnsFilterContext = {
  originalColumns: Ref<TableColumnsProps>;
  currentColumns: Ref<ColumnsFilterItem[]>;
  text: Ref;
  active: Ref;
  submit: () => void;
  reset: () => void;
};

export const ColumnsFilterProvideKey = "ColumnsFilterContext";
