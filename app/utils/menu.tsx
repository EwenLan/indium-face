import { MenuProps } from "antd";
import Link from "next/link";

export interface MenuItemType {
  key: string,
  subHref: string,
  title: string,
}

function GenerateMenuItem(item: MenuItemType, parent: string) {
  return (
    {
      key: item.key,
      label: (<Link href={`${parent}/${item.subHref}`}>{item.title}</Link>)
    }
  )
}

export function GenerateMenu(items: MenuItemType[], parent: string): MenuProps["items"] {
  const GenerateItemsWithParent = (item: MenuItemType) => {
    return GenerateMenuItem(item, parent);
  }
  return items.map(GenerateItemsWithParent);
}