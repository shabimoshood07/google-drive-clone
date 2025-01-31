import { DriveItem } from "~/types/global";

export const mockDriveData: DriveItem[] = [
  // Root level type folders
  {
    id: "documents",
    name: "Documents",
    type: "folder",
    modified: "2024-03-20",
    path: ["Documents"],
    owner: "system",
    fileType: "document",
  },
  {
    id: "images",
    name: "Images",
    type: "folder",
    modified: "2024-03-19",
    path: ["Images"],
    owner: "system",
    fileType: "image",
  },
  {
    id: "spreadsheets",
    name: "Spreadsheets",
    type: "folder",
    modified: "2024-03-19",
    path: ["Spreadsheets"],
    owner: "system",
    fileType: "spreadsheet",
  },
  // Documents
  {
    id: "3",
    name: "Project Proposal.pdf",
    type: "file",
    fileType: "document",
    size: "2.5 MB",
    modified: "2024-03-18",
    path: ["Documents"],
    owner: "me",
  },
  {
    id: "4",
    name: "Meeting Notes.docx",
    type: "file",
    fileType: "document",
    size: "500 KB",
    modified: "2024-03-17",
    path: ["Documents"],
    owner: "me",
  },
  // Spreadsheets
  {
    id: "6",
    name: "Budget 2024.xlsx",
    type: "file",
    fileType: "spreadsheet",
    size: "1.2 MB",
    modified: "2024-03-15",
    path: ["Spreadsheets"],
    owner: "John Doe",
  },
  {
    id: "9",
    name: "Q1 Report.xlsx",
    type: "file",
    fileType: "spreadsheet",
    size: "980 KB",
    modified: "2024-03-14",
    path: ["Spreadsheets"],
    owner: "me",
  },
  // Images
  {
    id: "8",
    name: "Profile Picture.jpg",
    type: "file",
    fileType: "image",
    size: "3.1 MB",
    modified: "2024-03-13",
    path: ["Images"],
    owner: "me",
  },
  {
    id: "10",
    name: "Logo.png",
    type: "file",
    fileType: "image",
    size: "1.8 MB",
    modified: "2024-03-12",
    path: ["Images"],
    owner: "me",
  },
];
