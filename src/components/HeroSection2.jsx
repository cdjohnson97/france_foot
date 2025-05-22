
import franceLogo from '../assets/J_O.png'
import { useNavigate } from 'react-router-dom';



const Effectif = () => {
    const user = localStorage.getItem("address_mail");

    const history = useNavigate();

    const moreNews = () => {
        history('/Articles')
    }

  
    return (
     
      
      <section className="w-full mt-2 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
            <img src={franceLogo} />
        </div>
          
        <div>
            <h2 className='text-center text-2xl md:text-1xl mb-8'>Jeux Olympiques</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nisi eligendi 
                 vitae aperiam, nihil obcaecati quasi consequatur.
                Fugit vel voluptatibus error.
                Lorem, ipsum dolor sit amet consectetur
                 adipisicing elit. Nesciunt ea odit quia voluptas vero rem
               alias! Rem reprehenderit, provident quibusdam nulla impedit
               </p>
               <button onClick={moreNews} className="bg-indigo-500 text-white font-medium py-2 mt-4 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
               Pour plus d'articles &rarr;
            </button>
        </div>
      </section>
    );
  };
  
 
  
  
  export default Effectif;