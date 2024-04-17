import "./Home.scss"

const Home = () => {
  return (
    <div className="home__container">
     
    <main className="home">
     
     <h2 className="">Hi! My name is</h2>
          <h1 className="home__name">Maral <span className="home__name--last">Tach</span> </h1>
          <h2>I'm a Full Stack Web Developer</h2>
           
    
     
   </main>
   <div className="img_container">
   <img src="./img/avatar3.png" alt="" />
   </div>
  
    </div>

  )
}

export default Home