let cloInsulationTypicalEnsembles = [
  {
    clothing: "Walking shorts, short-sleeve shirt: 0.36 clo",
    clo: 0.36,
  },
  {
    clothing: "Typical summer indoor clothing: 0.5 clo",
    clo: 0.5,
  },
  {
    clothing:
      "Knee-length skirt, short-sleeve shirt, sandals, underwear: 0.54 clo",
    clo: 0.54,
  },
  {
    clothing: "Trousers, short-sleeve shirt, socks, shoes, underwear: 0.57 clo",
    clo: 0.57,
  },
  {
    clothing: "Trousers, long-sleeve shirt: 0.61 clo",
    clo: 0.61,
  },
  {
    clothing: "Knee-length skirt, long-sleeve shirt, full slip: 0.67 clo",
    clo: 0.67,
  },
  {
    clothing: "Sweat pants, long-sleeve sweatshirt: 0.74 clo",
    clo: 0.74,
  },
  {
    clothing: "Jacket, Trousers, long-sleeve shirt: 0.96 clo",
    clo: 0.96,
  },
  {
    clothing: "Typical winter indoor clothing: 1.0 clo",
    clo: 1.0,
  },
];

// Clothing insulation of individual
let cloInsulationGarments = [
  {
    article: "Metal chair",
    clo: 0.0,
  },
  {
    article: "Bra",
    clo: 0.01,
  },
  {
    article: "Wooden stool",
    clo: 0.01,
  },
  {
    article: "Ankle socks",
    clo: 0.02,
  },
  {
    article: "Shoes or sandals",
    clo: 0.02,
  },
  {
    article: "Slippers",
    clo: 0.03,
  },
  {
    article: "Panty hose",
    clo: 0.02,
  },
  {
    article: "Calf length socks",
    clo: 0.03,
  },
  {
    article: "Women's underwear",
    clo: 0.03,
  },
  {
    article: "Men's underwear",
    clo: 0.04,
  },
  {
    article: "Knee socks (thick)",
    clo: 0.06,
  },
  {
    article: "Short shorts",
    clo: 0.06,
  },
  {
    article: "Walking shorts",
    clo: 0.08,
  },
  {
    article: "T-shirt",
    clo: 0.08,
  },
  {
    article: "Standard office chair",
    clo: 0.1,
  },
  {
    article: "Executive chair",
    clo: 0.15,
  },
  {
    article: "Boots",
    clo: 0.1,
  },
  {
    article: "Sleeveless scoop-neck blouse",
    clo: 0.12,
  },
  {
    article: "Half slip",
    clo: 0.14,
  },
  {
    article: "Long underwear bottoms",
    clo: 0.15,
  },
  {
    article: "Full slip",
    clo: 0.16,
  },
  {
    article: "Short-sleeve knit shirt",
    clo: 0.17,
  },
  {
    article: "Sleeveless vest (thin)",
    clo: 0.1,
  },
  {
    article: "Sleeveless vest (thick)",
    clo: 0.17,
  },
  {
    article: "Sleeveless short gown (thin)",
    clo: 0.18,
  },
  {
    article: "Short-sleeve dress shirt",
    clo: 0.19,
  },
  {
    article: "Sleeveless long gown (thin)",
    clo: 0.2,
  },
  {
    article: "Long underwear top",
    clo: 0.2,
  },
  {
    article: "Thick skirt",
    clo: 0.23,
  },
  {
    article: "Long-sleeve dress shirt",
    clo: 0.25,
  },
  {
    article: "Long-sleeve flannel shirt",
    clo: 0.34,
  },
  {
    article: "Long-sleeve sweat shirt",
    clo: 0.34,
  },
  {
    article: "Short-sleeve hospital gown",
    clo: 0.31,
  },
  {
    article: "Short-sleeve short robe (thin)",
    clo: 0.34,
  },
  {
    article: "Short-sleeve pajamas",
    clo: 0.42,
  },
  {
    article: "Long-sleeve long gown",
    clo: 0.46,
  },
  {
    article: "Long-sleeve short wrap robe (thick)",
    clo: 0.48,
  },
  {
    article: "Long-sleeve pajamas (thick)",
    clo: 0.57,
  },
  {
    article: "Long-sleeve long wrap robe (thick)",
    clo: 0.69,
  },
  {
    article: "Thin trousers",
    clo: 0.15,
  },
  {
    article: "Thick trousers",
    clo: 0.24,
  },
  {
    article: "Sweatpants",
    clo: 0.28,
  },
  {
    article: "Overalls",
    clo: 0.3,
  },
  {
    article: "Coveralls",
    clo: 0.49,
  },
  {
    article: "Thin skirt",
    clo: 0.14,
  },
  {
    article: "Long-sleeve shirtdress (thin)",
    clo: 0.33,
  },
  {
    article: "Long-sleeve shirtdress (thick)",
    clo: 0.47,
  },
  {
    article: "Short-sleeve shirtdress",
    clo: 0.29,
  },
  {
    article: "Sleeveless, scoop-neck shirt (thin)",
    clo: 0.23,
  },
  {
    article: "Sleeveless, scoop-neck shirt (thick)",
    clo: 0.27,
  },
  {
    article: "Sleeveless vest (thin)",
    clo: 0.13,
  },
  {
    article: "Sleeveless vest (thick)",
    clo: 0.22,
  },
  {
    article: "Long sleeve shirt (thin)",
    clo: 0.25,
  },
  {
    article: "Long sleeve shirt (thick)",
    clo: 0.36,
  },
  {
    article: "Single-breasted coat (thin)",
    clo: 0.36,
  },
  {
    article: "Single-breasted coat (thick)",
    clo: 0.44,
  },
  {
    article: "Double-breasted coat (thin)",
    clo: 0.42,
  },
  {
    article: "Double-breasted coat (thick)",
    clo: 0.48,
  },
];

