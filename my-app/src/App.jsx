import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <hr />
      {loading ? (
        <p className="loading">Loading Product...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white"
            >
              <img
                className="w-full rounded-xl"
                src={product.image}
                alt={product.title}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="mt-2 text-gray-800 font-semibold">
                  ${product.price}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-yellow-500 text-lg">
                    ⭐ {product.rating.rate}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    ({product.rating.count} reviews)
                  </span>
                  <hr></hr>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>


  );
}

export default App;
