import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#030305] text-white p-4 text-center">
      <div className="font-mono text-4xl font-extrabold text-cyan-400">404</div>
      <h1 className="mt-2 text-xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-xs text-slate-400 max-w-sm">
        The requested digital coordinates do not exist in Swarnava Sarkar's system architecture.
      </p>
      <Link href="/" className="mt-6">
        <Button variant="primary" size="md">
          Return to Digital Experience
        </Button>
      </Link>
    </div>
  );
}
