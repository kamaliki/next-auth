import Link from "next/link";

interface NavItem {
  href: string;
  text: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { href: "/", text: "Home" },
    { href: "/dashboard", text: "Dashboard" },
    { href: "/server", text: "Server" },
    { href: "/client", text: "Client" },
    { href: "/settings", text: "Settings"},
    { href: "/api/auth/signin", text: "Sign In" },
    { href: "/api/auth/signout", text: "Sign Out" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-6 py-4 bg-white bg-opacity-90 dark:bg-gray-800">
      <ul className="flex items-center">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} text={item.text} />
        ))}
      </ul>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  text: string;
}

function NavItem({ href, text }: NavItemProps) {
  return (
    <li className="mr-6">
      <Link href={href}>
        <span className="cursor-pointer text-lg font-bold text-gray-800 dark:text-white" aria-label={text}>
          {text}
        </span>
      </Link>
    </li>
  );
}
