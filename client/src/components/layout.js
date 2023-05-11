import Darkmode from '@/components/darkmode'
import { BookmarkIcon, CreateTweetIcon, ExploreIcon, HomeIcon, ListIcon, MenuIcon, MessagesIcon, Moon, MoreIcon, NotificationIcon, ProfileIcon, SearchIcon, Sun, TwitterIcon } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Header () {

  const {pathname} = useRouter()

  return (
    
    <header className='flex justify-end w-full md:w-24 xl:w-full lg:max-w-[300px]'>
      <div className='flex flex-col gap-5 min-w-max px-2 xl:px-4 items-center h-full md:fixed max-md:w-full xl:w-[300px] overflow-y-scroll noscrollbar md:border-r border-r-black/5 dark:border-r-white/20'>
        <div className='md:hidden fixed top-0 bg-white dark:bg-black flex items-center justify-between px-4 py-3 w-full border-b border-b-black/10 dark:border-b-white/20'>
          <Link
            href="/"
          >
            <TwitterIcon size={24} />
          </Link>
          
          <div className='group flex items-center gap-1 px-2 border bg-slate-100/20 dark:bg-slate-500/20 border-black/20 dark:border-white/20 rounded-2xl overflow-hidden w-full max-w-[60%] transition duration-200 focus-within:border-indigo-500  dark:focus-within:border-indigo-500'>
            <button>
              <SearchIcon size={20} opacity={true} />
            </button>
            <input type='text' className='w-full text-sm py-1.5 outline-none bg-transparent' placeholder='Buscar en Twitter'>
            </input>
          </div>

          <button>
            <MenuIcon size={24} />
          </button>

        </div>

        <div className='hidden w-full md:flex flex-col max-xl:items-center py-1 gap-1.5'>
          <Link
            className='p-3 transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 w-fit rounded-full'
            href="/"
          >
            <TwitterIcon size={28} />
          </Link>

          <Link 
            href="/" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
          >
            <HomeIcon size={28} active={pathname === "/"? true : false} /> <p className='max-xl:hidden dark:text-white'>Inicio</p>
          </Link>
          
          <Link 
            href="/explore" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/explore"? "font-bold" : "")}
          >
            <ExploreIcon size={28} active={pathname === "/explore"? true : false} /> <p className='max-xl:hidden dark:text-white'>Explorar</p>
          </Link>
          
          <Link 
            href="/notifications" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/notifications"? "font-bold" : "")}
          >
            <NotificationIcon size={28} active={pathname === "/notifications"? true : false} /> <p className='max-xl:hidden dark:text-white'>Notificaciones</p>
          </Link>
          
          <Link 
            href="/messages" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/messages"? "font-bold" : "")}
          >
            <MessagesIcon size={28} active={pathname === "/messages"? true : false} /> <p className='max-xl:hidden dark:text-white'>Mensajes</p>
          </Link>
          
          <Link 
            href="/lists" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/lists"? "font-bold" : "")}
          >
            <ListIcon size={28} active={pathname === "/lists"? true : false} /> <p className='max-xl:hidden dark:text-white'>Listas</p>
          </Link>
          
          <Link 
            href="/bookmarks" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/bookmarks"? "font-bold" : "")}
          >
            <BookmarkIcon size={28} active={pathname === "/bookmarks"? true : false} /> <p className='max-xl:hidden dark:text-white'>Guardados</p>
          </Link>
          
          <Link 
            href="/profile" 
            className={'flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/profile"? "font-bold" : "")}
          >
            <ProfileIcon size={28} active={pathname === "/profile"? true : false} /> <p className='max-xl:hidden dark:text-white'>Perfil</p>
          </Link>
          
          <Link 
            href="/" 
            className='flex items-center gap-4 p-3 pr-4 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10'
          >
            <MoreIcon size={28} /><p className='max-xl:hidden dark:text-white'>Más opciones</p>
          </Link>

          <button className='transition duration-300 bg-[#7855FF] hover:bg-[#6c4de6] p-3.5 xl:p-3 w-fit xl:w-[85%] rounded-full mt-5'>
            <div className='xl:hidden'>
              <CreateTweetIcon size={24} />
            </div>
            <p className='text-white text-lg font-semibold max-xl:hidden'>Twittear</p>
          </button>

        </div>

        <div className='max-md:hidden mt-auto max-xl:w-fit cursor-pointer lg:px-3 py-2 mb-4 flex gap-4 justify-between w-full rounded-full transition duration-300 hover:bg-black/10 hover:dark:bg-white/10'>
          <div className='flex gap-3'>
            <Image
              className='rounded-full w-10 h-10 object-cover m-auto'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXu4-Scl4Wm6xzN9sYMslJ5ru9EY5gpfvHw&usqp=CAU"
              width={50}
              height={50}
              alt="Foto Perfil"
              unoptimized
              priority
            />
            <div className='text-base max-xl:hidden'>
              <p className='font-semibold dark:text-white truncate max-w-[14ch]'>Usuario</p>
              <p className='text-slate-500 -mt-0.5 text-sm truncate max-w-[14ch]'>@Usuario</p>
            </div>
          </div>
          <button className='max-xl:hidden'>
            <MenuIcon size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer () {

  const {pathname} = useRouter()

  return (
    <>
    
    <nav className='md:hidden fixed bottom-0 flex items-center justify-around inset-x-0 p-2 bg-white dark:bg-black border-t border-t-black/10 dark:border-t-white/20'>
      <Link 
        href="/" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <HomeIcon size={28} active={pathname === "/"? true : false} />
      </Link>

      <Link 
        href="/explore" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <SearchIcon size={28} active={pathname === "/explore"? true : false} />
      </Link>

      <Link 
        href="/notifications" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <NotificationIcon size={28} active={pathname === "/notifications"? true : false} />
      </Link>

      <Link 
        href="/messages" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <MessagesIcon size={28} active={pathname === "/messages"? true : false} />
      </Link>
    </nav>

    <footer className='w-[350px] max-lg:hidden '>
      <div className='fixed md:h-full px-4 max-w-[350px] flex flex-col gap-5 noscrollbar overflow-y-scroll md:border-l border-l-black/5 dark:border-l-white/20'>
        
        <div className='sticky top-0 bg-white dark:bg-black py-1 w-full'>
          <div className='group flex items-center gap-3 px-3 border bg-slate-100/20 dark:bg-slate-500/20 border-black/20 dark:border-white/20 rounded-3xl overflow-hidden w-full transition duration-200 focus-within:border-indigo-500 dark:focus-within:border-indigo-500'>
            <button>
              <SearchIcon size={24} opacity={true} />
            </button>
            <input type='text' className='w-full py-2.5 outline-none bg-transparent' placeholder='Buscar en Twitter'>
            </input>
          </div>
        </div>

        <div className='flex flex-wrap text-[.75rem] font-medium gap-x-2 gap-y-1 dark:text-gray-500'>
          <button className='hover:underline'>Condiciones de Servicio</button>
          <button className='hover:underline'>Política de Privacidad</button>
          <button className='hover:underline'>Política de cookies</button>
          <button className='hover:underline'>Accesibilidad</button>
          <button className='hover:underline'>Información de anuncios</button>
          <button className='hover:underline'>Más opciones...</button>
          <p>© 2023 X Corp.</p>
        </div>
        
        <div>
          <Darkmode/>
        </div>

      </div>
    </footer>
    </>
  )
}

export default function Layout ({ children }) {

  return (
    <>
    <div className='flex max-md:flex-col justify-center w-full gap-2'>
      <Header />  
      <main className='max-md:my-16 md:h-full md:max-w-[600px] max-md:overflow-y-scroll noscrollbar w-full'>
        {children}
      </main>
      <Footer />   
    </div>
    </>
  )
}
