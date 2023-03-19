import { ShallowRef, VNode } from "vue";

export type VModelGetSet = {
  get: () => any;
  set: (value: any) => void;
};

export type VModelRefKey = {
  ref: any;
  key: string;
};

export type BindBuilderModelValue = {
  onChange: (value: any) => void;
} & (VModelGetSet | VModelRefKey);

export type BindBuilderOptions = {
  is?: string | ShallowRef;
  props?: any;

  vModel?: BindBuilderModelValue;
  slots?: WritableSlots;
};

export type UiSlotRet = string | VNode | VNode[] | UiSlotRet[];
export type UiSlot = () => UiSlotRet;
export type WritableSlots = {
  [name: string]: UiSlot;
};
export type ComponentRenderBinding = {
  is: string | ShallowRef;
  props: any;
  slots?: WritableSlots;
};

export interface CI<T = any> {
  name: string;

  modelValue?: string;
  builder?: (options: T) => ComponentRenderBinding;

  render?: (options: T) => UiSlotRet;
}

export interface FormCI {
  name: string;
  inlineLayout: Object;
  // resetWrap: Function;
  validateWrap: (formRef: any) => Promise<any>;
  transformValidateErrors: (e: Error) => ComponentBinding;
}

export type SelectBuilderOption = {
  clearable?: boolean;
} & BindBuilderOptions;
export interface SelectCI extends CI<SelectBuilderOption> {
  modelValue: string;
  clearable: string;
}

export type OptionBuilderOption = {} & BindBuilderOptions;
export interface OptionCI extends CI<OptionBuilderOption> {
  // 默认的value和label字段名
  value: string;
  label: string;
}

export type TreeSelectBuilderOption = {} & BindBuilderOptions;
export interface TreeSelectCI extends CI<TreeSelectBuilderOption> {
  modelValue: string;
  clearable: string;
  options: string;
  value: string;
  label: string;
  children: string;
}

export type RadioBuilderOption = {} & BindBuilderOptions;
export interface RadioCI extends CI<RadioBuilderOption> {
  value: string;
}

export type RadioGroupBuilderOption = {} & BindBuilderOptions;
export interface RadioGroupCI extends CI<RadioGroupBuilderOption> {
  modelValue: string;
}

export type InputBuilderOptions = {
  clearable?: boolean;
} & BindBuilderOptions;
export interface InputCI extends CI {
  clearable: string;
  modelValue: string;
}

export type InputNumberBuilderOptions = {} & BindBuilderOptions;
export interface InputNumberCI extends CI<InputNumberBuilderOptions> {
  modelValue: string;
}

export type InputGroupBuilderOption = {} & BindBuilderOptions;
export type InputGroupCI = CI<InputGroupBuilderOption>;

export type InputPasswordBuilderOption = {} & BindBuilderOptions;
export interface InputPasswordCI extends CI<InputPasswordBuilderOption> {
  passwordType: Object;
  clearable: string;
  modelValue: string;
}

export type TextAreaBuilderOption = {} & BindBuilderOptions;
export interface TextAreaCI extends CI<TextAreaBuilderOption> {
  type: string;
  clearable: string;
  modelValue: string;
}

export type DialogFooterBuilder = (footer?: any) => ComponentBinding;
export type DialogOnClosedBindBuilder = (onClose: (visible: boolean) => void) => ComponentBinding;

export type DialogBuilderOption = {} & BindBuilderOptions;

export interface DialogCI extends CI<DialogBuilderOption> {
  visible: string;
  footer: DialogFooterBuilder;
  buildOnClosedBind: DialogOnClosedBindBuilder;
  customClass: string;
  titleSlotName?: string;
  buildWidthBind?: (width: any) => ComponentBinding;
  buildInitBind?: () => ComponentBinding;
}

export type DrawerBuilderOption = {
  width?: number | string;
} & BindBuilderOptions;

export interface DrawerCI extends CI<DrawerBuilderOption> {
  visible: string;
  customClass: string;
  width: string;
  hasContentWrap?: string;
}

export type TableColumnBuilderOption = {} & BindBuilderOptions;
export interface TableColumnCI extends CI<TableColumnBuilderOption> {
  label: string;
  prop: string;
  row: string;
  index: string;
}

export type TableOnChangeBindingBuilder = (context: {
  onSortChange: (sorter: any) => void;
  onFilterChange: (filters: any) => void;
  onPagination: (pagination: any) => void;
}) => any;

export type ComponentBinding = {
  [key: string]: any;
};

