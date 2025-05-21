import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./Carousel";
import Footer from "./Footer";

const Getjersey = () => {
  // create hooks that will help you manage different state

  const[loading, setLoading] = useState("");
  const[error, setError] = useState("");

  const navigate = useNavigate();

  // create a hook that will hold all the products fetched from the API
  const[products, setProducts] = useState([]);

  console.log(products)

  //specify the image url
  const img_url = "https://CarlsonKadendi.pythonanywhere.com/static/images/"
  // https://justpaste.it/je01o

  // create a function that will help you fetch the different products
  const fetchProducts = async () =>{

    // update the loading hook with a message
    setLoading("Please wait as we retrieve the products...")

    try{
      // access the api using the axios library
      const response = await axios.get("https://CarlsonKadendi.pythonanywhere.com/api/getproducts")

      // update the products hook with the different products fetched from the api
      setProducts(response.data)

      //set the loading hook back to default
      setLoading("");
    }
    catch(error){
      //set the loading hook back to default
      setLoading("");

      setError(error.message)

    }
  }

  // Below we shall use the useEffect hook that will call the fetchproducts function every time a person accesses the getproducts component
  useEffect(() => {fetchProducts()}, [])

  return (
   
    <div>
      <div className="row p-3">
      <h3 className="text-info mt-2">Available Products</h3>
      <ImageCarousel/>

     <b className="text-success">{loading}</b>
     <b className="text-danger">{error}</b>

      {products.map((product)=> (

      <div className="col-md-3 justify-content-center mt-3">
        <div className="card shadow p-1">
          <img src={img_url + product.product_photo} alt=""  className="product_img"/>

          {/* product details */}
          <div className="card-body">
            <h5 className="text-primary"> {product.product_name} </h5>
            <p className="text-muted">{product.product_description.slice(0, 50)}...</p>
            <b className="text-warning"> <span className="text-dark">Kes </span>{product.product_cost} </b><br />

            <button className="btn btn-info" onClick={() =>navigate("/makepayment", {state : {product}})}>Buy now</button>
          </div>
        </div>
      </div>
     
      ))}

    </div>
    <Footer/>
    </div>
   
  )
}

export default Getjersey