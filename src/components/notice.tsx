import { AlertTriangle } from "lucide-react";
import { complianceNotice } from "@/data/site";

export function ComplianceNotice({ text = complianceNotice }: { text?: string }) {
  return (
    <div className="rounded-md border border-warning/30 bg-warning/10 p-4 text-sm leading-6 text-warning">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
        <p>{text}</p>
      </div>
    </div>
  );
}
