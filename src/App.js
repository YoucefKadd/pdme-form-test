import logo from './assets/CGI_logo.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const testSize = 'fs-6';
  return (
    <div className="App">
      <Navbar />
      <div className='container container-fluid shadow p-3 mb-5 rounded w-50 ' style={{ backgroundColor: "white" }}>
        <form className='p-2 '>
          <div className='d-flex mb-5 '>
            <h2 className='text-start fw-bold'>QUESTIONNAIRE SUR LES DÉPLACEMENTS DES PERSONNES TRAVAILLANT SUR LA ZONE D’ACTIVITÉS</h2>
            <img src={logo} alt="logo_cgi" className='img-fluid p-3' style={{ height: 80 + 'px' }} />
          </div>

          <p className='text-start'>Ce questionnaire s’inscrit dans le cadre de l’élaboration du Plan De Mobilité Entreprises de la Zone d’Activité</p>
          <p className='text-start'>Il s’adresse aux salariés des établissements engagés dans la démarche, tous corps de métiers confondus.</p>
          <p className='text-start '>Ce PDIE vise à rationaliser et améliorer les déplacements générés par les activités des entreprises. Les réponses que vous nous fournirez permettront dans un premier temps, de mieux connaître vos habitudes de déplacements, vos contraintes, les freins à la pratique des différents modes, vos risques, ainsi que vos attentes particulières. Dans un deuxième temps, cela nous aidera à mettre en évidence les enjeux du territoire et à mieux définir les solutions qui vous permettront demain d’effectuer vos déplacements de manière plus économique, plus écologique, plus sûre et plus rapide !</p>
          <p className='text-start'>Ce questionnaire est strictement anonyme. Il vous faudra 10-15 minutes pour y répondre, sachant que : </p>
          <p className='text-start'>Vous n’avez pas à remplir l’intégralité du questionnaire. Seuls quelques blocs de questions vous concernent !</p>
          <p className='text-start'>Nous vous remercions donc de bien vouloir consacrer un instant pour y répondre.</p>
          <p className='text-start fs-6'>Merci de remplir ce questionnaire avant le …. !</p>
          <p className={'test-start ' + testSize}> résultats de cette enquête seront diffusés sous forme d’une synthèse au cours du mois de ….</p>

        </form>
      </div>
      <div className='container container-fluid shadow p-3 mb-5 bg-body-tertiary rounded  w-50 ' style={{ backgroundColor: "white" }}>
        <form className='p-2 '>
          <h2 className='text-primary'>Votre lieu de Travail</h2>
          <br />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Dans quelle entreprise travaillez-vous ?</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Quelle est l’importance de votre trajet Domicile – Travail pour vous dans la réussite d’une bonne journée de travail ?</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="customRange3" class="form-label"> Quelle est l’importance de votre trajet Domicile – Travail pour vous dans la réussite d’une bonne journée de travail ?</label>
            <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3"></input>
            <div id="emailHelp" class="form-text">De 0 jusqu'à 5.</div>
          </div>
          <br />
          <hr />
          <br />

          <h2 className='text-primary'>Votre situation, pour mieux vous connaitre</h2>
          <br />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Quel est le code postal de votre résidence ?</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Commune</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Qu’est-ce qui vous a incité à choisir votre lieu de résidence ?</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Prix foncier / loyer
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              travail du conjoint
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              qualité de vie (campagne …)
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Services locaux près du lieu de résidence
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Transports
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Autre, précisez :
            </label><br />

          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Vous êtes :</label><br />

            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label class="form-check-label ms-2" for="flexRadioDefault1">
              Un Homme
            </label><br />

            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label class="form-check-label ms-2" for="flexRadioDefault1">
              Une Femme
            </label><br />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Votre tranche d’âge :</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Moins de 25 ans
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              25-35 ans
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              35-50 ans
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              50 ans et +
            </label><br />

          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Vous êtes :</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Salarié
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Intérimaire
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Stagiaire / apprenti
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Sous-traitant
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Cadre
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Agent de maîtrise / technicien
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Ouvrier / employé
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Autre
            </label>
            <input type="text" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline"></input><br />

          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Vous êtes :</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Oui
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Non
            </label>
            <br />
            <br />
            <div>

              <select class="form-select" aria-label="Default select example">
                <option selected>Lequel ?</option>
                <option value="1">Permis A</option>
                <option value="2">Permis B</option>
                <option value="3">Permis C</option>
              </select><br />
              <select class="form-select" aria-label="Default select example">
                <option selected>Depuis combien de temps ?</option>
                <option value="1">- de 1 an</option>
                <option value="2">1 an</option>
                <option value="3">2 ans</option>
                <option value="3">3 ans</option>
                <option value="3">4 ans</option>
                <option value="3">5 ans</option>
                <option value="3">6 ans</option>
                <option value="3">7 ans</option>
                <option value="3">8 ans</option>
                <option value="3">+ de 8 ans</option>
              </select><br />
            </div>

          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Avez vous Accés à internet ?</label><br />

            <label for="exampleInputEmail1" class="form-label">Sur Ordinateur :</label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Au travail
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Chez vous
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Jamais
            </label>
            <br />
            <br />


            <label for="exampleInputEmail1" class="form-label">Sur Téléphone :</label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Au travail
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Chez vous
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Jamais
            </label>
            <br />
            <br />
          </div>


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Votre ménage possède :</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Aucune voiture
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Aucun vélo adulte
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Aucun deux-roues motorisé
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              1 voiture
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              1 vélo adulte
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              1 deux-roues motorisé
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              2 voitures ou +
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              2 vélos adultes ou +
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              2 deux-roues motorisés ou +
            </label><br />


          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">A titre personnel, avez-vous un (ou plusieurs) abonnement(s) de transport en commun ou de vélo en location ? :</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Abonnement TER / SNCF
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Abonnement bus / métro / tram
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Abonnement cars
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Abonnement vélo
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Abonnement covoiturage
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Abonnement autopartage
            </label><br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Autre, précisez
            </label><br />


          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Afin de pouvoir mieux cibler certaines mesures adaptées du PDIE, merci de nous préciser si vous avez à assumer une incapacité permanente ou un handicap qui génère une gêne dans vos déplacements quotidiens :</label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Oui
            </label><br />

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Non
            </label>
            <br />
            <br />
          </div>



        </form>

      </div>
      <div className='container d-flex justify-content-end w-50 mb-5'>

        <button type="button" class="btn btn-primary" style={{backgroundColor : "#5236AB"}}>Envoyer</button>
      </div>
    </div>
  );
}

export default App;
