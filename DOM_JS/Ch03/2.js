/**
 * Program 122: Double-Click Event Handling
 * Task: Change the background color of a card element only when it is double-clicked.
 * Syntax Focus: dblclick event.
 */

const Colors = [
  // --- Whites & Light Shades ---
  "White",
  "Wheat",
  "Beige",
  "LightGray",

  // --- Grays & Dark Neutrals ---
  "Silver",
  "SlateGray",
  "DimGray",
  "Black",

  // --- Reds & Pinks ---
  "Crimson",
  "FireBrick",
  "Coral",
  "DeepPink",
  "HotPink",
  "Maroon",

  // --- Oranges & Browns ---
  "DarkOrange",
  "PeachPuff",
  "Amber", // Note: CSS uses Hex/HSL for Amber usually, but OrangeGold work well
  "Sienna",
  "Chocolate",
  "SaddleBrown",

  // --- Yellows & Golds ---
  "Yellow",
  "Gold",
  "DarkGoldenRod",

  // --- Greens ---
  "MintCream",
  "Lime",
  "Emerald", // Hex fallback in CSS preferred, LimeGreen works standard
  "ForestGreen",
  "Olive",
  "Teal",

  // --- Blues & Cyans ---
  "SkyBlue",
  "Cyan",
  "DodgerBlue",
  "SteelBlue",
  "RoyalBlue",
  "Navy",
  "MidnightBlue",

  // --- Purples & Violets ---
  "Lavender",
  "Plum",
  "Purple",
  "Violet",
  "Indigo",
  "DarkMagenta",
  "Magenta",

  // --- Earth & Neon Tones ---
  "Khaki",
  "DarkKhaki",
  "Copper",
  "Aqua",
  "LawnGreen",
  "Turquoise",
];

const display = document.getElementById("cont");
const name = document.getElementById("name");
const btn = document.getElementById("button");

btn.addEventListener("dblclick", () => {
  const index = Math.floor(Math.random() * Colors.length);

  display.style.backgroundColor = Colors[index];
  name.innerText = Colors[index];
  console.log("Selected Color:", Colors[index]);
});
