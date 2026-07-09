import kerken from "../data/kerk.json"

// Alle getallen die op de site over "aantal kerken" gaan, worden hier
// afgeleid uit kerk.json, zodat ze niet meer met de hand bijgehouden
// moeten worden bij het toevoegen of verwijderen van een kerk.
const aantalIn = predicate =>
  kerken
    .filter(predicate)
    .reduce((totaal, genootschap) => totaal + genootschap.kerken.length, 0)

export const churchStats = {
  // aantal lidkerken / kerkgenootschappen (de hoofdrubrieken)
  genootschappen: kerken.length,
  // totaal aantal plaatselijke kerken of parochies
  totaal: aantalIn(() => true),
  roomsKatholiek: aantalIn(g => g.groep === "rooms-katholiek"),
  evangelisch: aantalIn(g => g.groep === "evangelisch"),
  overig: aantalIn(g => g.groep === "overig"),
}
