import { File, Folder } from "@/components/ui/file-tree";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { ColorType, badgesVariants } from "@/components/ui/tag";

export type TagType = {
  icon: ReactNode;
  color: ColorType;
  children: ReactNode;
} & VariantProps<typeof badgesVariants>;

export type ImageType = {
  name: string;
  src: string;
};

export type ContentType = {
  title: string;
  description: string;
  type: "default" | "large" | "mobile";
  status: string;
  tags: TagType[];
  images: ImageType[];
  link?: string;
};

export interface TreeNode {
  id: string;
  isSelectable: boolean;
  name: string;
  component: typeof Folder | typeof File;
  children?: TreeNode[];
  fileIcon?: React.ReactNode;
}

export type CardType = {
  title: string;
  content: ReactNode;
  icon: ReactNode;
};

