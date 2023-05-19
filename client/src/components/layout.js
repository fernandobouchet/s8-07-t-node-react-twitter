import Darkmode from "@/components/darkmode";
import {
  AtIcon,
  BookmarkIcon,
  BookmarksIcon,
  ChevronUpIcon,
  CreateTweetIcon,
  EditIcon,
  ExploreIcon,
  HelpIcon,
  HomeIcon,
  ListIcon,
  MenuIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  ShortcutsIcon,
  TwitterIcon,
  VerifiedIcon
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from '@headlessui/react'
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { usePopper } from 'react-popper'

function Header () {
  const { pathname } = useRouter()
  const { data: session, status } = useSession()
  const [openSettings, setOpenSettings] = useState(false)
  const [openUserPopper, setOpenUserPopper] = useState()
  const [popperUser, setPopperUser] = useState()
  const [openOptionPopper, setOpenOptionPopper] = useState()
  const [popperOptions, setPopperOptions] = useState()
  const { styles: userStyles, attributes: userAttributes } = usePopper(openUserPopper, popperUser, {
    placement: "top-end",
    modifiers: [
      { name: 'offset', options: { offset: [0, 10] } }
    ]
  });

  const { styles: optionStyles, attributes: optionAttributes } = usePopper(openOptionPopper, popperOptions, {
    placement: "top",
    modifiers: [
      { name: 'offset', options: { offset: [0, -60] } }
    ]
  });

  return (
    <header className="flex justify-end w-full md:w-24 xl:w-full lg:max-w-[300px]">
      <div className="flex flex-col gap-5 min-w-max px-2 xl:px-4 items-center h-full md:fixed max-md:w-full xl:w-[300px] overflow-y-auto noscrollbar md:border-r border-r-black/5 dark:border-r-white/20">
        <div className="md:hidden fixed top-0 bg-white dark:bg-black flex items-center justify-between px-4 py-3 w-full border-b border-b-black/10 dark:border-b-white/20">
          <Link href="/">
            <TwitterIcon size={24} />
          </Link>

          <div className="group flex items-center gap-1 px-2 border bg-slate-100/20 dark:bg-slate-500/20 border-black/20 dark:border-white/20 rounded-2xl overflow-hidden w-full max-w-[60%] transition duration-200 focus-within:border-indigo-500  dark:focus-within:border-indigo-500">
            <button>
              <SearchIcon size={20} opacity={true} />
            </button>
            <input
              type="text"
              className="w-full text-sm py-1.5 outline-none bg-transparent"
              placeholder="Buscar en Twitter"
            ></input>
          </div>

          <button>
            <MenuIcon size={24} />
          </button>
        </div>

        <div className="hidden w-full md:flex flex-col max-xl:items-center py-1 gap-1.5">
          <Link
            className="p-3 transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 w-fit rounded-full"
            href="/"
          >
            <TwitterIcon size={28} />
          </Link>

          <Link
            href="/"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/" ? "font-bold" : "")
            }
          >
            <HomeIcon size={28} active={pathname === "/"} />{" "}
            <p className="max-xl:hidden dark:text-white">Inicio</p>
          </Link>

          <Link
            href="/explore"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/explore" ? "font-bold" : "")
            }
          >
            <ExploreIcon
              size={28}
              active={pathname === "/explore"}
            />{" "}
            <p className="max-xl:hidden dark:text-white">Explorar</p>
          </Link>

          <Link
            href="/notifications"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/notifications" ? "font-bold" : "")
            }
          >
            <NotificationIcon
              size={28}
              active={pathname === "/notifications"}
            />{" "}
            <p className="max-xl:hidden dark:text-white">Notificaciones</p>
          </Link>

          <Link
            href="/messages"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/messages" ? "font-bold" : "")
            }
          >
            <MessagesIcon
              size={28}
              active={pathname === "/messages"}
            />{" "}
            <p className="max-xl:hidden dark:text-white">Mensajes</p>
          </Link>

          <Link
            href="/lists"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/lists" ? "font-bold" : "")
            }
          >
            <ListIcon size={28} active={pathname === "/lists"} />{" "}
            <p className="max-xl:hidden dark:text-white">Listas</p>
          </Link>

          <Link
            href="/bookmarks"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/bookmarks" ? "font-bold" : "")
            }
          >
            <BookmarkIcon
              size={28}
              active={pathname === "/bookmarks"}
            />{" "}
            <p className="max-xl:hidden dark:text-white">Guardados</p>
          </Link>

          <Link
            href="/profile"
            className={
              "flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
              (pathname === "/profile" ? "font-bold" : "")
            }
          >
            <ProfileIcon
              size={28}
              active={pathname === "/profile"}
            />{" "}
            <p className="max-xl:hidden dark:text-white">Perfil</p>
          </Link>

          {
          status !== "authenticated"
            ? <Popover className="w-full mt-auto max-md:hidden relative">
                <Transition
                  className="fixed"
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-95 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                <Popover.Panel ref={setPopperOptions} style={optionStyles.popper} {...optionAttributes.popper} className="flex overflow-hidden border dark:shadowtw dark:border-white/20 h-fit w-max flex-col rounded-xl items-start bg-white dark:bg-black dark:text-white font-medium">
                  <button className="flex items-center gap-4 w-full text-left font-bold text-xl p-4 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><AtIcon size={24} /> Conectar</button>
                  <button className="flex items-center gap-4 w-full text-left font-bold text-xl p-4 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><BookmarksIcon size={24} /> Borradores</button>
                  <button className="flex items-center gap-4 w-full text-left font-bold text-xl p-4 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><VerifiedIcon size={24} /> Organizaciones Verificadas</button>
                  <hr className="h-1 mt-0.5 w-[90%] opacity-50 mx-auto" />
                  <button onClick={() => setOpenSettings(!openSettings)} className="flex items-center justify-between gap-4 w-full text-left font-semibold p-4 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10">Configuración y Soporte <ChevronUpIcon size={18} active={openSettings} /></button>
                  <div className={"w-full transition-all duration-500 " + (openSettings ? "h-[176px]" : "h-0 overflow-hidden")}>
                    <Link href="/settings" className="flex items-center gap-4 w-full text-left font-semibold p-4 py-2.5 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><SettingsIcon size={18} /> Configuración y Privacidad</Link>
                    <button className="flex items-center gap-4 w-full text-left font-semibold p-4 py-2.5 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><HelpIcon size={18} /> Centro de Ayuda</button>
                    <button className="flex items-center gap-4 w-full text-left font-semibold p-4 py-2.5 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><EditIcon size={18} /> Mostrar</button>
                    <button className="flex items-center gap-4 w-full text-left font-semibold p-4 py-2.5 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10"><ShortcutsIcon size={18} /> Atajos de teclado</button>
                  </div>
                </Popover.Panel>
                </Transition>

                <Popover.Button ref={setOpenOptionPopper} className="outline-none flex items-center gap-4 p-3 lg:pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10">
                  <MoreIcon size={28} />
                  <p className="max-xl:hidden dark:text-white">Más opciones</p>
                </Popover.Button>
              </Popover>
            : null
          }

          <button className="transition duration-300 bg-[#7855FF] hover:bg-[#6c4de6] p-3.5 xl:p-3 w-fit xl:w-[85%] rounded-full mt-5">
            <div className="xl:hidden">
              <CreateTweetIcon size={24} />
            </div>
            <p className="text-white text-lg font-semibold max-xl:hidden">
              Twittear
            </p>
          </button>
        </div>

        {
          status !== "authenticated"
            ? <Popover className="w-full mt-auto max-md:hidden">
                <Transition
                  className="fixed w-[300px]"
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-95 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                <Popover.Panel ref={setPopperUser} style={userStyles.popper} {...userAttributes.popper} className="flex border dark:shadowtw dark:border-white/20 pt-3 h-fit w-fit pb-1 flex-col rounded-xl items-start bg-white dark:bg-black dark:text-white font-medium">
                  <button className="w-full text-left py-2 px-4 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10">Agregar una cuenta existente</button>
                  <button onClick={() => signOut()} className="w-full text-left py-2 px-4 transition duration-300 hover:bg-black/5 hover:dark:bg-white/10">Cerrar la sesion de {session?.username}</button>
                  <div className="h-3 w-3 max-xl:ml-5 xl:mx-auto -my-1 origin-bottom-left rotate-45 transform border-b border-r bg-white dark:bg-black dark:border-white/20"></div>
                </Popover.Panel>
                </Transition>

                <Popover.Button ref={setOpenUserPopper} className="outline-none max-lg:mx-auto max-md:hidden max-xl:w-fit cursor-pointer lg:px-3 lg:py-2 mb-4 flex gap-4 justify-between w-full rounded-full transition duration-300 hover:bg-black/10 hover:dark:bg-white/10">
                  <div className="flex gap-3 items-center">
                    <Image
                      className="rounded-full w-10 h-10 object-cover m-auto"
                      src={session?.picture ? session.picture : "/img/defaultprofile.jpg"}
                      width={50}
                      height={50}
                      alt="Foto de perfil"
                      unoptimized
                      priority
                    />
                    <div className="text-base max-xl:hidden">
                      <p className="font-semibold dark:text-white truncate max-w-[14ch]">
                        {session?.name}
                      </p>
                      <p className="text-slate-500 -mt-0.5 text-sm truncate max-w-[14ch]">
                        {session?.username}
                      </p>
                    </div>
                  </div>
                  <div className="my-auto max-xl:hidden">
                    <MenuIcon size={16} />
                  </div>
                </Popover.Button>
              </Popover>
            : null
        }
      </div>
    </header>
  );
}

