export interface ClassName {
  className?: string;
}

export interface IsMobileOverride {
  isMobileOverride?: boolean;
}

export interface HasChildren {
  children?: React.ReactNode;
}

export interface Selectable {
  selected?: boolean | undefined;
}

export interface Href {
  href: string;
  onClick?: never;
}

export interface OnClick {
  href?: never;
  onClick: CallableFunction;
}

export interface OnClickOrHref {
  onClickOrHref: OnClick | Href;
}
