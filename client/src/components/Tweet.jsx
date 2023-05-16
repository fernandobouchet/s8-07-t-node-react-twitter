import React from 'react'

import { BiMessageRounded } from 'react-icons/bi'
import { HiBadgeCheck } from 'react-icons/hi'
import { HiOutlineArrowsUpDown } from 'react-icons/hi2'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { SlOptions } from 'react-icons/sl'
import { IoStatsChart } from 'react-icons/io5'
import { IoIosLock } from 'react-icons/io'

const Tweet = (props) => {
  const { id, content, timestamp, imageSrc, likes, retweets, user, comments, like = false } = props
  const [num, t] = new Intl.RelativeTimeFormat('es', { numeric: 'auto' }).format(timestamp - timestamp - (2.8 * 10), 'minutes').split(' ').slice(1, 3)
  const [num2, t2] = new Intl.RelativeTimeFormat('es', { numeric: 'auto' }).format(timestamp - timestamp - (4 * 10), 'minutes').split(' ').slice(1, 3)
  return (
        <div key={id} className='h-auto w-full flex flex-row p-3 items-start cursor-pointer border-b dark:border-white/20 border-black/5 bg-white dark:bg-black dark:hover:bg-white/5 hover:bg-black/5 transition-colors duration-300 text-[#536471] dark:text-[#e7e9ea]' >
            <img src={ user.profileImage || 'https://avatars.githubusercontent.com/u/95777615?v=4'} alt={user.name} className='h-12 w-12 rounded-full mr-4 hover:opacity-90' />
            <div className=" w-full flex flex-col gap-1 text-[#536471] dark:bg-transparent" >
                <div className='flex flex-row items-start group gap-1 text-lg w-full' >
                    <h4 className="ml-2 inline-flex items-center align-middle font-bold text-black dark:text-[#e7e9ea] group-hover:underline" >{user.name}
                        {
                            user.private && <IoIosLock className='text-black dark:text-white ml-1' title='Cuenta verificada' />
                        }
                        {
                            user.verified && <HiBadgeCheck className='text-[#1d9bf0] ml-1' title='Cuenta verificada' />
                        }
                    </h4>
                    <span>{ '@' + user.username }</span>
                    <span>{num + t[0]}</span>
                </div>
                <p className='ml-2 dark:text-white' >{content}</p>
                {
                    imageSrc && (
                        <div className='max-w-fit max-h-fit py-2'>
                        <img src={imageSrc || "https://pbs.twimg.com/media/FkWOB7-WQAAPLaU?format=jpg&name=small"} className="object-fit rounded-3xl" alt="postImg" />
                    </div>
                    )
                }
                {retweets.length !== 0 && (
                    <div className="flex flex-col max-w-fit rounded-xl border border-black/5 hover:bg-black/10 overflow-hidden">
                    <div className="flex flex-col items-start p-3 gap-2 text-[#536471] dark:text-[#e7e9ea]" >
                        <div className='flex flex-row items-start group gap-2 text-lg w-full' >
                            <img src="https://pbs.twimg.com/profile_images/1612291632342122499/h2jKhVoh_400x400.jpg" alt="userImg" className='h-8 w-8 rounded-full bg-black hover:opacity-90' />
                            <h4 className="inline-flex items-center align-middle font-bold text-black dark:text-white group-hover:underline" >Leo Messi <HiBadgeCheck className='text-[#1d9bf0] ml-1' title='Cuenta verificada' /> </h4>
                            <span>@leomessisite</span>
                            <span>{num2 + t2.slice(0, 3)}</span>
                        </div>
                        <p>{retweets[0].content}</p>
                    </div>
                    <div className='max-w-fit max-h-[500px]'>
                        <img src="https://pbs.twimg.com/media/FkWOB7-WQAAPLaU?format=jpg&name=small" className="object-fit" alt="postImg" />
                    </div>
                </div>
                )}
                <div className='max-w-fit flex items-center gap-2' >
                    <div className='flex items-center align-middle space-x-1 cursor-pointer hover:text-[#1C9BEF] group' >
                        <BiMessageRounded className='icons group-hover:bg-[#1C9BEF]/10' title='Responder' />
                        <p className='text-sm' >{(comments.length + 2)}</p>
                    </div>
                    <div className='flex items-center align-middle space-x-1 cursor-pointer hover:text-[#00ba7c] group' >
                        <HiOutlineArrowsUpDown className='icons group-hover:bg-[#00ba7c]/10' title='Retweetear' />
                        <p className='text-sm' >{retweets.length + 5}</p>
                    </div>
                    <div className={`flex items-center align-middle space-x-1 cursor-pointer group ${like ? 'text-[#f91880]' : 'hover:text-[#f91880]'}`} >
                         { like ? <AiFillHeart className='icons group-hover:bg-[#f91880]/10' title='Me gusta' /> : <AiOutlineHeart className='icons group-hover:bg-[#f91880]/10' title='Me gusta' />}
                        <p className='text-sm' >{likes.length + 9}</p>
                    </div>
                    <div className='flex items-center align-middle space-x-1 cursor-pointer hover:text-[#1C9BEF] group' >
                        <IoStatsChart className='icons group-hover:bg-[#1C9BEF]/10' title='Ver' />
                        <p className='text-sm' >50</p>
                    </div>
                    <div className='flex items-center align-middle space-x-1 cursor-pointer hover:text-[#1d9bf0] group' >
                        <FiShare className='icons group-hover:bg-[#1d9bf0]/10' title='Compartir' />
                    </div>
                </div>
            </div>
            <div className='max-w-fit flex items-center align-middle -ml-2 cursor-pointer hover:text-[#1d9bf0] group' >
                <SlOptions className='icons w-10 h-10 group-hover:bg-[#1C9BEF]/10' title='Mas opciones' />
            </div>
        </div>
  )
}

export default Tweet
