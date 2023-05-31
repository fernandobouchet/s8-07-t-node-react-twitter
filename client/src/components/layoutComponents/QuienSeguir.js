import { useGetAllUsersQuery } from "@/redux/services/usersApi";
import { useEffect, useState } from "react";
const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
function QuienSeguir() {
  const [randomData, setRandomData] = useState([]);
  const { data, isLoading, error } = useGetAllUsersQuery();
  console.log(data);

  useEffect(() => {
    if (data) {
      const randomUsers = [...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRandomData(randomUsers);
    }
  }, [data]);

  return (
    <>
      <div className="h-[322px] w-[330px] rounded-md dark:bg-[#16181C]">
        <h2 className="ml-3 mt-2 text-[23px] font-semibold dark:text-white">
          {" "}
          A quién seguir
        </h2>{
          randomData.map((user) => (
            <div key={user._id}>
              <div className="flex flex-row items-center gap-3 p-4">
                <Image
                  src=
                  {user.image}
                  width={50}
                  height={100}
                  alt="Avatar"
                  className="rounded-full"
                  unoptimized
                ></Image>
                <div className="grow">
                  <h3 className="font-bold dark:text-white">{user.name}</h3>
                  <p className="dark:text-gray-400 text-xs">@{user.email.split("@")[0]}</p>
                </div>
                <button className="ml-2 h-9 w-[72px] rounded-full bg-white text-sm font-bold dark:text-black">
                  Seguir
                </button>
              </div>
            </div>
          ))
        }
        <Link href="/explore" className="text-md ml-3 text-blue-500">
          Mostrar más
        </Link>
      </div>
    </>
  );
}

export default QuienSeguir;
