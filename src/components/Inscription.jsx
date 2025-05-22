import './inscription.css';
import svg_img from '../assets/svg_img.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';




function Inscription() {
 const [nom, setNom] = useState('')
 const [prenom, setPrenom] = useState('')
 const [dossard, setDosssard] = useState('')
 const [poste, setPoste] = useState('')
 const [image1, setImage1] = useState('')
 const [image2, setImage2] = useState('')

 let history = useNavigate()
 
 async  function submitForm  (event)  {
  event.preventDefault()

    try {
      const {data, error} = await supabase
      .from("joueurs")
      .insert({ 
      nom: nom,
      prenom: prenom,
      poste: poste,
      dossard: dossard,
      url_image: image1,
      url_image2 : image2
      })
      .single()
      Swal.fire({
        title: 'Succès!',
        text: 'Le joueur a été ajouté avec succès pensez à definir sa forme et son club actuel.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        history('/effectif');
      });
      if (error) throw error;
     
    } catch (error) {
      console.log(error.message)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Désolé Vérifiez vos infos`,
      });
    }
    console.log(nom , prenom);

    
  
 }

  return (
    <>
    <div className="formulaire_container">
    <div className="side_formulaire">
        <h2 className='text1'>FRANCE</h2>
        <h2 className='text2'>FOOTBALL</h2>
        <div className="svg">
        <Lottie animationData={svg_img} />
        </div>
        </div>
        <div className='formulaire'>
        <div className="title">
        <p>Bienvenue dans la team</p>
           </div>
        <hr />
        <form onSubmit={submitForm} className='formulaire'>
        <input type="text"  name="nom"
        value={nom} onChange={(e)=> setNom(e.target.value)}
        placeholder="Nom" className="input_field" required/>
         <input type="text" name="prenom" 
         value={prenom} onChange={(e) => setPrenom(e.target.value)}
         placeholder="prenom" className="input_field" required/>
        <input type="text" name="poste" 
        value={poste} onChange={(e) => setPoste(e.target.value)}
        placeholder="Poste du joueur"
        className="input_field" required/>
        <input type="text" name="dossard"
        value={dossard} onChange={(e) => setDosssard(e.target.value)}
         placeholder="Dossard"
        className="input_field" required/>
        <input type="texte" name="image1"
        value={image1} onChange={(e) => setImage1(e.target.value)}
        placeholder="Lien pour image 1" className="input_field" required/>
        <input type="text" name="image2"
        value={image2} onChange={(e)=> setImage2(e.target.value)}
         placeholder="Lien pour image 2"
         className="input_field" required/>
        <input type="submit"  value={"Inscrire le joueur"} className='button'/> 
        <Link>
        <div className="flex items-center justify-center mb-10">
       <Link to="/effectif">
       <button className='button'>Retour</button>
      </Link>
    
    </div>
        </Link>
        {/* <p className='p_inscription'>Vous avez deja un compte ? <Link to="/connexion" className='p_lien'>connectez-vous</Link></p> */}
        </form>
        </div> 
      </div>

  
    </>
  )
}

export default Inscription