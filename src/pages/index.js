import {useSession ,signIn,signOut} from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log(session);
   
  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }

  return (
   <div>
    <h1> The Man The Legend The Myth Im Beter Than ALL</h1>
    <h1>Hello {session?.data?.user?.name}</h1>
    <button onClick={signOut}>LogOut</button>
   </div>
  );
}
