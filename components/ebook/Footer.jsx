import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] py-6">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jagojs. Created with ❤️ by
            <Link
              href="https://www.threads.net/@sakirsyarian"
              target="_blank"
              className="font-semibold hover:text-[#fd8547]"
            >
              {" "}
              sakirsyarian
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
