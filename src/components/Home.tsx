import { Link } from "react-router-dom"


type productProp={
    products: any,
    search:any,
    menu:any
}

function Home({products,search, menu}:productProp) {
  return (
    <div className="grid grid-cols-4 p-5">
        {products?.filter((data:any)=>data?.title?.includes(search?search:menu)).map((data:any)=>{
            return <Link to='/details' state={{data:data}}><div className="border border-spacing-1 p-2 ml-3 mt-3 rounded-md">
                <img src={data?.image} alt="" className="w-60 h-48"/>
                <h1 className="font-bold text-xl mt-10">₹ {data?.price}</h1>
                <h1 className="text-gray-400 text-sm">{data?.model} {data?.title}</h1>
                <h1>{data?.category}</h1>
            </div></Link>
        })}
    </div>
  )
}

export default Home