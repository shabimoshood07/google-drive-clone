
import { File, Folder, FileText, Image, FileSpreadsheet } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DriveItem } from '~/types/global';

interface DriveListProps {
    items: DriveItem[];
    onNavigate: (item: DriveItem) => void;
}

const getFileIcon = (item: DriveItem) => {
    if (item.type === 'folder') return <Folder className="h-4 w-4 text-blue-500" />;

    switch (item.fileType) {
        case 'document':
            return <FileText className="h-4 w-4 text-red-500" />;
        case 'image':
            return <Image className="h-4 w-4 text-green-500" />;
        case 'spreadsheet':
            return <FileSpreadsheet className="h-4 w-4 text-emerald-500" />;
        default:
            return <File className="h-4 w-4 text-gray-500" />;
    }
};

export function DriveList({ items, onNavigate }: DriveListProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[50%]">Name</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>File Size</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((item) => (
                    <TableRow
                        key={item.id}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => onNavigate(item)}
                    >
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                                {getFileIcon(item)}
                                {item.name}
                            </div>
                        </TableCell>
                        <TableCell>{item.owner}</TableCell>
                        <TableCell>{item.modified}</TableCell>
                        <TableCell>{item.size || '--'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}