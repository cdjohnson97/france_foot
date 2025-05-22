import './inscription.css';
import svg_conn from '../assets/svg_conn.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { supabase } from '../supabaseClient';

function Inscription() {
  const [address_mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('nom');
    if (login) {
      let timerInterval;
      Swal.fire({
        title: 'Reconnexion',
        html: 'Sauvegarde de votre navigation',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector('b');
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      history('/');
    }
  }, [history]);

  async function submitForm(e) {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('admin')
        .select('*')
        .eq('address_mail', address_mail);

      if (error) throw error;
      
      if (data && data.length > 0) {
        const user = data[0];
        
        if (password === user.mots_de_pass) {
          localStorage.setItem("nom", user.nom, "mail", user.address_mail );
          Swal.fire({
            title: 'Bienvenue!',
            text: `${user.nom}`,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            history('/');
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Désolé, vérifiez votre mot de passe",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Utilisateur invalide",
        });
      }
    } catch (error) {
      console.error('Error fetching user:', error.message);
    }
  }

  return (
    <>
      <div className="formulaire_container">
        <div className="side_formulaire">
          <h2 className="text1">FRANCE</h2>
          <h2 className="text2">FOOTBALL</h2>
          <div className="svg">
            <Lottie animationData={svg_conn} />
          </div>
        </div>
        <div className="formulaire">
          <div className="title">
            <p>Connectez-vous</p>
          </div>
          <hr />
          <form className="formulaire" onSubmit={submitForm}>
            <input
              type="text"
              name="address_mail"
              value={address_mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="exemple@gmail.com"
              className="input_field"
              required
            />
            <input
              type="password"
              name="mots_de_pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              className="input_field"
              required
            />
            <input type="submit" value={"Se connecter"} className="button" />
            <p className="p_connexion">
              Pas de compte ? <Link to="/createAdmin" className="p_lien">Inscrivez</Link> vous en une minute
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Inscription;
