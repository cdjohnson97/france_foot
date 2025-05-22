import { useEffect } from 'react';
import Nav_bar from './Nav_bar'
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

export default function Articles() {
const [article, setArticles] = useState([]);
const user = localStorage.getItem("nom");


  useEffect(() => {
    getNews();
  }, [])

  async function getNews() {
    try {
      const {data, error} = await supabase
      .from("articles")
      .select("*")
      .limit(10);
      if (error) throw error;
      if (data != null) {
        setArticles(data)
        console.log(article)
      }
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <>
    <Nav_bar />
    
    <section className=' w-full mt-20 px-4 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto'>
       
    {
     
     article.map((article) => 
      <a href="#" key={article.id} className="group relative block bg-black  rounded-xl">
  <img
    alt=""
    src={article.article_image}

    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 "
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-blue-500">{article.title}</p>

    <p className="text-xl font-bold text-white sm:text-2xl">{article.title}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          {article.content}
        </p>
      </div>
    </div>
  </div>
</a>
     )
      
    }

  {
    user ? <div className="flex items-center justify-center mb-10">
    <Link to="/createArticle">
    <button className="bg-indigo-500 text-white hover:bg-indigo-600 font-bold py-2 px-4 mt-3 active:scale-95 rounded">Rediger un article</button>
    </Link>
  
  </div> : ""
  }
    </section>
    
    
      
    </>
  )
}
