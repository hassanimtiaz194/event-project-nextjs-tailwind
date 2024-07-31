import { ReactNode } from "react";

export type IEventItem = {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  image?: string;
  isFeatured?: boolean;
};

export type IEventList = {
  items: Array<IEventItem>;
};

export type IButton = {
  link?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export type IEventContent = {
  children?: ReactNode;
};

export type IEventLogistics = {
  date?: string;
  address?: string;
  image?: string;
  imageAlt?: string;
}

export type ILogisticsItem = {
  icon?: any;
  children?: ReactNode;
}

export type ISelect = {
  value?: string;
  label?: string;
}
