import Type from "../Type"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home__container">
     
    <main className="home">
     
     <h1 className="">Hi! My name is</h1>
          <h1 className="home__name">Akmaral <span className="home__name--last">Tach</span> </h1>
          <div style={{ padding: 10, textAlign: "left" }}>
                <Type />
              </div>
    
     
   </main>
   <div className="img_container">
   <img src="./img/avatar3.png" alt="" />
   </div>
  
    </div>

  )
}

export default Home