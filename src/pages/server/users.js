import React from "react";

function users(props) {
  console.log("props", props);

  return <div>{props.data.map((userData)=>(
    <li key={userData.id}>
        <h6>{userData.title}</h6>
        <p>{userData.description}</p>
    </li>
  ))}</div>;
}

export const getServerSideProps = async () => {
  console.log("A Task Is Going On in The Serve");
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default users;