export type TableBuilderOption = {} & BindBuilderOptions;
export interface TableCI extends CI<TableBuilderOption> {
  defaultRowKey?: string | ((rowData: any) => any);
  data: string;
  fixedHeaderNeedComputeBodyHeight: boolean;
  headerDomSelector: string; //用于计算高度
  buildMaxHeight: (maxHeight: number) => ComponentBinding;
  hasMaxHeight: (tableOptions: any) => boolean;
  vLoading: boolean | string;
  onChange: TableOnChangeBindingBuilder;
  /**
   * 列render的模式，antdv和naive为config模式，element为slot模式
   */
  renderMode: string;
  /**
   * render的方法名
   */
  renderMethod?: string;
  /**
   * render 方法触发时的参数构建出一个scope
   */
  rebuildRenderScope?: (scope: any, prop2?: any, prop3?: any, prop4?: any) => ComponentBinding;
}

export type CheckboxGroupBuilderOption = {} & BindBuilderOptions;
export interface CheckboxGroupCI extends CI<CheckboxGroupBuilderOption> {
  modelValue: string;
}

export type CheckboxBuilderOption = {} & BindBuilderOptions;
export interface CheckboxCI extends CI<CheckboxBuilderOption> {
  resolveEvent: (e: any) => any;
  value: string;
  modelValue: string;
  onChange: (onUpdateModelValue: (value: any) => any) => any;
}

export interface CascaderCI extends CI {
  modelValue: string;
  clearable: string;
  fieldNames: (namesMap: { value: string; label: string; children: string }) => any;
}

export type TabsBuilderOptions = {} & BindBuilderOptions;
export type TabsCI = {
  modelValue: string;
} & CI<TabsBuilderOptions>;

export type TabPaneBuilderOptions = {} & BindBuilderOptions;
export type TabPaneCI = {
  key: string;
  tab: string;
} & CI<TabPaneBuilderOptions>;

export type CollapseBuilderOptions = {
  key?: string;
} & BindBuilderOptions;
export interface CollapseCI extends CI<CollapseBuilderOptions> {
  modelValue: string;
  keyName: string;
}

export type CollapseItemBuilderOptions = {} & BindBuilderOptions;
export type CollapseItemCI = CI<CollapseItemBuilderOptions>;

export type SwitchBuilderOptions = {
  activeColor?: string;
  activeText?: string;
  activeValue?: string;
  inactiveColor?: string;
  inactiveText?: string;
  inactiveValue?: string;
} & BindBuilderOptions;
export interface SwitchCI extends CI<SwitchBuilderOptions> {
  modelValue: string;
  activeColor: string;
  activeValue: string;
  activeText: string;
  inactiveText: string;
  inactiveColor: string;
  inactiveValue: string;
}

export type MessageContext = string | { type?: string; message?: string; content?: string };

export interface MessageCI extends CI {
  open: (type: string, context: MessageContext) => void;
  success: (context: MessageContext) => void;
  error: (context: MessageContext) => void;
  warn: (context: MessageContext) => void;
  info: (context: MessageContext) => void;
  instance: any;
  getInstance?: any;
}

export type MessageBoxContextType = {
  title?: string;
  message?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  type?: string;
};
export type MessageBoxOpenType = (context: MessageBoxContextType) => Promise<void>;
export interface MessageBoxCI extends CI {
  open: MessageBoxOpenType;
  confirm: MessageBoxOpenType;
  instance: any;
  getInstance?: any;
}

export type NotificationContext = string | { type?: string; message?: string; text?: string };

export interface NotificationCI extends CI {
  open: (type: string, context: NotificationContext) => void;
  success: (message: NotificationContext) => void;
  error: (message: NotificationContext) => void;
  warn: (message: NotificationContext) => void;
  info: (message: NotificationContext) => void;
  instance: any;
  getInstance?: any;
}
export interface IconCI extends CI {
  isComponent: boolean;
  circle?: Record<string, any>;
}
export interface FormItemCI extends CI {
  prop: string;
  label: string;
  rules: string;
}

export interface TooltipCI extends CI {
  // tooltip框里的内容slotName
  content: string;
  // 触发按钮内容slotName
  trigger: string;
}

export interface TagCI extends CI {
  type: string;
  colors: Array<string>;
}

type FormWrapperOnClosedBindBuilder = (is: string, onClose: (visible: boolean) => void) => any;

export interface FormWrapperCI extends CI {
  visible: string;
  buildOnClosedBind: FormWrapperOnClosedBindBuilder;
  customClass: (is: string) => string;
  titleSlotName: string;
  buildWidthBind: (is: string, width: any) => {};
  buildInitBind: (is: string) => {};
  buildInnerBind: (opts: any) => {};
  hasContentWrap?: (is: string) => string | undefined;
}
export interface DatePickerCI extends CI {
  modelValue: string;
  buildDateType: (type: string) => ComponentBinding;
}
export interface TimePickerCI extends CI {
  modelValue: string;
}
export interface DropdownCI extends CI {
  command: (callback: (key: any) => void) => ComponentBinding;
  slotName: string;
  /**
   * 选项的渲染模式，slot or config
   */
  renderMode: string;
  value?: string;
  label?: string;
  children?: string;
}
export interface DropdownMenuCI extends CI {
  command: (callback: (key: string) => void) => ComponentBinding;
}
export interface DropdownItemCI extends CI {
  command: string;
}
export type ImageGroupCI = CI;

