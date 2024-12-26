// https://dummyjson.com/products
// import { useEffect, useState } from "react";
import Link from "next/link";
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsDeatils() {
  const { data, error } = useSwr("https://fakestoreapi.com/products/", fetcher);
  console.log(data);
  if(error) return <div>Faild To Load Product</div>
  if(!data) return <div>Loading.............</div>

  //   const [Data, SetData] = useState([]);
  //   console.log("productData", Data);
  //   useEffect(() => {
  //     async function ProductData() {
  //       const data = await fetch("https://fakestoreapi.com/products/");
  //       SetData(await data.json());
  //     }
  //     ProductData();
  //   }, []);
  return (
    <div>
      {data.map((userData) => 
         (
          <Link href={`/users/${userData.id}`} key={userData.id}>
            <div>{userData.category}</div>
          </Link>
        )
      )}
    </div>
  );
}
