import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function productDetails() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  const id = router.query.id;

  useEffect(() => {
    if (!id) return;
    async function getuserId(id) {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      setUserInfo(await data.json());
    }
    getuserId(id);
  }, [id]);
  return (
    <div>
      <h1>{userInfo?.title}</h1>
    </div>
  );
}
