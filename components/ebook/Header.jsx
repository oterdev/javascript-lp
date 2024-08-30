import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-yellow-300 py-6">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-7 w-7 text-[#343434]" />
          <span className="text-xl font-bold text-[#343434]">Jagojs</span>
        </div>
      </div>
    </header>
  );
}
