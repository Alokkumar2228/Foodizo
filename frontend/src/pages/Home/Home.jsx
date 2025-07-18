import React,{useState , useEffect , useContext} from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './Home.css'

const Home = ({searchquery,recent1, recent2 ,setRecent1, setRecent2}) => {

  const[category,setCategory] = useState("All")
  const {loading} = useContext(StoreContext);
  

  return (
    <div>
      
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}  setRecent1={setRecent1} setRecent2={setRecent2}/>
      {
  loading ? (
    <div className="spinner-container">
      <img src={assets.spinner} alt="Loading..." className="spinner-gif" />
      <div className="spinner-text">Loading...</div>
    </div>
  ) : (
    <FoodDisplay category={category} searchquery={searchquery} recent1={recent1} recent2={recent2} />
  )
}
      <AppDownload/>
    </div>
  )
}

export default Home
