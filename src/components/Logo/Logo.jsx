import {Link} from "react-router-dom"
function Logo(){
    return(
      <Link to="/" className="text-2xl font-bold items-center">
          Food<span className="text-orange-500 text-[26px]">H</span>ouse
        </Link >
    )
};
export default Logo;