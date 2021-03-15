const { somethingElse } = require('../richResponses/somethingElseMsg');

const baggageMessage1 = '🧳For the plain, in general, pack light clothing all year round.';
const baggageMessage2 = '🧳For the forest, tropics-friendly, loose-fitting clothing, light shirts and pants of natural fibers (cotton or linen) or synthetics that breathe, maybe with long sleeves for mosquitoes; a light sweater and a light raincoat for thunderstorms, which can be brought also in the savanna during the rainy season.';
const baggageMessage3 = `🧳For the coasts, although it's always hot, you can bring a light sweatshirt for the evening breeze, especially from December to February.`;
const baggageMessage4 = '🧳For Caracas, you can add a sweatshirt for the evening, especially from December to February, and a raincoat or umbrella from May to December.';
const baggageMessage5 = '🧳For Mérida, pack light clothing, a sweater for the evening, a jacket for the evening especially from December to March; a raincoat or umbrella throughout the year, but especially from April to November.';
const baggageMessage6 = '🧳For the high mountains, pack warm clothes, such as a down jacket, a hat, gloves, a scarf, hiking shoes.';

const baggageMessageES1 = '🧳Para la llanura, en general, empaca ropa ligera durante todo el año.';
const baggageMessageES2 = '🧳Para el bosque, ropa holgada, amigable con los trópicos, camisas ligeras y pantalones de fibras naturales (algodón o lino) o sintéticos que respiran, tal vez con mangas largas para los mosquitos; un suéter ligero y un impermeable ligero para tormentas, que también se puede traer en la sabana durante la temporada de lluvias.';
const baggageMessageES3 = `🧳Para las costas, aunque siempre hace calor, puedes traer una sudadera ligera para la brisa nocturna, especialmente de diciembre a febrero.`;
const baggageMessageES4 = '🧳Para Caracas, puedes agregar una sudadera para la noche, especialmente de diciembre a febrero, y una gabardina o paraguas de mayo a diciembre.';
const baggageMessageES5 = '🧳Para Mérida, empacar ropa ligera, un suéter para la noche, una chaqueta para la noche especialmente de diciembre a marzo; un impermeable o paraguas durante todo el año, pero especialmente de abril a noviembre.';
const baggageMessageES6 = '🧳Para la alta montaña, empaca ropa abrigada, como una chaqueta de plumas, un gorro, guantes, una bufanda, zapatos para caminar.';

const baggage = (agent) => {
    if (agent.locale == 'es') {
        agent.add(baggageMessageES1);
        agent.add(baggageMessageES2);
        agent.add(baggageMessageES3);
        agent.add(baggageMessageES4);
        agent.add(baggageMessageES5);
        agent.add(baggageMessageES6);
    }else{
        agent.add(baggageMessage1);
        agent.add(baggageMessage2);
        agent.add(baggageMessage3);
        agent.add(baggageMessage4);
        agent.add(baggageMessage5);
        agent.add(baggageMessage6);
    }
    
    somethingElse(agent);
}

module.exports = { baggage }