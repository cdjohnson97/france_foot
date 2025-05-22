import './inscription.css';
import svg from '../assets/svg.json'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Lottie from 'lottie-react';




function createAdmin() {
 const [nom, setNom] = useState('')
 const [mail, setMail] = useState('')
 const [image, setImage] = useState('')
 const [mots_de_pass1, setMotsDePass1] = useState('')
 const [mots_de_pass2, setMotsDePass2] = useState('')

 let history = useNavigate()
 
 async  function submitForm  (event)  {
  event.preventDefault()

    try {
      const {data, error} = await supabase
      .from("admin")
      .insert({ 
      nom: nom,
      address_mail: mail,
      image : image,
      mots_de_pass: mots_de_pass2
      })
      .single()
      Swal.fire({
        title: 'Succès!',
        text: `Admin ${nom} ajouté. Vous avez les clés de l'équipe Bienvenue !`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        history('/articles');
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
 }

  return (
    <>


<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Noutre prochain dirigeant ?</h1>

      <p className="mt-4 text-gray-500">
        Nous Vous faisons confiance !
      </p>
    </div>
    <form onSubmit={submitForm} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            name="titre"
            type="texte"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Votre nom"
            value={nom} onChange={(e) => setNom(e.target.value)}
            required
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
           
          </span>
        </div>
        <div className="relative">
          <input
            name="content"
            type="mail"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="exemple@gmail.com"
            value={mail} onChange={(e) => setMail(e.target.value)}
            required
          />  
        </div>
        <div className="relative">
          <input
            name="mots_de_pass1"
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Entrez votre mot de pass"
            value={mots_de_pass1} onChange={(e) => setMotsDePass1(e.target.value)}
            required
          />  
        </div>
        <div className="relative">
          <input
            name="mots_de_pass2"
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Confirmez le mot de pass"
            value={mots_de_pass2} onChange={(e) => setMotsDePass2(e.target.value)}
            required
          />  
        </div>
        <div className="relative">
          <input
            type="file"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="choisir "
            value={image} onChange={(e) => setImage(e.target.value)}
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          </span>
        </div>
      </div>

      <div>

        
      </div>

      <div className="flex items-center justify-between">
        

        <button
          type="submit"
          className="inline-block rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white"
        >
          Let go
        </button>
        </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
  <Lottie animationData={svg} />
  </div>
</section>
  
    </>
  )
}

export default createAdmin