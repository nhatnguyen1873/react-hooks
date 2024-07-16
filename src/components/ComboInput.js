import { useState, memo, useMemo, useRef } from "react";

function ComboInput() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameInputRef = useRef();

  const totalPrice = useMemo(() => {
    const total = products.reduce((sum, product) => {
      return sum + product.price;
    }, 0);
    return total;
  }, [products]);

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, { name, price: +price }]);
    setName("");
    setPrice("");
    nameInputRef.current.focus();
  };

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      handleAddProduct();
    }
  };

  return (
    <>
      <input
        ref={nameInputRef}
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => handlePressEnter(e)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
        onKeyUp={(e) => handlePressEnter(e)}
      />
      <br />
      <button onClick={handleAddProduct}>Add</button>
      <h1>{totalPrice}$</h1>
      {products.length > 0 && (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}$
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default memo(ComboInput);
