import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser  = ()=> ({username : "Mayur",loading:false})
export default function UserSettings() {
  const router = useRouter();
  console.log(router);
const user = useUser();

useEffect(()=>{
    if(user.username == null){
        router.replace("/")
    }
})

  return (
    <div>
      <h1>this is setings page For {router.query.username}</h1>
      <button
        className=" bg-red-500 rounded-lg text-[12px] mx-10"
        onClick={(e) =>
          router.push({
            pathname: "/user/[username]/setings",
            query: { username: router.query.username },
          })
        }
      >
        Open Setting Pages
      </button>
      <button onClick={(e) => router.replace("/")}>Go to Home</button>
    </div>
  );
}
