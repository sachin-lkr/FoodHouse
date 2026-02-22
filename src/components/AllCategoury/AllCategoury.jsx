import allBanner from "../../assets/all-banner.jpg"
import Banner from "../Banner/Banner"
import Card from "../Card/Card"
import productList from "../CardTab"
const AllCategoury = () => {
  console.log(productList)
  return (
    <div>
        <Banner title=" All Products" banner={allBanner}/>
        <div className="grid grid-cols-3 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
            {productList.map((item)=>{
                return <Card image={item.image} name={item.name} price={item.price} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default AllCategoury