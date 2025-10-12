import { useState } from "react"
import { useNavigate } from "react-router"

export default function CategoryComp() {
    const [category] = useState(["Women's Fashion","Men's Fashion","Electronics","Home & LifeStyle","Medicine","Sports","Baby's & Toys","Groceries & Pets", "Health & Beauty"])
    const navigate = useNavigate()
    const handleClick = (e) =>{
        navigate(`/${e}`)
    }
    return (
    <div className="flex sm:flex-col">
      {category.map(c=>(<div  onClick={()=>handleClick(c)} value={c} className="p-3 ml-5 cursor-pointer" key={c}>
        {c}
        </div>))}
    </div>
  )
}
