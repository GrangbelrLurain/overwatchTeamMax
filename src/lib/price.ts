type TPrices = {
  [type: string]: {
    name: string;
    src: string;
    price: number;
  }[];
};

const prices: TPrices = {
  win: [
    {
      name: "브론즈",
      src: "bronze.png",
      price: 2500,
    },
    {
      name: "실버",
      src: "silver.png",
      price: 2500,
    },
    {
      name: "골드",
      src: "gold.png",
      price: 3000,
    },
    {
      name: "플레",
      src: "platinum.png",
      price: 4000,
    },
    {
      name: "다이아5-4",
      src: "diamond.png",
      price: 5000,
    },
    {
      name: "다이아3-1",
      src: "diamond.png",
      price: 6000,
    },
    {
      name: "마스터5-4",
      src: "master.png",
      price: 7500,
    },
    { name: "마스터3-1", src: "master.png", price: 10000 },
    { name: "그마5", src: "grandmaster.png", price: 18000 },
    { name: "그마4", src: "grandmaster.png", price: 23000 },
    { name: "그마3", src: "grandmaster.png", price: 28000 },
    { name: "그마2", src: "grandmaster.png", price: 32000 },
    { name: "그마1", src: "grandmaster.png", price: 36000 },
  ],
  tier: [
    {
      name: "브론즈",
      src: "bronze.png",
      price: 12500,
    },
    {
      name: "실버",
      src: "silver.png",
      price: 12500,
    },
    {
      name: "골드",
      src: "gold.png",
      price: 15000,
    },
    {
      name: "플레",
      src: "platinum.png",
      price: 19000,
    },
    {
      name: "다이아5-4",
      src: "diamond.png",
      price: 21000,
    },
    {
      name: "다이아3-1",
      src: "diamond.png",
      price: 28500,
    },
    {
      name: "마스터5-4",
      src: "master.png",
      price: 34000,
    },
    { name: "마스터3-1", src: "master.png", price: 44500 },
  ],
  batch: [
    {
      name: "다이아5-4",
      src: "diamond.png",
      price: 50000,
    },
    {
      name: "다이아3-1",
      src: "diamond.png",
      price: 60000,
    },
    {
      name: "마스터5-4",
      src: "master.png",
      price: 65000,
    },
    { name: "마스터3-1", src: "master.png", price: 80000 },
    { name: "그마5", src: "grandmaster.png", price: 110000 },
    { name: "그마4", src: "grandmaster.png", price: 130000 },
    { name: "그마3", src: "grandmaster.png", price: 150000 },
    { name: "그마2", src: "grandmaster.png", price: 170000 },
    { name: "그마1", src: "grandmaster.png", price: 190000 },
  ],
  duo: [
    {
      name: "브론즈",
      src: "bronze.png",
      price: 3000,
    },
    {
      name: "실버",
      src: "silver.png",
      price: 3000,
    },
    {
      name: "골드",
      src: "gold.png",
      price: 4000,
    },
    {
      name: "플레",
      src: "platinum.png",
      price: 5000,
    },
    {
      name: "다이아",
      src: "diamond.png",
      price: 6000,
    },
    {
      name: "마스터",
      src: "master.png",
      price: 7000,
    },
  ],
  just: [
    {
      name: "브론즈",
      src: "bronze.png",
      price: 2000,
    },
    {
      name: "실버",
      src: "silver.png",
      price: 2000,
    },
    {
      name: "골드",
      src: "gold.png",
      price: 2500,
    },
    {
      name: "플레",
      src: "platinum.png",
      price: 3500,
    },
    {
      name: "다이아",
      src: "diamond.png",
      price: 4000,
    },
    {
      name: "마스터",
      src: "master.png",
      price: 5000,
    },
  ],
};

export { prices };
