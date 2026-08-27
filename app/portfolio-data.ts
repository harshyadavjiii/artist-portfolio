export type Artwork = {
  slug: string;
  image: string;
  aspectRatio: string;
  type: "Photography" | "Painting";
  title: string;
  description: string;
  details: string;
};

export const artworks: Artwork[] = [
  {
    slug: "golden-silence",
    image: "/images/painting01.jpg",
    aspectRatio: "3 / 4",
    type: "Photography",
    title: "Golden Silence",
    description:
      "Soft morning light, quiet architecture, and a stillness that turns a fleeting scene into memory.",
    details:
      "A study of the hour when warm light gives familiar spaces a new kind of quiet.",
  },
  {
    slug: "monsoon-bloom",
    image: "/images/painting02.jpg",
    aspectRatio: "3 / 4",
    type: "Painting",
    title: "Monsoon Bloom",
    description:
      "Layered color fields inspired by rain-soaked gardens and petals holding the last of the storm.",
    details:
      "Paint, water, and saturated color gather into a garden that feels both fleeting and enduring.",
  },
  {
    slug: "city-after-rain",
    image: "/images/painting03.jpg",
    aspectRatio: "3 / 4",
    type: "Photography",
    title: "City After Rain",
    description:
      "Reflective streets and neon mist, balancing documentary detail with cinematic atmosphere.",
    details:
      "An evening image about reflections, movement, and the brief glow that follows a storm.",
  },
  {
    slug: "earthsong",
    image: "/images/painting08.jpg",
    aspectRatio: "4 / 5",
    type: "Painting",
    title: "Earthsong",
    description:
      "A textured composition of sienna, clay, and ash, echoing handmade pigments and intimate gestures.",
    details:
      "Built from earthy layers, this piece follows the physical rhythm of pigment meeting canvas.",
  },
  {
    slug: "window-light-study",
    image: "/images/painting09.jpg",
    aspectRatio: "1 / 1",
    type: "Photography",
    title: "Window Light Study",
    description:
      "Portrait-like still life work that explores shadow edges, fabric folds, and gentle human presence.",
    details:
      "A square meditation on the soft geometry of afternoon light across an intimate interior.",
  },
  {
    slug: "the-unrhythmic-paradox",
    image: "/images/painting14.jpg",
    aspectRatio: "4 / 5",
    type: "Painting",
    title: "The Unrhythmic Paradox",
    description:
      "A new study in color, texture, and quiet movement across the canvas.",
    details:
      "Color shifts and irregular marks create a measured tension between stillness and motion.",
  },
];
