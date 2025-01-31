
import { ChevronRight, Home } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";

interface BreadcrumbNavProps {
    path: string[];
    onNavigate: (path: string[]) => void;
}

export function BreadcrumbNav({ path, onNavigate }: BreadcrumbNavProps) {
    return (
        <Breadcrumb className="p-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => onNavigate([])}>
                        <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {path.map((segment, index) => (
                    <BreadcrumbItem key={index}>
                        <BreadcrumbSeparator>
                            <ChevronRight className="h-4 w-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbLink
                            onClick={() => onNavigate(path.slice(0, index + 1))}
                        >
                            {segment}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}