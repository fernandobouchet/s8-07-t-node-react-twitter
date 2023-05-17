import Post from '@/components/Post'
import Tweet from '@/components/Tweet'
import React, { useState } from 'react'
import Link from 'next/link'
function Home () {
  const [isSelected, setIsSelected] = useState('para-ti')
  const arrayTweets = [
    {
      id: 'ac82',
      content: 'DALE CAMPEON DALE CAMPEON!!!!!!! 🌎🏆',
      timestamp: Date.now(),
      imageSrc: null,
      likes: [],
      retweets: [],
      user: {
        id: '1a',
        verified: true,
        private: true,
        name: 'Maxi',
        username: 'MaxiiMartins',
        profileImage: 'https://avatars.githubusercontent.com/u/95777615?v=4',
        followers: [],
        following: []
      },
      comments: []
    },
    {
      id: 'ab13',
      content: 'CAMPEONES DEL MUNDO!!!!!!! 🌎🏆',
      timestamp: Date.now(),
      imageSrc: 'https://pbs.twimg.com/media/FkWOB7-WQAAPLaU?format=jpg&name=small',
      likes: [
        {
          id: '12113f',
          userId: '1a',
          tweetId: 'ab13'
        }
      ],
      retweets: [],
      user: {
        id: '10',
        verified: true,
        private: false,
        name: 'Leo Messi',
        username: 'leomessisite',
        profileImage: 'https://pbs.twimg.com/profile_images/1612291632342122499/h2jKhVoh_400x400.jpg',
        followers: [],
        following: []
      },
      comments: [{
        id: '123sc',
        content: 'VAMOS MESSI!! DALE CAMPEON!!!!!!! 🌎🏆',
        timestamp: Date.now(),
        imageSrc: null,
        likes: [],
        retweets: [],
        user: {
          id: '1a',
          verified: true,
          private: true,
          name: 'Maxi',
          username: 'MaxiiMartins',
          profileImage: 'https://avatars.githubusercontent.com/u/95777615?v=4',
          followers: [],
          following: []
        },
        comments: []
      }]
    },
    {
      id: '43dd',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores molestias eaque magnam, dolore aperiam, dolor modi totam rerum officiis quis in ad',
      timestamp: Date.now(),
      imageSrc: "https://pbs.twimg.com/media/FvO6aUXXwAEMWHo?format=jpg&name=large",
      likes: [],
      retweets: [],
      user: {
        id: '312',
        verified: true,
        private: false,
        name: 'Cristiano Ronaldo',
        username: 'Cristiano',
        profileImage: 'https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg',
        followers: [],
        following: []
      },
      comments: []
    },
    {
      id: '23gaa',
      content: '👟🔥 @adidasfootball',
      timestamp: Date.now(),
      imageSrc: 'https://pbs.twimg.com/media/FufRHP3WYAcESCp?format=jpg&name=small',
      likes: [
        {
          id: '12113f',
          userId: '1a',
          tweetId: 'ab13'
        }
      ],
      retweets: [],
      user: {
        id: '10',
        verified: true,
        private: false,
        name: 'Leo Messi',
        username: 'leomessisite',
        profileImage: 'https://pbs.twimg.com/profile_images/1612291632342122499/h2jKhVoh_400x400.jpg',
        followers: [],
        following: []
      },
      comments: []
    },
    {
      id: 'ab12',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores molestias eaque magnam, dolore aperiam, dolor modi totam rerum officiis quis in ad',
      timestamp: Date.now(),
      imageSrc: null,
      likes: [],
      retweets: [],
      user: {
        id: '1a',
        verified: true,
        private: false,
        name: 'Cristiano Ronaldo',
        username: 'Cristiano',
        profileImage: 'https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg',
        followers: [],
        following: []
      },
      comments: []
    },
    {
      id: 'ab16',
      content: '👟🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores molestias eaque magnam',
      timestamp: Date.now(),
      imageSrc: "https://picsum.photos/500/600",
      likes: [
        {
          id: '12113f',
          userId: '1a',
          tweetId: 'ab13'
        }
      ],
      retweets: [],
      user: {
        id: '10',
        verified: true,
        private: false,
        name: 'Leo Messi',
        username: 'leomessisite',
        profileImage: 'https://pbs.twimg.com/profile_images/1612291632342122499/h2jKhVoh_400x400.jpg',
        followers: [],
        following: []
      },
      comments: []
    },
    {
      id: 'ab1d',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores molestias eaque magnam, dolore aperiam, dolor modi totam rerum officiis quis in ad',
      timestamp: Date.now(),
      imageSrc: null,
      likes: [],
      retweets: [],
      user: {
        id: '1a',
        verified: true,
        private: false,
        name: 'Cristiano Ronaldo',
        username: 'Cristiano',
        profileImage: 'https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg',
        followers: [],
        following: []
      },
      comments: []
    },
    {
      id: 'ac23',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores molestias eaque magnam 🔥',
      timestamp: Date.now(),
      imageSrc: "https://picsum.photos/400/500",
      likes: [
        {
          id: '12113f',
          userId: '1a',
          tweetId: 'ab13'
        }
      ],
      retweets: [],
      user: {
        id: '10',
        verified: true,
        private: false,
        name: 'Leo Messi',
        username: 'leomessisite',
        profileImage: 'https://pbs.twimg.com/profile_images/1612291632342122499/h2jKhVoh_400x400.jpg',
        followers: [],
        following: []
      },
      comments: []
    }
  ]

  return (
        <>
            <Header isSelected={isSelected} setIsSelected={setIsSelected} />
            <Post />
            {
                arrayTweets.length && arrayTweets.filter(tweet => isSelected === "siguiendo" ? tweet.user.username !== 'Cristiano' : tweet.user.username !== '').map((tweet) => (
                    <Tweet key={tweet.id} {...tweet} />
                ))
            }
        </>
  )
}

export default Home

const Header = ({ isSelected, setIsSelected }) => {
  return (
        <div className="sticky bg-white/75 dark:text-[#e7e9ea] dark:bg-black border-b border-black/5 dark:border-white/20 z-10 backdrop-blur-md top-0">
            <div className="flex items-center justify-between px-4 py-3">
                <Link href="/home" >
                    <div>
                        <h2 className="text-xl font-bold">Inicio</h2>
                    </div>
                </Link>
            </div>
            <div className="flex text-[#536471]">
                <div onClick={() => setIsSelected('para-ti')} className={`flex items-center justify-center w-full h-[60px] text-md p-4 ${isSelected === 'para-ti' ? 'font-bold text-black dark:text-[#e7e9ea]' : 'text-gray-500 dark:text-[#536471] font-semibold'}  hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer transition duration-200 ease-in-out`}>
                    <div className={`inline-block text-center border-b-4 ${isSelected === 'para-ti' ? 'border-b-[#1C9CEF]' : 'border-b-transparent'} h-[60px] `}>
                        <div className="my-auto mt-4">Para ti </div>
                    </div>
                </div>
                <div onClick={() => setIsSelected('siguiendo')} className={`flex items-center justify-center w-full h-[60px] text-md  p-4 ${isSelected === 'siguiendo' ? 'font-bold text-black dark:text-[#e7e9ea]' : 'text-gray-500 dark:text-[#536471] font-semibold'}  hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer transition duration-200 ease-in-out`} >
                    <div className={`inline-block text-center border-b-4 ${isSelected === 'siguiendo' ? 'border-b-[#1C9CEF]' : 'border-b-transparent'} h-[60px] `}>
                        <div className="my-auto mt-4">Siguiendo </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
