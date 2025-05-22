import { Link } from 'react-router-dom';
import Nav_bar from './Nav_bar';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { useState } from 'react';
import { supabase } from '../supabaseClient';


export default function Effectif() {

  const [players, setPlayers] = useState([])
  const user = localStorage.getItem("nom");

  useEffect(() => {
    getPlayers();
  }, [])

  async function getPlayers() {
    try {
      const {data, error} = await supabase
      .from("joueurs")
      .select("*")
      .limit(10);
      if (error) throw error;
      if (data != null) {
        setPlayers(data)
        console.log(players)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
    <Nav_bar /> 
  <section className='w-full mt-20 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto'>
    {
      players ?
      players.map(player => (
        <motion.div
        key={player.id}
        animate={{ x: [5, 2, 2], opacity: 1, scale: 1 }}
        
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.1 }}
        transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.2, 1, 1, 1],
          }}    
      >
        <Link to={`/player/${player.id}`} className="block rounded-lg p-4 shadow-sm shadow-indigo-100 ">
    <img
    alt=""
    src={player.url_image}
    className="h-56 w-full rounded-md object-cover"
  />
  <div className="mt-2">
    <dl>

      <div>
        <dd className="font-medium">{player.nom} {player.prenom}</dd>
      </div>
    </dl>
    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Position</p>
          <p className="font-medium">{player.poste}</p>
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Club</p>
          <p className="font-medium">{player.club}</p>
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Etat</p>
          {
            player.etat === "En forme" ? <p className="font-medium text-green-600">{player.etat}</p>
            : <p className="font-medium text-red-600">{player.etat}</p>
          }          
        </div>
      </div>
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <div className="mt-1.5 sm:mt-0">
          {
            user ? <button  className="bg-indigo-500 text-white font-medium py-2 mt-4 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
               Modifier / <span className='text-red-200'>Supprimer</span> &rarr;
            </button>
            : ""
          }
        
        </div>
      </div>
    </div>
  </div>
        </Link>
      </motion.div> 
      ))

      : <p>Loading players....</p>
    }
    </section>
    {
      user ?   <div className="flex items-center justify-center mb-10">
      <Link to="/inscription">
      <button className="bg-indigo-300 text-white hover:bg-indigo-400 font-bold py-2 px-4 mt-3 active:scale-95 rounded">Ajouter des joueurs </button>
      </Link>

      <Link to="/createAdmin">
      <button className="bg-indigo-300 text-white hover:bg-indigo-400 font-bold py-2 px-4 mt-3 active:scale-95 rounded">Ajouter un admin </button>
      </Link>
    
    </div>
       : ""
    }
  
        
    </>
    
  )
}
