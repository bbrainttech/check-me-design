import { Link } from "react-router-dom";
import { NAV_LINKS } from "~/utils/constants";
import Icons from "./Icons";

export default () => {
  const SocialMedia = [
    {
      icon: Icons.FaceBook,
      href: "#",
    },
    {
      icon: Icons.Twitter,
      href: "#",
    },
    {
      icon: Icons.Instagram,
      href: "#",
    },
    {
      icon: Icons.Linkedin,
      href: "#",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="box">
        <div className="py-16 flex flex-col md:flex-row justify-center md:justify-between gap-8 flex-wra">
          <div className="flex flex-col items-center md:items-start">
            <Icons.Logo />
            <ul className="flex gap-7 mt-5 flex-wrap justify-center">
              {NAV_LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="capitalize focus-visible:outline-none focus-visible:ring-1 ring-primary ring-offset-4 rounded-md flex h-full items-center transition group duration-300 gap-x-0.5 hover:text-primary/70 text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <p className="mb-2.5 text-sm text-secondary">Download the app</p>
            <div className="flex gap-5">
              <Icons.AppStoreDownlaod className="focus-visible:outline-none focus-visible:ring-1 ring-primary ring-offset-2 rounded" />
              <Icons.PlayStoreDownlaod className="focus-visible:outline-none focus-visible:ring-1 ring-primary ring-offset-2 rounded" />
            </div>
          </div>
        </div>
        <div className="border-t flex items-center md:justify-between gap-4 flex-col md:flex-row  py-10">
          <div className="flex gap-x-6">
            {SocialMedia.map((item, i) => (
              <Link
                to={item.href}
                className="focus-visible:outline-none focus-visible:ring-2 ring-primary ring-offset-2 rounded-full"
                key={i.toString()}
              >
                {<item.icon />}
              </Link>
            ))}
          </div>
          <div className="flex gap-x-4 text-sm text-secondary-foreground [&>*]: [&>*]:focus-visible: [&>*]:focus-visible:outline-none">
            <Link
              to={"#"}
              className="hover:underline underline-offset-4 focus-visible:underline focus-visible:outline-none p-1"
            >
              Terms of Service
            </Link>
            <Link
              to={"#"}
              className="hover:underline underline-offset-4 focus-visible:underline focus-visible:outline-none p-1"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
