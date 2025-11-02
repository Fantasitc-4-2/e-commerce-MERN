import { useEffect, useState } from "react";
import api from "../api/axios";

export default function InputBar({
  children,
  placeholder,
  classes,
  value,
  handleChange,
  id = "",
  name = "",
  type = "text",
  onKeyDown,
})




{
  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(10);
  const [search,setSearch]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory]=useState("");

  const params = new URLSearchParams();
  if (page) params.append("page", page);
  if (limit) params.append("limit", limit);
  if (search) params.append("search", search);
  if (price) params.append("price", price);
  if (category) params.append("category", category);

  const url=`/products?${params.toString()}`;

  useEffect(() => {
    // Fetch products based on the constructed URL
    const getProducts = async () => {
    const res = await api.get(url);
  const data =  res.data;
  setProducts(data);
  }
    console.log("Fetching products from:", url);
    // You can replace the console.log with an actual fetch call
  }, [url]);
  return (
    <div className={`flex items-center rounded-md  px-4 py-2 ${classes}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="mr-8 w-full focus:outline-none "
        id={id}
        name={name}
        onKeyDown={onKeyDown}
      />
      {children}
    </div>
  );
}
  