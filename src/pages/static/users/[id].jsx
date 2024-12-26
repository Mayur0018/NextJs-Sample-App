const Userpage = (props) => {
  console.log(props.data);

  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
    </div>
  );
};
export const getStaticPaths = async () => {
  const data = await (await fetch(`https://fakestoreapi.com/products/`)).json();
  console.log(data);
  const allUserId = data.map((product) => product.id);
  console.log(allUserId);

  return {
    paths: allUserId.map((ProductId) => ({ params: { id: `${ProductId}` } })),
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (
    await fetch(`https://fakestoreapi.com/products/${id}`)
  ).json();

  return {
    props: {
      data,
    },
  };
};
export default Userpage;
