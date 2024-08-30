import { useLoaderData, useNavigate} from 'react-router-dom';

const Desc = () => {
  const product = useLoaderData();
  const history = useNavigate() 
  const handleClick = () => {
    fetch(`http://localhost:7000/products/${product.id}`, {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }
  return (
    <div className="card mt-3">
      <div className="card-body text-center mt-3">
        <h5 className="card-title">{product.product_name}</h5>
        <p className="card-text">{product.product_desc}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">
          <small className="text-body-secondary">only 3 left</small>
        </p>
        <button 
    className='btn' 
    onClick={handleClick}
    style={{
        backgroundColor: '#22333b',
        borderColor: '#22333b', 
        color: '#ffffff', 
        border: '1px solid #22333b', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer'
    }}
>
    DELETE
</button>

      </div>
    </div>
  );
};
export const DescLoader=async({params})=>{
  const { id } = params
  const res= await fetch(`http://localhost:7000/products/${id}`)
  if(!res){
    throw Error ('could not find this product');
  }
  return res.json();
}

export default Desc;
