/* ---------- BOULDERING ---------- */
const boulderGrades = [
  { v: "V0", font: "4" },
  { v: "V1", font: "5" },
  { v: "V2", font: "5+" },
  { v: "V3", font: "6A / 6A+" },
  { v: "V4", font: "6B / 6B+" },
  { v: "V5", font: "6C" },
  { v: "V6", font: "6C+ / 7A" },
  { v: "V7", font: "7A+" },
  { v: "V8", font: "7B / 7B+" },
  { v: "V9", font: "7C" },
  { v: "V10", font: "7C+" },
  { v: "V11", font: "8A" },
  { v: "V12", font: "8A+" },
  { v: "V13", font: "8B" },
  { v: "V14", font: "8B+" },
  { v: "V15", font: "8C" },
  { v: "V16", font: "8C+" },
  { v: "V17", font: "9A" }
];

const vSelect = document.getElementById("vScale");
const fontSelect = document.getElementById("fontScale");

boulderGrades.forEach((g, i) => {
  vSelect.add(new Option(g.v, i));
  fontSelect.add(new Option(g.font, i));
});

vSelect.addEventListener("change", () => fontSelect.value = vSelect.value);
fontSelect.addEventListener("change", () => vSelect.value = fontSelect.value);

vSelect.value = 7;
fontSelect.value = 7;

/* ---------- SPORT / LEAD ---------- */
const sportGrades = [
  { yds: "5.5", fr: "4" },
  { yds: "5.6", fr: "5a" },
  { yds: "5.7", fr: "5b" },
  { yds: "5.8", fr: "5c" },
  { yds: "5.9", fr: "5c / 6a" },
  { yds: "5.10a", fr: "6a" },
  { yds: "5.10b", fr: "6a+" },
  { yds: "5.10c", fr: "6b" },
  { yds: "5.10d", fr: "6b+" },
  { yds: "5.11a", fr: "6c" },
  { yds: "5.11b", fr: "6c+" },
  { yds: "5.11c", fr: "7a" },
  { yds: "5.11d", fr: "7a+" },
  { yds: "5.12a", fr: "7b" },
  { yds: "5.12b", fr: "7b+" },
  { yds: "5.12c", fr: "7c" },
  { yds: "5.12d", fr: "7c+" },
  { yds: "5.13a", fr: "7c+ / 8a" },
  { yds: "5.13b", fr: "8a" },
  { yds: "5.13c", fr: "8a+" },
  { yds: "5.13d", fr: "8b" },
  { yds: "5.14a", fr: "8b+" },
  { yds: "5.14b", fr: "8c" },
  { yds: "5.14c", fr: "8c+" },
  { yds: "5.14d", fr: "9a" },
  { yds: "5.15a", fr: "9a+" },
  { yds: "5.15b", fr: "9b" },
  { yds: "5.15c", fr: "9b+" },
  { yds: "5.15d", fr: "9c" }
];

const ydsSelect = document.getElementById("ydsScale");
const frenchSelect = document.getElementById("frenchScale");

sportGrades.forEach((g, i) => {
  ydsSelect.add(new Option(g.yds, i));
  frenchSelect.add(new Option(g.fr, i));
});

ydsSelect.addEventListener("change", () => frenchSelect.value = ydsSelect.value);
frenchSelect.addEventListener("change", () => ydsSelect.value = frenchSelect.value);

ydsSelect.value = 11;
frenchSelect.value = 11;
