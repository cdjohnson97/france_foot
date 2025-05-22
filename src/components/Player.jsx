import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { supabase } from '../supabaseClient'; 
import Nav_bar from './Nav_bar'; 
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import sv from '../assets/sv.json';




export default function Player() {
  const [player, setPlayer] = useState(null);
  const { slug } = useParams();

  const user = localSorage.getItem("nom");


 const [dossard, setDosssard] = useState()
 const [poste, setPoste] = useState()
 const [etat, setEtat] = useState();
 const [club, setClub] = useState();

 const history = useNavigate()

  useEffect(() => {
    async function getPlayer() {
      try {
        const { data, error } = await supabase
          .from('joueurs')
          .select('*')
          .eq('id', slug);
        if (error) throw error;
        if (data.length > 0) {
          setPlayer(data[0]);
        }
      } catch (error) {
        console.error('Error fetching player:', error.message);
      }
    }
    getPlayer();
  }, [slug]);

  
   async function  submitForm  (event)  {
    event.preventDefault()
    
    try {
      const {data, error} = await supabase
      .from("joueurs")
      .update({ 
        poste : poste,
        dossard: dossard,
        etat: etat,
        club: club
      })
      .eq('id', slug);
      if (error) throw error;
     
    } catch (error) {
      console.log(error.message);
    }

    Swal.fire({
      title: `Informations modifiées `,
      text: "",
      icon: "success",
    })

    history("/effectif")
  }

  async function  deletePlayerConfirm  () {

    try {
      const {data, error} = await supabase
      .from("joueurs")
      .delete()
      .eq('id', slug);
      if (error) throw error;
     
    } catch (error) {
      console.log(error.message);
    }

  }

  async function  deletePlayer  (event)  {
    event.preventDefault()

    Swal.fire({
      title: 'Voulez-vous vraiment supprimer ce joueur ?',
      text: '',
      icon: 'warning',
      confirmButtonColor: 'red',
      confirmButtonText: 'Oui, Supprimer',
    }).then((result) => {
      if (result.isConfirmed) {
        deletePlayerConfirm()
        Swal.fire({
          title: 'Joueur supprimé !',
          text: '',
          icon: 'success',
        });
        history("/effectif")
      } else {
        return
      }
    })

  }
    
  if (!player) {
    return <div className='flex justify-center items-center h-screen'><Lottie animationData={sv} /></div>
  }

  return (
    <>
      <Nav_bar />
      {user ?  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-20 p-12">
        <div className="h-32 rounded-lg ">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={player.url_image}
                alt=""
                className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0 rounded"
              />
              <img
                src={player.url_image2}
                alt=""
                className="absolute object-cover opacity-5 group-hover:opacity-100 rounded h-50"
              />
            </div>
          </a>
        </div>
        <div className="h-32 rounded-lg">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-lg p-4">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-4xl">{player.nom} {player.prenom}</h1>
              <form onSubmit={submitForm}  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <p className="text-center text-lg font-medium">{player.poste}</p>
                <div>
                  
                </div>
                <div>
                
                </div>
                <div>
                  <input
                    value={dossard} onChange={(e) => setDosssard(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier le dossard"
                    defaultValue={player.dossard}
                  />
                </div>
                <div>
                  <input
                    value={poste} onChange={(e) => setPoste(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier le poste du joueur"
                    defaultValue={player.poste}
                  />
                </div>
                <div>
                  <input
                    value={club} onChange={(e) => setClub(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier le club du joueur"
                    defaultValue={player.club}
                  />
                </div>
                <div>
                  <input
                    value={etat} onChange={(e) => setEtat(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier la forme du joueur"
                    defaultValue={player.etat}
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Modifier les informations
                </button>
                <button
                  type="button"
                  onClick={deletePlayer}
                  
                  className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Supprimer définitivement le joueur
                </button>
                <p className="text-center text-sm text-gray-500">
                  Voir tous les <Link className="underline" to="/effectif">joueurs</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>  : 
      
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-20 p-12">
        <div className="h-32 rounded-lg ">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={player.url_image}
                alt=""
                className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0 rounded"
              />
              <img
                src={player.url_image2}
                alt=""
                className="absolute object-cover opacity-5 group-hover:opacity-100 rounded h-50"
              />
            </div>
          </a>
        </div>
        <div className="h-32 rounded-lg">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-lg p-4">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-4xl">{player.nom} {player.prenom}</h1>
              <form onSubmit={submitForm}  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <p className="text-center text-lg font-medium">{player.poste}</p>
                <div>
                  
                </div>
                <div>
                
                </div>
                <div>
                  <input
                    value={dossard} onChange={(e) => setDosssard(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier le dossard"
                    defaultValue={player.dossard}
                    disabled
                  />
                </div>
                <div>
                  <input
                    value={poste} onChange={(e) => setPoste(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier le poste du joueur"
                    defaultValue={player.poste}
                    disabled
                  />
                </div>
                <div>
                  <input
                    value={club} onChange={(e) => setClub(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier le club du joueur"
                    defaultValue={player.club}
                    disabled
                  />
                </div>
                <div>
                  <input
                    value={etat} onChange={(e) => setEtat(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Modifier la forme du joueur"
                    defaultValue={player.etat}
                    disabled
                  />
                </div>
                
                <p className="text-center text-sm text-gray-500">
                  Voir tous les <Link className="underline" to="/effectif">joueurs</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      }
      
    </>
  );
}
