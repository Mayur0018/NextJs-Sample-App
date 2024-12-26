const UserPage = (props) => {
  return (
    <div>
      return{" "}
      <div>
        {props.data.map((userData) => (
          <li key={userData.id}>
            <h6>{userData.title}</h6>
            <p>{userData.description}</p>
          </li>
        ))}
      </div>
      ;
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default UserPage;
