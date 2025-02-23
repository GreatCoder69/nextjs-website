import Image from "next/image";

export default function Header() {
  const tabs = [
    { name: "NEWS", link: "#news" },
    { name: "WATCH", link: "#watch" },
    { name: "STANDINGS", link: "#standings" },
    { name: "SHOP", link: "#shop" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="container mx-auto flex items-center py-4 px-6">
        {/* Chelsea Logo */}
        <div className="w-[60px] h-[60px] relative">
          <Image src="/images/chelsea-logo.png" alt="Chelsea Logo" layout="fill" objectFit="contain" />
        </div>

        {/* Centered Navigation Tabs */}
        <div className="flex-grow text-center">
          <ul className="inline-flex space-x-10 text-blue-900 font-bold text-lg uppercase tracking-wide">
            {tabs.map((tab, index) => (
              <li key={index} className="relative cursor-pointer px-4 py-2 transition-all duration-300 hover:text-blue-700 hover:bg-gray-200 rounded-md">
                <a href={tab.link} className="block">{tab.name}</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
