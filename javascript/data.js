const dishes = [
  {
    id: 1,
    name: "Pisang Goreng",
    category: "Nachspeisen",
    description: "Knusprig frittierte Banane mit süßer goldener Kruste.",
    imgPath: "../assets/img/pisangGoreng.jpg",
    price: 6,
  },
  {
    id: 2,
    name: "Nasi Goreng",
    category: "Hauptgerichte",
    description: "Indonesischer Bratreis mit würziger und herzhafter Note.",
    imgPath: "../assets/img/nasiGoreng.jpg",
    price: 8,
  },
  {
    id: 3,
    name: "Es Teh Manis",
    category: "Getränke",
    description: "Süßer Eistee, leicht, klassisch und erfrischend.",
    imgPath: "../assets/img/esTehManis.jpg",
    price: 3,
  },
  {
    id: 4,
    name: "Lumpia",
    category: "Vorspeisen",
    description: "Knusprige Frühlingsrollen mit würziger Füllung.",
    imgPath: "../assets/img/lumpai.jpg",
    price: 5,
  },

  {
    id: 5,
    name: "Mie Goreng",
    category: "Hauptgerichte",
    description: "Gebratene Nudeln mit Gemüse und kräftigen Gewürzen.",
    imgPath: "../assets/img/mieGoreng.jpg",
    price: 11,
  },
  {
    id: 6,
    name: "Klepon",
    category: "Nachspeisen",
    description: "Weiche Reisbällchen mit flüssiger Palmzuckerfüllung.",
    imgPath: "../assets/img/klepon.jpg",
    price: 4,
  },
  {
    id: 7,
    name: "Kopi Tubruk",
    category: "Getränke",
    description: "Traditioneller indonesischer Kaffee mit starkem Aroma.",
    imgPath: "../assets/img/kopiTubruk.jpg",
    price: 2,
  },
  {
    id: 8,
    name: "Bakwan Jagung",
    category: "Vorspeisen",
    description: "Knusprige Maispuffer mit würzigem Geschmack.",
    imgPath: "../assets/img/bakwanJagung.jpg",
    price: 6,
  },

  {
    id: 9,
    name: "Rendang",
    category: "Hauptgerichte",
    description: "Zart geschmortes Rindfleisch in würziger Kokossauce.",
    imgPath: "../assets/img/rendang.jpg",
    price: 12,
  },
  {
    id: 10,
    name: "Dadar Gulung",
    category: "Nachspeisen",
    description: "Weiche Pandan-Crêpes mit süßer Kokosfüllung.",
    imgPath: "../assets/img/dadarGulung.jpg",
    price: 5,
  },
  {
    name: "Air Mineral",
    category: "Getränke",
    description: "Mineralwasser, kühl und erfrischend.",
    imgPath: "../assets/img/airMineral.jpg",
    price: 2,
  },
  {
    id: 11,
    name: "Sate Lilit",
    category: "Vorspeisen",
    description: "Balinesische Spieße aus gewürztem Hackfleisch.",
    imgPath: "../assets/img/sateLilit.jpg",
    price: 9,
  },

  {
    id: 12,
    name: "Ayam Bakar",
    category: "Hauptgerichte",
    description: "Gegrilltes Hähnchen mit würziger Glasur.",
    imgPath: "../assets/img/ayamBakar.jpg",
    price: 11,
  },
  {
    id: 13,
    name: "Puding Kelapa",
    category: "Nachspeisen",
    description: "Cremiger Kokospudding mit tropischer Note.",
    imgPath: "../assets/img/pudingKelapa.jpg",
    price: 5,
  },
  {
    id: 14,
    name: "Jus Alpukat",
    category: "Getränke",
    description: "Cremiger Avocadosaft, süß und erfrischend.",
    imgPath: "../assets/img/jusAlpukat.jpg",
    price: 3,
  },
  {
    id: 15,
    name: "Perkedel Kentang",
    category: "Vorspeisen",
    description:
      "Goldbraun gebratene Kartoffelpuffer, außen knusprig, innen weich.",
    imgPath: "../assets/img/perkedelKentang.jpg",
    price: 10,
  },
];

const categories = ["Vorspeisen", "Hauptgerichte", "Nachspeisen", "Getränke"];

const shoppingCart = [];

const deliveryFee = 4;
