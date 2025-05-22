import './inscription.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';




function Inscription() {
 const [titre, setTitre] = useState('')
 const [content, setContent] = useState('')
 const [imageUrl, setImageUrl] = useState('')
 

 let history = useNavigate()
 
 async  function submitForm  (event)  {
  event.preventDefault()

    try {
      const {data, error} = await supabase
      .from("articles")
      .insert({ 
      title: titre,
      content: content,
      article_image : imageUrl
      })
      .single()
      Swal.fire({
        title: 'Succès!',
        text: 'Article ajouté !',
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
      <h1 className="text-2xl font-bold sm:text-3xl">Quoi de neuf ?</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
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
            placeholder="Titre"
            value={titre} onChange={(e) => setTitre(e.target.value)}
            required
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
           
          </span>
        </div>
        <div className="relative">
          <textarea
            name="content"
            type="texte"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="content"
            value={content} onChange={(e) => setContent(e.target.value)}
            required
          />

           
          
        </div>
        <div className="relative">
          <input
            type="texte"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="image url"
            value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
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
          Publier
        </button>
        </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/07/Paris-Olympic-Games-2024-Recycled-Seats-Sustainability-Hemis-Alamy.jpg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
  
    </>
  )
}

export default Inscription