export type ImagePreviewBindBuilder = (opts: {
  url: string;
  urls: string[];
  previewUrl: string;
  previewUrls: string[];
  index: number;
}) => any;

export interface ImageCI extends CI {
  buildPreviewBind: ImagePreviewBindBuilder;
}
export type ProgressCI = CI;
export interface LoadingCI extends CI {
  name: string;
  type: string;
}
export interface UploadCI extends CI {
  id: string;
  name: string;
  type: string;
  typeImageCard: string;
  typeImage: string;
  getStatusFromEvent: (event: any) => string;
  getFileListFromEvent: (event: any, event2?: any, event3?: any, event4?: any) => any[];
  status: {
    success: string;
    uploading: string;
  };
  limitAdd: number;
  isSuccess: (fileItem: any) => Boolean;
}

export type ButtonBuilderOptions = {
  icon?: UiSlot;
  circle?: boolean;
  linkType?: boolean;
  textType?: boolean;
  color?: string;
} & BindBuilderOptions;

export interface ButtonCI extends CI<ButtonBuilderOptions> {
  name: string;
  textType: Object;
  linkType: Object;
  colors: (type: string) => any;
  circle: Object;
}

export type PaginationOnChangeContext = {
  setCurrentPage: (current: number) => void;
  setPageSize: (pageSize: number) => void;
  doAfterChange: () => Promise<void>;
};
export type PaginationOnChangeBindingBuilder = (context: PaginationOnChangeContext) => any;
export interface PaginationCI extends CI {
  name: string;
  currentPage: string;
  onChange: PaginationOnChangeBindingBuilder;
  total: string;
  pageCount: string;
}

export interface DividerCI extends CI {
  name: string;
}

export type PopoverBuilderOptions = {
  contentSlot: UiSlot;
  triggerSlot: UiSlot;
} & BindBuilderOptions;
export interface PopoverCI extends CI<PopoverBuilderOptions> {
  name: string;

  /**
   * 内容插槽
   */
  contentSlotName: string;

  /**
   * 触发源插槽
   */
  triggerSlotName: string;
  visible: string;
}

export interface ColorPickerCI extends CI {
  name: string;
}

export type ButtonGroupBuilderOptions = {} & BindBuilderOptions;
export type ButtonGroupCI = CI<ButtonGroupBuilderOptions>;
export interface Icons {
  refresh: string;
  search: string;
  compact: string;
  columnsFilter: string;
  add: string;
  edit: string;
  remove: string;
  export: string;
  check: string;
  sort: string;
  close: string;
  left: string;
  right: string;
  arrowLeft: string;
  arrowRight: string;
  more: string;
  plus: string;
  zoomIn: string;
  zoomOut: string;
  refreshLeft: string;
  refreshRight: string;
  upload: string;
  fullScreen: string;
  unFullScreen: string;
  question: string;
  caretUp: string;
  caretDown: string;
}
export interface UiInterface {
  modelValue: string;
  type: string;
  inputGroup: InputGroupCI;
  input: InputCI;
  number: InputNumberCI;
  inputPassword: InputPasswordCI;
  textArea: TextAreaCI;
  tag: TagCI;
  table: TableCI;
  tableColumn: TableColumnCI;
  tableColumnGroup: TableColumnCI;
  pagination: PaginationCI;
  button: ButtonCI;
  form: FormCI;
  formItem: FormItemCI;
  tooltip: TooltipCI;
  radioGroup: RadioGroupCI;
  radio: RadioCI;
  checkboxGroup: CheckboxGroupCI;
  checkbox: CheckboxCI;
  select: SelectCI;
  treeSelect: TreeSelectCI;
  option: OptionCI;
  collapseTransition: CI;
  card: CI;
  drawer: DrawerCI;
  col: CI;
  row: CI;
  buttonGroup: ButtonGroupCI;
  dialog: DialogCI;
  icon: IconCI;
  icons: Icons;
  message: MessageCI;
  notification: NotificationCI;
  messageBox: MessageBoxCI;
  formWrapper: FormWrapperCI;

  cascader: CascaderCI;
  switch: SwitchCI;
  datePicker: DatePickerCI;
  timePicker: TimePickerCI;
  dropdown: DropdownCI;
  dropdownMenu: DropdownMenuCI;
  dropdownItem: DropdownItemCI;
  imageGroup: ImageGroupCI;
  image: ImageCI;
  progress: ProgressCI;
  loading: LoadingCI;
  upload: UploadCI;
  tabs: TabsCI;
  tabPane: TabPaneCI;
  collapse: CollapseCI;
  collapseItem: CollapseItemCI;
  divider: DividerCI;
  popover: PopoverCI;
}
