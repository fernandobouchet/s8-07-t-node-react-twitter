const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

function QuienSeguir() {
  return (<div className="w-[330px] h-[318px] rounded-md dark:bg-[#16181C]">
    <h2 className="dark:text-white text-[23px] ml-3 mt-2 font-semibold"> A quién seguir</h2>
    <div className="flex flex-row gap-5 p-4 items-center">
      <Image src={"https://pbs.twimg.com/profile_images/1412629073956950022/8KqC1cmp_400x400.jpg"} width={50} height={100} alt="Avatar" className="rounded-full" unoptimized></Image>
      <div className="grow">
        <h3 className="dark:text-white font-bold">Rodrigo de Paul</h3>
        <p className="dark:text-gray-400">@rodrigodepaul</p>
      </div>
      <button className="dark:text-black bg-white rounded-full w-[72px] h-9 text-sm font-bold ml-2">Seguir</button>
    </div>
    <div className="flex flex-row gap-5 p-4 items-center">
      <Image src={"https://pbs.twimg.com/profile_images/515223776553103361/KF1NzwTW_400x400.jpeg"} width={50} height={100} alt="Avatar" className="rounded-full" unoptimized></Image>
      <div className="grow">
        <h3 className="dark:text-white font-bold">Lionel Scaloni</h3>
        <p className="dark:text-gray-400">@rodrigodepaul</p>
      </div>
      <button className="dark:text-black bg-white rounded-full w-[72px] h-9 text-sm font-bold ml-auto">Seguir</button>
    </div>
    <div className="flex flex-row gap-5 p-4 items-center">
      <Image src={"https://pbs.twimg.com/profile_images/1604559776297385991/UoGVbhBu_400x400.jpg"} width={50} height={100} alt="Avatar" className="rounded-full" unoptimized></Image>
      <div className="grow">
        <h3 className="dark:text-white font-bold">AFA</h3>
        <p className="dark:text-gray-400">@afa</p>
      </div>
      <button className="dark:text-black bg-white rounded-full w-[72px] h-9 text-sm font-bold ml-auto">Seguir</button>

    </div>
    <Link href="/explore" className="text-blue-500 ml-3 text-md">Mostrar más</Link>

  </div >)
}

export default QuienSeguir;
