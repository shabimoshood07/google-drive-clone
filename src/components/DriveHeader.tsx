import { Upload, Search, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function DriveHeader() {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-semibold">Drive Clone</h1>
            </div>

            <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search in Drive"
                        className="pl-10"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload
                </Button>
            </div>
        </div>
    );
}