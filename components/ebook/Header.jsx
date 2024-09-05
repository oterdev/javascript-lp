import { BookCopy } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#343434] py-6">
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex items-center space-x-2">
          <BookCopy className="h-7 w-7 text-white" />
          <span className="text-xl font-bold text-white">Jagojs</span>
        </div>
      </div>
    </header>
  );
}
