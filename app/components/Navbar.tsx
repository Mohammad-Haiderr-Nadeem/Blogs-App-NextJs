import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <main>
      <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10 ">
        <div className="prose prose-xl mx-auto flex justify-between flex-col md:flex-row">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white text-3xl"
          >
            Grim Reaper
          </Link>
          <div className="flex flex-row justify-center md:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <Link
              className="text-white/90 no-underline hover:text-white"
              href="https://www.youtube.com"
            >
              <FaYoutube />
            </Link>
            <Link
              className="text-white/90 no-underline hover:text-white"
              href="https://www.facebook.com"
            >
              <FaFacebook />
            </Link>
            <Link
              className="text-white/90 no-underline hover:text-white"
              href="https://www.twitter.com"
            >
              <FaTwitter />
            </Link>
            <Link
              className="text-white/90 no-underline hover:text-white"
              href="https://www.github.com"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
