export type FileType =
  | "document"
  | "image"
  | "spreadsheet"
  | "folder"
  | "other";

interface DriveItem {
  id: string;
  name: string;
  type: "folder" | "file";
  fileType?: FileType;
  size?: string;
  modified: string;
  path: string[];
  owner: string;
}
