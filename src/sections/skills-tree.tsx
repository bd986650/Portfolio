import { File, Folder, Tree } from "@/components/ui/file-tree";
import { HARD_ELEMENTS, SOFT_ELEMENTS, TreeNode } from "@/lib/data";

export function SkillsTree({ type }: { type: "soft" | "hard" }) {
  const softExpId = ["1", "2", "5", "8", "12", "16", "20"];

  const hardExpId = ["1", "6", "10", "20", "21"];

  const renderSkills = (elements: TreeNode) => {
    const renderChildren = (children: TreeNode[]) => {
      return children.map((child) => {
        if (child.component === Folder) {
          return (
            <Folder key={child.id} value={child.id} element={child.name}>
              {renderChildren(child.children || [])}
            </Folder>
          );
        } else {
          return (
            <File key={child.id} value={child.id} fileIcon={child.fileIcon}>
              <p>{child.name}</p>
            </File>
          );
        }
      });
    };

    return (
      <Folder element={elements.name} value={elements.id}>
        {renderChildren(elements.children || [])}
      </Folder>
    );
  };

  return (
    <div className="relative flex min-h-fit w-full flex-col items-center justify-center mx-auto rounded-[19px] border bg-background p-4">
      <Tree
        className="w-full text-sm sm:text-[1rem]"
        initialExpandedItems={type === "soft" ? softExpId : hardExpId}
      >
        {type === "soft"
          ? renderSkills(SOFT_ELEMENTS)
          : renderSkills(HARD_ELEMENTS)}
      </Tree>
    </div>
  );
}
