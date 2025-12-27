import { FC } from "react";

import { Logo } from "../../assets/icon";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "About",
    sublinks: [
      {
        name: "How it works",
        link: "/#Howitworks",
      },
      {
        name: "Featured",
        link: "/#Featured",
      },
      {
        name: "Partnership",
        link: "/#Partnership",
      },
      {
        name: "Bussiness Relation",
        link: "/#BussinessRelation",
      },
    ],
  },
  {
    title: "Community",
    sublinks: [
      {
        name: "Events",
        link: "/#Events",
      },
      {
        name: "Blog",
        link: "/#Blog",
      },
      {
        name: "Podcast",
        link: "/#Podcast",
      },
      {
        name: "Invite a friend",
        link: "/#Inviteafriend",
      },
    ],
  },
  {
    title: "Socials",
    sublinks: [
      {
        name: "Discord",
        link: "/#Discord",
      },
      {
        name: "Instagram",
        link: "/#Instagram",
      },
      {
        name: "Twitter",
        link: "/#Twitter",
      },
      {
        name: "Facebook",
        link: "/#Facebook",
      },
    ],
  }
]

const Footer: FC = () => {
  return (
    <footer className="h-auto w-full p-[1.1rem] bg-white dark:bg-gray-900 transition-colors duration-200 md:h-[44%] md:p-0">
      <div className="flex flex-col px-[calc(var(--spacing-horizontal)+10px)] h-full w-full sm:px-[2.9rem]">
        <div className="gap-8 py-[45px] px-0 sm:flex-col md:flex md:flex-row">
          <div className="sm:w-full md:w-1/2">
            <div className="mt-4 mb-12 pl-0.5 max-w-[20rem] text-base leading-5 text-gray-900 dark:text-gray-400 transition-colors duration-200 md:w-[80%] md:text-sm md:leading-8">
              <div>
                <Link to="/">
                  <h1 className="text-3xl text-blue-600 dark:text-blue-400 font-bold">VROOME</h1>
                </Link>
              </div>
              <div className="mt-4 mb-12 pl-0.5 max-w-[20rem] text-base leading-5 text-gray-900 dark:text-gray-400 transition-colors duration-200 md:w-[80%] md:text-sm md:leading-8">
                Drive in style with Vroome. Your key to comfort, freedom, and adventure.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:justify-items-start sm:w-full sm:grid-cols-2 md:justify-items-end md:w-1/2 lg:col-span-2 lg:grid-cols-3">
            {
              footerLinks.map((link) => (
                <div key={link.title} className="mr-1">
                  <p className="font-medium text-base text-gray-900 dark:text-gray-100 transition-colors duration-200 md:text-xl">{link.title}</p>
                  <nav className="text-base leading-[38px] font-normal mt-4 flex flex-col space-y-2 text-gray-600 dark:text-gray-400 transition-colors duration-200 lg:text-sm" aria-label="Footer Nav">
                    {link.sublinks.map((item) => (
                      <a key={item.name} href={item.link} className="text-gray-900/60 dark:text-gray-400/80 no-underline transition-all duration-200 hover:opacity-75">
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              ))
            }
          </div>
        </div>
        <hr className="border-gray-300 dark:border-gray-600 opacity-50" />
        <div className="flex flex-col gap-4 justify-center items-center text-gray-900 dark:text-gray-400 font-semibold text-sm py-[45px] transition-colors duration-200 md:flex-row md:items-center md:justify-between">
          <div>©2025 VROOME. All rights reserved</div>
          <div className="flex justify-between gap-16 text-gray-900 dark:text-gray-400 transition-colors duration-200">
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;