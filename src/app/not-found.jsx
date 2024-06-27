import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking does not exist</p>
      <Link href="/" className="text-blue-400 hover:text-blue-900 underline">
        Click here to go back to the homepage
      </Link>
    </div>
  );
}
