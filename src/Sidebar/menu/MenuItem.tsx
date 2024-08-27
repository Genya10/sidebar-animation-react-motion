import { IMenuItem } from "../../types/types";
import { useAtomValue } from "jotai";
import { isCollapsedAtom } from "../../store";

export function MenuItem({ item }: { item: IMenuItem }) {
  const isCollapsed = useAtomValue(isCollapsedAtom);

  return (
    <a href="#" rel="noreferrer noopener" target="_blank">
      <item.icon />
      {!isCollapsed && <span>{item.name}</span>}
    </a>
  );
}
