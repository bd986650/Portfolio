import { useCallback, useEffect, useState } from "react";

export type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

/**
 * Hook to manage file tree state and operations
 * @param initialSelectedId - Initial selected item ID
 * @param initialExpandedItems - Initial expanded items array
 * @param elements - Tree elements for auto-expansion
 * @returns Object with tree state and handlers
 */
export function useFileTree(
  initialSelectedId?: string,
  initialExpandedItems?: string[],
  elements?: TreeViewElement[]
) {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    initialSelectedId
  );
  const [expandedItems, setExpandedItems] = useState<string[] | undefined>(
    initialExpandedItems
  );

  const selectItem = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handleExpand = useCallback((id: string) => {
    setExpandedItems((prev) => {
      if (prev?.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...(prev ?? []), id];
    });
  }, []);

  const expandSpecificTargetedElements = useCallback(
    (elements?: TreeViewElement[], selectId?: string) => {
      if (!elements || !selectId) return;
      const findParent = (
        currentElement: TreeViewElement,
        currentPath: string[] = []
      ) => {
        const isSelectable = currentElement.isSelectable ?? true;
        const newPath = [...currentPath, currentElement.id];
        if (currentElement.id === selectId) {
          if (isSelectable) {
            setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
          } else {
            if (newPath.includes(currentElement.id)) {
              newPath.pop();
              setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
            }
          }
          return;
        }
        if (
          isSelectable &&
          currentElement.children &&
          currentElement.children.length > 0
        ) {
          currentElement.children.forEach((child) => {
            findParent(child, newPath);
          });
        }
      };
      elements.forEach((element) => {
        findParent(element);
      });
    },
    []
  );

  useEffect(() => {
    if (initialSelectedId) {
      expandSpecificTargetedElements(elements, initialSelectedId);
    }
  }, [initialSelectedId, elements, expandSpecificTargetedElements]);

  return {
    selectedId,
    expandedItems,
    setExpandedItems,
    selectItem,
    handleExpand,
  };
}

