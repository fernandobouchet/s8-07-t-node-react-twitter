/* eslint-disable indent */
import React, { useState } from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { HiOutlineGif } from 'react-icons/hi2'
import { AiOutlineHeart, AiFillHeart, AiOutlineGif, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5'
import { SlEmotsmile } from 'react-icons/sl'
import { BiCalendar, BiMap } from 'react-icons/bi'

const Post = () => {
    const [tweetText, setTweetText] = useState('')

    const handleTweetChange = (event) => {
            setTweetText(event.target.value)
    }

    const handleTweetSubmit = (event) => {
        event.preventDefault()
        console.log('Texto del tweet:', tweetText.length)
        setTweetText('')
    }
    return (
        <div className="w-full h-auto border-b border-black/5 dark:border-white/20 ">
            <div className="p-4">
                <div className="flex w-full items-start">
                    <div className="flex-shrink-0">
                        <img
                            className="w-12 h-12 rounded-full"
                            src="https://avatars.githubusercontent.com/u/95777615?v=4"
                            alt="Profile"
                        />
                    </div>
                    <div className="w-full ml-3 flex-row ">
                        <textarea
                            className="w-full resize-none focus:outline-none bg-transparent dark:text-white my-3 text-xl"
                            placeholder="¿Qué está pasando?"
                            value={tweetText}
                            onChange={handleTweetChange}
                        />
                        <div className="w-full flex flex-row justify-between ">
                            <div className='w-full flex items-center gap-1' >
                                <div className='flex items-center align-middle space-x-1 cursor-pointer text-[#1C9BEF] group' >
                                    <IoImageOutline className='icons group-hover:bg-[#1C9BEF]/10' title='Fotos y Videos' />
                                </div>
                                <div className='flex items-center align-middle space-x-1 cursor-pointer text-[#1C9BEF] group' >
                                    <HiOutlineGif className='icons group-hover:bg-[#1C9BEF]/10 ' title='Gif' />
                                </div>
                                <div className='flex items-center align-middle space-x-1 cursor-pointer text-[#1C9BEF] group' >
                                    <AiOutlineUnorderedList className='icons group-hover:bg-[#1C9BEF]/10 ' title='Encuesta' />
                                </div>
                                <div className='flex items-center align-middle space-x-1 cursor-pointer text-[#1C9BEF] group' >
                                    <BsEmojiSmile className='icons group-hover:bg-[#1C9BEF]/10 ' title='Emoji' />
                                </div>
                                <div className='flex items-center align-middle space-x-1 cursor-pointer text-[#1C9BEF] group' >
                                    <BiCalendar className='icons group-hover:bg-[#1C9BEF]/10 ' title='Programacion' />
                                </div>
                                <div className='flex items-center align-middle space-x-1 cursor-pointer text-[#1C9BEF] group' >
                                    <BiMap className='icons group-hover:bg-[#1C9BEF]/10 ' title='Etiquetar ubicacion' />
                                </div>
                            </div>
                            <button
                                className="bg-[#1d9bf0] text-white font-semibold px-4 rounded-full hover:bg-[#1a8cd8] disabled:bg-[#1a8cd8] disabled:cursor-not-allowed disabled:opacity-70 transition-opacity duration-400"
                                type="submit"
                                disabled={!tweetText.length}
                                onClick={handleTweetSubmit}
                            >
                                Twittear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

// const Post = () => {
//     const [tweetText, setTweetText] = useState('');
//     const [taggedUser, setTaggedUser] = useState('');
//     const [showAutocomplete, setShowAutocomplete] = useState(false);
//     const [autocompleteOptions, setAutocompleteOptions] = useState([]);

//     const handleTweetChange = (event) => {
//         const text = event.target.value;
//         setTweetText(text);

//         // Verificar si el texto contiene el símbolo "@" para mostrar opciones de autocompletar
//         if (text.includes('@')) {
//             const extractedText = text.substring(text.lastIndexOf('@') + 1);
//             // Puedes implementar aquí la lógica para obtener las opciones de autocompletar
//             // En este ejemplo, se generan opciones ficticias
//             const options = ['usuario1', 'usuario2', 'usuario3'].filter((option) =>
//                 option.toLowerCase().includes(extractedText.toLowerCase())
//             );
//             setAutocompleteOptions(options);
//             setShowAutocomplete(options.length > 0);
//         } else {
//             setShowAutocomplete(false);
//         }
//     };

//     const handleTaggedUserChange = (event) => {
//         setTaggedUser(event.target.value);
//     };

//     const handleOptionClick = (option) => {
//         const newTaggedUser = tweetText.substring(
//             0,
//             tweetText.lastIndexOf('@') + 1
//         );
//         setTaggedUser(newTaggedUser + option);
//         setTweetText('');
//         setShowAutocomplete(false);
//     };

//     const handleTweetSubmit = (event) => {
//         event.preventDefault();
//         console.log('Texto del tweet:', tweetText);
//         console.log('Usuario etiquetado:', taggedUser);
//         setTweetText('');
//         setTaggedUser('');
//     };

//     return (
//         <div className="w-full">
//             <div className="border border-gray-300 rounded p-4">
//                 <form onSubmit={handleTweetSubmit}>
//                     <textarea
//                         className="w-full resize-none mb-2 focus:outline-none"
//                         placeholder="¿Qué está pasando?"
//                         value={tweetText}
//                         onChange={handleTweetChange}
//                     />
//                     <input
//                         className="w-full mb-2 px-2 py-1 border border-gray-300 rounded focus:outline-none"
//                         type="text"
//                         placeholder="@Usuario"
//                         value={taggedUser}
//                         onChange={handleTaggedUserChange}
//                     />
//                     {showAutocomplete && (
//                         <ul className="bg-white border border-gray-300 rounded mt-1 py-1 px-2">
//                             {autocompleteOptions.map((option) => (
//                                 <li
//                                     key={option}
//                                     className="cursor-pointer hover:bg-blue-100 py-1 px-2"
//                                     onClick={() => handleOptionClick(option)}
//                                 >
//                                     {option}
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                     <button
//                         className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
//                         type="submit"
//                     >
//                         Tweet
//                     </button>
//                 </form>
//             </div>
//         </div>
//   )
// }

// export default Post
