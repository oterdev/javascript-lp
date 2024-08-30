export default function Footer() {
  return (
    <footer className="bg-yellow-200 text-[#343434] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Jagojs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
