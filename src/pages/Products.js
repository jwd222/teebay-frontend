import productList from '../data/productList'
import { Product } from '../components'

const Products = () => {
  return (
    <>
      <div className="d-flex flex-row-reverse m-4">
        <button className="btn btn-danger">Logout</button>
      </div>
      <div className="d-flex flex-column align-items-center h-100 justify-content-center">
        <h3>All products</h3>
        {productList.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              description={product.description}
              date={product.date}
            />
          )
        })}
        <div className="d-flex m-4 flex-row-reverse">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </div>
    </>
  )
}
export default Products
