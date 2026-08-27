export type SceneryEntry = {
  slug: string;
  image: string;
  aspectRatio: string;
  title: string;
  location: string;
  intro: string;
  paragraphs: string[];
};

const titles = [
  "The First Light Finds Us", "A Road With No Hurry", "Where The Air Turns Quiet",
  "The Colour Of Leaving", "A Little Farther Than Planned", "The Sky Keeps Its Promise",
  "Postcard From A Patient Morning", "The World In Soft Focus", "A Pause Between Places",
  "Notes From The Blue Hour", "The Landscape Remembers", "A Window Open To Weather",
  "Walking Toward The Warm Side", "The Long Way Home", "A Small Miracle Of Distance",
  "When The Clouds Come Lower", "A View Worth Missing The Train For", "The Road Begins Again",
  "Borrowed Light", "A Quiet Kind Of Brave", "Where The Green Deepens", "A Day Held In Amber",
  "The Shape Of An Afternoon", "Somewhere Past The Familiar", "The View After The Turn",
  "A Memory Still Becoming", "The Gentle Work Of Wandering", "A Horizon To Carry Home",
  "Before The Last Light", "The Earth Says Stay", "A Place That Changes You",
  "The Distance Between Two Breaths", "A Final Note From The Road",
];

const aspectRatios = [
  "3 / 4", "4 / 9", "4 / 9", "4 / 9", "4 / 9", "4 / 9", "16 / 7", "9 / 16", "9 / 16",
  "4 / 9", "4 / 9", "4 / 9", "4 / 9", "3 / 4", "3 / 4", "3 / 4", "3 / 4", "9 / 16",
  "9 / 16", "4 / 3", "4 / 3", "9 / 16", "9 / 16", "4 / 9", "3 / 4", "4 / 3", "3 / 4",
  "16 / 7", "3 / 4", "3 / 4", "5 / 6", "3 / 4", "9 / 16",
];

const openingIntros = [
  "A narrow road, a patient horizon, and the feeling that the day has only just begun.",
  "The last colour of evening settles over the landscape like a secret worth keeping.",
  "A small pause in the middle of the map, where stillness becomes part of the journey.",
];

const paragraphThemes = [
  "I kept walking until the ordinary became luminous. The light moved gently across the scene, asking for attention rather than explanation.",
  "There was no itinerary for this moment, only the soft rhythm of looking and the quiet pleasure of letting the landscape set the pace.",
  "I carried a small challenge with me: look again, stay curious, and let the view be different from what I expected.",
  "By the time I turned back, the place had become a memory in progress, proof that a brief pause can change the shape of an entire day.",
];

export const sceneryEntries: SceneryEntry[] = titles.map((title, index) => {
  const number = index + 1;
  const image = `/images/scenery${String(number).padStart(2, "0")}.jpeg`;
  return {
    slug: `scenery${String(number).padStart(2, "0")}`,
    image,
    aspectRatio: aspectRatios[index],
    title,
    location: `Travel diary / ${String(number).padStart(2, "0")}`,
    intro: openingIntros[index] ?? `A fleeting view from journey ${String(number).padStart(2, "0")}, held here before it changes.`,
    paragraphs: paragraphThemes.map((theme, paragraphIndex) =>
      paragraphIndex === 0
        ? `${theme} This was the kind of view that made the journey feel personal.`
        : paragraphIndex === 1
          ? `${theme} Somewhere between arrival and departure, I found room to breathe.`
          : paragraphIndex === 2
            ? `${theme} The smallest details stayed longest: a shift in weather, a sound in the distance, a colour I could not name.`
            : `${theme} I left with less urgency and a wider sense of time, carrying this frame home as a quiet reminder.`,
    ),
  };
});
