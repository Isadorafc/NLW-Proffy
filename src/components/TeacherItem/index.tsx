import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/9aFJ5_S2IczfUhQDmsLlUdjHqtmUH4OQm9K9_6nna_ehmGauDxCWi904ul0FY3eM4vbBIjCieN7qpbgE1E1lStXsfkTgErMY9Qk_dDa4cV_N6IPZwaqqJTBBHYb0rEzvcDqMsBWz453rXrsprMEuJiUnAi8uxnHScnoVBlpdLP-yhxep_gBS-GsL8G5N3P7hRvok4y6u8n4hzu4NJ1d7Io_IAI3zn-E0ef2iyelkcgG1GJZQr8btRrmLiin9R2k3bCEB1faxEmVjJfNDLwssX1hFOMsVwn4mYWaSaZmZ0-dSSbxBSTFgmyQ830EU6FG_kwa-7mEBi5SRGuQ1x2mpoa0N0T6m39ySKZyDKdlH3LoVIlSl0pCPiVIMwP3oFYQM7cDDH8xjmeS31o68ycZfVcY-Iyfq02z9xUc3fGpfLYyy2Up7MZerlNJu2kZyQCGEjTPBKiBvh6g8dQX7YUb7JhAY0HtxfrhQt50rWe9Yx3OnyaLDLOhlNo6i-0IzQ9BASZqE20kz77K6eQPghb1L35OcCkVuABPfhhbr1rUsDKIkfidGupb_xRgoyYaNGQ39fL6FiC5oXxbxFyE9bptGmLZlFBpZZw1mrrTMdvq__ZUEa7971U3z6XjsngpVumZsCbOPn7bZZ25H8yPF_25qIJ2PW_MC0tnC4P8Fo6C0RXoky49mhACItwP57VNAyA=w895-h551-no?authuser=0"
          alt="Isadorinha"
        />
        <div>
          <strong> Isadora Ferreira</strong>
          <span>Sociologia</span>
        </div>
      </header>
      <p>
        A russian's here. "Don't smile" is pretty much correct.
        <br />
        Tracksuits are also pretty popular but not really. Not sure about
        hardbass, but about cold is kinda wrong, only the winters can get like,
        really cold. At least that's what I can say from living in a city that's
        close to Moscow. In Syberia it's probably colder. Vodka - eh... Kinda
        accurate, that seems to be the preferred drink of choice for older
        citizens, but to what "parties" I've been - it's either wine or
        champagne, though there's always a guy who drinks vodka too. That's
        regarding what's partially true.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$140,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;
