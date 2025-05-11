
/**
 * 
 * @param {String} carta
 * @returns {HTMLImagenElement} imagen de returno 
 */


export const crearCartaHTML= ( carta ) => {
    if (!carta) throw new Error('La carta es un valor obligatorio');
  // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;



}