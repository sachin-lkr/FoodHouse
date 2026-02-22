import dairyBanner from "../../assets/dairy-banner.jpg";
import Banner from "../Banner/Banner";
import Card from "../Card/Card"
import productList from "../CardTab"

const Dairy = () => {
   let fillteredItems= productList.filter(item=>item.category==="Dairy");
  return (
    
    <div>
      <Banner banner={dairyBanner} title="Dairy & Eggs"/>
      <div className="grid grid-cols-3 gap-8  max-w-full h-full mx-auto md:px-20 px-5 md:py-10 py-5">
        {
          fillteredItems.map((item)=>{
            return <Card image={item.image} name={item.name} price={item.price} key={item.id}/>
          })
        }

      </div>
    </div>
  )
}

export default Dairy