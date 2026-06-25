import { Wind } from "lucide-react";
import { Badge } from "@/components/common/Badge";

type CompatibleFiltersProps = {
  filters: string[];
};

export function CompatibleFilters({ filters }: CompatibleFiltersProps) {
  return (
    <div className="rounded-md border border-warning/20 bg-warning/10 p-5">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-warning">
        <Wind className="h-5 w-5" />
        Compatible Filters
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Badge key={filter} tone="yellow">
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  );
}