// Metabolic rates of typical activities
let metRatesTypicalTasks = [
  {
    activity: "Sleeping: 0.7",
    met: 0.7,
  },
  {
    activity: "Reclining: 0.8",
    met: 0.8,
  },
  {
    activity: "Seated, quiet: 1.0",
    met: 1.0,
  },
  {
    activity: "Reading, seated: 1.0",
    met: 1.0,
  },
  {
    activity: "Writing: 1.0",
    met: 1.0,
  },
  {
    activity: "Typing: 1.1",
    met: 1.1,
  },
  {
    activity: "Standing, relaxed: 1.2",
    met: 1.2,
  },
  {
    activity: "Filing, seated: 1.2",
    met: 1.2,
  },
  {
    activity: "Flying aircraft, routine: 1.2",
    met: 1.2,
  },
  {
    activity: "Filing, standing: 1.4",
    met: 1.4,
  },
  {
    activity: "Driving a car: 1.5",
    met: 1.5,
  },
  {
    activity: "Walking about: 1.7",
    met: 1.7,
  },
  {
    activity: "Cooking: 1.8",
    met: 1.8,
  },
  {
    activity: "Table sawing: 1.8",
    met: 1.8,
  },
  {
    activity: "Walking 2mph (3.2kmh): 2.0",
    met: 2.0,
  },
  {
    activity: "Lifting/packing: 2.1",
    met: 2.1,
  },
  {
    activity: "Seated, heavy limb movement: 2.2",
    met: 2.2,
  },
  {
    activity: "Light machine work: 2.2",
    met: 2.2,
  },
  {
    activity: "Flying aircraft, combat: 2.4",
    met: 2.4,
  },
  {
    activity: "Walking 3mph (4.8kmh): 2.6",
    met: 2.6,
  },
  {
    activity: "House cleaning: 2.7",
    met: 2.7,
  },
  {
    activity: "Driving, heavy vehicle: 3.2",
    met: 3.2,
  },
  {
    activity: "Dancing: 3.4",
    met: 3.4,
  },
  {
    activity: "Calisthenics: 3.5",
    met: 3.5,
  },
  {
    activity: "Walking 4mph (6.4kmh): 3.8",
    met: 3.8,
  },
  {
    activity: "Tennis: 3.8",
    met: 3.8,
  },
  {
    activity: "Heavy machine work: 4.0",
    met: 4.0,
  },
  {
    activity: "Handling 100lb (45 kg) bags: 4.0",
    met: 4.0,
  },
  {
    activity: "Pick and shovel work: 4.4",
    met: 4.4,
  },
  {
    activity: "Basketball: 6.3",
    met: 6.3,
  },
  {
    activity: "Wrestling: 7.8",
    met: 7.8,
  },
];
