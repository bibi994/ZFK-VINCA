import React from 'react';
import './contact.css';

const Contact = () => {
    return(
        <>
        <div className="contact contact-clearFix"> 
             <h1>Kontakt</h1>
             <main>
                 <h6>Monday to Friday (except bank holidays) 9:30 AM to 5:00 PM.</h6>
                 <p>A matchday service is provided for all Home fixtures when the switchboard is open from 09.30am until 20 minutes after the end of the game. Please call the above number for all matchday issuesrem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies auctor dignissim. Etiam eget auctor lectus, id scelerisque risus.</p>
                 <div className="contact-div">
                 <img src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2016/05/contacts-1-370x150.jpg" alt="slika"/>
                 <h3>HEAD OFFICE</h3>
                 <div><i class="fas fa-map-marker-alt contact-icons"/><p className="contact-p-icons">USA, California 20, First Avenue</p></div>
                 <div> <i class="fas fa-mobile contact-icons"/><p className="contact-p-icons">+7 998 71 150 30 20</p></div>
                 <div> <i class="fas fa-envelope contact-icons"/><p className="contact-p-icons">info@stylemixthemes.com</p></div></div>
                 <div className="contact-div ml-5"><img src="https://splash.scdn4.secure.raxcdn.com/football/wp-content/uploads/sites/2/2016/05/contacts-2-370x150.jpg" alt="slika"/>
                 <h3>HEAD OFFICE</h3><div><i class="fas fa-map-marker-alt contact-icons"/><p className="contact-p-icons">USA, California 20, First Avenue</p></div>
                 <div> <i class="fas fa-mobile contact-icons"/><p className="contact-p-icons">+7 998 71 150 30 20</p></div>
                 <div> <i class="fas fa-envelope contact-icons"/><p className="contact-p-icons">info@stylemixthemes.com</p></div></div>
                 </main>
             <aside>
                    <h2>Kontaktirajte nas</h2>
                    <form>
                        <input type="text" placeholder="Naslov" required/>
                        <input type="text" placeholder="Ime" required/>
                        <input type="email" placeholder="Email" required/>
                        <textarea placeholder="Poruka" rows="4" required/>
                        <button>Pošalji</button>
                    </form>
                
             </aside>
             
        </div>
        <div className="wrapper-iframe">
        <div className="contact-iframe-shadow"></div>
        <iframe className="contact-iframe" title="contact mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362812.07215703715!2d20.491457414933823!3d44.73044124020303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1546541161549" allowfullscreen></iframe></div></>
        
    )
}
export default Contact;