function Footer () {
  const { pathname } = useRouter();

  return (
    <>
      <nav className="md:hidden fixed bottom-0 flex items-center justify-around inset-x-0 p-2 bg-white dark:bg-black border-t border-t-black/10 dark:border-t-white/20">
        <Link
          href="/"
          className={
            "flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
            (pathname === "/" ? "font-bold" : "")
          }
        >
          <HomeIcon size={28} active={pathname === "/"} />
        </Link>

        <Link
          href="/explore"
          className={
            "flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
            (pathname === "/" ? "font-bold" : "")
          }
        >
          <SearchIcon
            size={28}
            active={pathname === "/explore"}
          />
        </Link>

        <Link
          href="/notifications"
          className={
            "flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
            (pathname === "/" ? "font-bold" : "")
          }
        >
          <NotificationIcon
            size={28}
            active={pathname === "/notifications"}
          />
        </Link>

        <Link
          href="/messages"
          className={
            "flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 " +
            (pathname === "/" ? "font-bold" : "")
          }
        >
          <MessagesIcon
            size={28}
            active={pathname === "/messages"}
          />
        </Link>
      </nav>

      <footer className="w-[350px] max-lg:hidden ">
        <div className="fixed md:h-full px-4 max-w-[350px] flex flex-col gap-5 noscrollbar overflow-y-scroll md:border-l border-l-black/5 dark:border-l-white/20">
          <div className="sticky top-0 bg-white dark:bg-black py-1 w-full">
            <div className="group flex items-center gap-3 px-3 border bg-slate-100/20 dark:bg-slate-500/20 border-black/20 dark:border-white/20 rounded-3xl overflow-hidden w-full transition duration-200 focus-within:border-indigo-500 dark:focus-within:border-indigo-500">
              <button>
                <SearchIcon size={24} opacity={true} />
              </button>
              <input
                type="text"
                className="w-full py-2.5 outline-none bg-transparent"
                placeholder="Buscar en Twitter"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap text-[.75rem] font-medium gap-x-2 gap-y-1 dark:text-gray-500">
            <button className="hover:underline">Condiciones de Servicio</button>
            <button className="hover:underline">Política de Privacidad</button>
            <button className="hover:underline">Política de cookies</button>
            <button className="hover:underline">Accesibilidad</button>
            <button className="hover:underline">Información de anuncios</button>
            <button className="hover:underline">Más opciones...</button>
            <p>© 2023 X Corp.</p>
          </div>
          <div>
            <Darkmode />
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Layout ({ children }) {
  return (
    <>
      <div className="flex max-md:flex-col justify-center w-full">
        <Header />
        <main className="max-md:my-16 md:h-full md:max-w-[600px] overflow-y-scroll noscrollbar w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
