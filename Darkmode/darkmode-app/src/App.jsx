import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';

function App() {
   const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* <div className='container' 
      style={{height:"500px", width:"500px", border:"1px solid black", backgroundColor:darkMode?"black":"white",
        color:darkMode?"white":"black",
      }}>
        
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolorum facere repellendus fugit eius! Saepe officia reiciendis, harum sint deserunt facere? Iusto doloribus ullam laudantium. Eligendi aut dignissimos debitis quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia possimus odio est dolores consectetur libero non, saepe, ratione delectus dicta exercitationem repellat commodi quasi laborum expedita porro illo error ipsam?
      Earum nostrum labore dolorum corrupti fuga dolorem sit aliquam rerum, soluta eligendi, voluptate optio quibusdam nam veritatis omnis reprehenderit corporis consectetur culpa, possimus illum? Et distinctio explicabo quae iure totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolorem beatae molestiae ab exercitationem reprehenderit quaerat inventore dolore nihil minima. Nemo excepturi, aut tempora cum id vel a esse quae.
      Consequuntur eius ut enim, dignissimos natus deserunt. Accusamus, eaque adipisci. Aperiam expedita in, architecto, ad accusamus eos vel quasi aliquam nisi fugit sequi non sapiente accusantium delectus ipsam. Enim, consequuntur!
      Est corporis voluptate officia qui aperiam, rerum sed voluptatem inventore neque aut blanditiis, hic excepturi aliquam exercitationem? Aspernatur earum in optio eum ducimus! Adipisci beatae iste ducimus quos repellat incidunt.
      Aliquam alias distinctio incidunt debitis aut dolor nesciunt atque omnis, voluptatibus, ab doloribus deserunt itaque, quam velit quo commodi voluptates molestiae. Asperiores possimus explicabo magni, numquam reiciendis minus repudiandae vitae?
      Facere, dolorem architecto? Aperiam autem magni, ducimus voluptates architecto deserunt incidunt nihil corporis consequuntur animi. Voluptas rem repudiandae culpa nam odit assumenda doloremque, inventore obcaeca</p></div>

      <button onClick={()=>{
        setDarkMode(!darkMode);
      }}>CHANGE MODE</button> */}

    { <Home darkMode={darkMode} setDarkMode={setDarkMode} /> }
    </>
  )
}

export default App
