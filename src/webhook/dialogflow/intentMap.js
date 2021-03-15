const { welcome } = require('./helpers/welcome');
const { baggage } = require('./helpers/baggage');
const { bestTimeToTravel } = require('./helpers/bestTimeToTravel');
const { culture } = require('./helpers/culture');
const { exchangeMoney } = require('./helpers/exchangeMoney');
const { food } = require('./helpers/food');
const { history } = require('./helpers/history');
const { hotels } = require('./helpers/hotels');
const { location } = require('./helpers/location');
const { placesToVisit } = require('./helpers/placesToVisit');
const { politicalSituation } = require('./helpers/politicalSituation');
const { safety } = require('./helpers/safety');
const { transport } = require('./helpers/transport');
const { travelAgencies } = require('./helpers/travelAgencies');
const { airlines } = require('./helpers/airlines');
const { uniqueness } = require('./helpers/uniqueness');
const { weather } = require('./helpers/weather');
const { showMenu } = require('./helpers/menu-help');
const { aboutVE } = require('./helpers/menu-aboutVenezuela');
const { travelVE } = require('./helpers/menu-travelVenezuela');
const { hotelsAgencies } = require('./helpers/menu-hotels&Agencies');
const { defaultFallback } = require('./helpers/defaultFallback');

const dialogflow = () => {
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Baggage Intent', baggage);
    intentMap.set('Best Time to Travel Intent', bestTimeToTravel);
    intentMap.set('Culture Intent', culture);
    intentMap.set('Exchange Money Intent', exchangeMoney);
    intentMap.set('Food Intent', food);
    intentMap.set('History Intent', history);
    intentMap.set('Hotels Intent', hotels);
    intentMap.set('Location Intent', location);
    intentMap.set('Places to Visit Intent', placesToVisit);
    intentMap.set('Political Situation Intent', politicalSituation);
    intentMap.set('Safety Intent', safety);
    intentMap.set('Transport Intent', transport);
    intentMap.set('Travel Agencies Intent', travelAgencies);
    intentMap.set('Airlines Intent', airlines);
    intentMap.set('Uniqueness Intent', uniqueness);
    intentMap.set('Weather Intent', weather);
    intentMap.set('Menu - Help', showMenu);
    intentMap.set('Menu - About Venezuela Intent', aboutVE);
    intentMap.set('Menu - Travel to Venezuela Intent', travelVE);
    intentMap.set('Menu - Hotels & Travel Angencies Intent', hotelsAgencies);
    intentMap.set('Default Fallback Intent', defaultFallback);
    return intentMap;
}

module.exports = { dialogflow }