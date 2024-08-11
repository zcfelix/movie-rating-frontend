import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onSearchClick: () => void;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({
  value,
  onValueChange,
  onSearchClick,
}: SearchBarProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        value={value}
        onChange={onValueChange}
        placeholder="Input movie title to search..."
      />
      <Button onClick={onSearchClick}>Search</Button>
    </div>
  );
}
