import { useRouter } from "next/router";

export default function UserSettings() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>this is setings page For {router.query.username}</h1>
      <button
        className=" bg-red-500 rounded-lg text-[12px] mx-10"
        onClick={(e) => router.push(`/user/${router.query.username}/setings`)}
      >
        Open Setting Pages
      </button>
    </div>
  );
}
