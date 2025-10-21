import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import api from "../../api/axios"

export default function CategoryComp() {
    const [category,setCategory] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      const getCategories= async() =>{
      const res= await api.get('/categories')
      setCategory(res.data)
      }
      getCategories()
    }
    ,[])
    const handleClick = (e) =>{
        navigate(`/products/category/${e}`)
    }
    return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:flex lg:flex-col">
      {category.map(c=>(<div  onClick={()=>handleClick(c._id)} value={c.name} className="p-2 cursor-pointer sm:hover:translate-x-5 hover:underline  transition-all duration-300" key={c._id}>
        {c.name}
        </div>))}
    </div>
  )
}
