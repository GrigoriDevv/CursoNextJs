"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("CodarSe");

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawer(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <>
      <nav className="flex items-center gap-6 justify-start fixed top-0  right-0 left-0 md:justify-center bg-primary py-2 sm:py-4 px-6 ">
        <button className="sm-hidden" onClick={() => setDrawer(true)}>
          <MdMenu size={24} />
        </button>

        <ul
          className="flex gap-4 items-center "
          tabIndex={drawer ? -1 : undefined}
        >
          <li className="my-2">
            <Link
              href={"/"}
              className="border-2 rounded-md py-2 px-1 font-bold"
            >
              CODARSE
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href={"/"}
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Página inicial
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href={"/cursos"}
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="https://blog.codarse.com"
              target="_blank"
              className="flex gap-1 items-center"
            >
              Blog
              <MdOutlineOpenInNew />
            </Link>
          </li>
        </ul>
        <div
          tabIndex={drawer ? -1 : -0}
          onClick={() => setDrawer(false)}
          data-open={drawer}
          className="sm:hidden bg-gradient-to-r from-background  fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full  "
        >
          <ul
            className="flex gap-4 flex-col h-full p-4 w-60 bg-background bg-gradient-to-r from-background"
            onClick={(e) => e.stopPropagation()}
          >
            <li className="border-b-1 border-white">
              <Link
                href={"/"}
                data-active={currentPath === "/"}
                className="data-[active=true]:underline outline-offset-4 "
              >
                Página inicial
              </Link>
            </li>
            <li className="">
              <Link
                href={"/cursos"}
                data-active={currentPath === "/"}
                className="data-[active=true]:underline outline-offset-4"
              >
                Cursos
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="https://blog.codarse.com"
                target="_blank"
                className="flex gap-1 items-center outline-offset-4"
              >
                Blog
                <MdOutlineOpenInNew />
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="sm:hidden line-clamp-1">{title}</h1>
      </nav>
      <div className="h-14 sm:h-[72px]"></div>
    </>
  );
};
