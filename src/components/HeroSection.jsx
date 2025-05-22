import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const Effectif = () => {
  const user = localStorage.getItem("nom");
  const history = useNavigate()


  const logOutSubmit = () => {
    localStorage.clear()
    history("/")
    console.log("hello world ")
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Vous avez été déconnecté",
      showConfirmButton: false,
      timer: 1000
    });
    
    
    
  }
  const changePage = () => {
    history("/effectif")
  }    

  return (
   
    
    <section className="w-full mt-20 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Spécial Jeux Olympinque Paris 2024
        </span>
        <h3 className="text-4xl md:text-6xl font-">
          Une Equipe un Esprit une <span className="">Victoire</span> 
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Plateforme non officiel de la gestion et de la prise d'informations de l'effectif l'équipe de 
          France à l'occasion des Jeux Olympique
        </p>
        <button onClick={changePage} className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Découvrir l'éffectif
        </button>
        {
          user ? <button onClick={logOutSubmit}  className="bg-red-500 text-white m-2 font-medium py-2 px-4 rounded transition-all hover:bg-red-600 active:scale-95">
          Se déconnecter 
          
        </button> : ""
        }
        
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://www.francebleu.fr/s3/cruiser-production/2022/11/70e82f41-c921-4257-95a3-6aa370bb2bc9/1200x680_000_32qv2th.jpg",
  },
  {
    id: 2,
    src: "https://www.alamyimages.fr/aggregator-api/download?url=https://c8.alamy.com/compfr/pcg9ca/jeux-olympiques-paris-2024-le-logo-et-les-drapeaux-vector-illustration-pcg9ca.jpg",
  },
  {
    id: 3,
    src: "https://wallpapercave.com/wp/wp3649894.jpg",
  },
  {
    id: 4,
    src: "https://www.programme-tv.net/imgre/fit/~1~tel~2023~04~11~b7f2e78d-13b1-4dbc-b1bb-67e4d67b3489.jpeg/720x405/crop-from/top/quality/80/france-canada-football-feminin-ce-qu-il-faut-savoir-sur-le-match.jpg",
  },
  {
    id: 5,
    src: "https://image.kurier.at/images/cfs_landscape_1864w_1049h/7082224/46-189340477.jpg",
  },
  {
    id: 6,
    src: "https://th.bing.com/th/id/OIP.qu5DGM3XLUSV0Q2Uy3Qt_AAAAA?pid=ImgDet&w=208&h=130&c=7&dpr=1,5",
  },
  {
    id: 7,
    src: "https://th.bing.com/th/id/OIP.uzk6R7eKW8EHGosBDLkSuQHaEK?pid=ImgDet&w=208&h=117&c=7&dpr=1,5",
  },
  {
    id: 8,
    src: "https://th.bing.com/th/id/OIP.Ak2qTOD8jmE254CoHwquYAAAAA?pid=ImgDet&w=188&h=333&c=7&dpr=1,5https://th.bing.com/th/id/OIP.qnPoFCHlxD4WynHv2Os-DgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1,5",
  },
  {
    id: 9,
    src: "https://th.bing.com/th/id/OIP.WTbInysyNTXWd_P32zgIqgHaLH?pid=ImgDet&w=175&h=262&c=7&dpr=1,5",
  },
  {
    id: 10,
    src: "https://www.lequipe.fr/_medias/img-photo-jpg/jules-kounde-dayot-upamecano-wesley-fofana-et-kurt-zouma-representent-l-avenir-au-poste-de-defenseur-axial-droit-de-l-equipe-de-france-a-reau-photos-1-2-3-f-faugere-photo-4-l-equipe/1500000001409670/0:0,918:612-828-552-75/e7516",
  },
  {
    id: 11,
    src: "https://m6pub.fr/content/uploads/2019/11/m6-equipe-de-france-football-1024x815.jpg",
  },
  {
    id: 12,
    src: "https://www.lequipe.fr/_medias/img-photo-jpg/les-bleus-disputeront-le-final-four-en-italie-s-mantey-l-equipe/1500000001413001/0:0,1998:1332-828-552-75/32e37.jpg",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://th.bing.com/th/id/OIP.QvSCEY_ANUosXbXYT46jzwHaEo?rs=1&pid=ImgDetMain",
  },
  {
    id: 15,
    src: "https://th.bing.com/th?id=OIP.3Bf3BbzS8d4LwVQuaktvaQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    id: 16,
    src: "https:/i2-prod.leeds-live.co.uk/sport/leeds-united/article28374270.ece/ALTERNATES/s1200/0_JS320649754.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        borderRadius:"10px"
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 8000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
    
  );
};

export default Effectif;