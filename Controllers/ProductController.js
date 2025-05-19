const path=require("path")

const speakers = async (req, res) => {
  res.json([
    {
      id: 1,
      brand: "JBL",
      title: "JBL Flip 5 Bluetooth Speaker",
      price: 7999,
      description: "Portable waterproof speaker with powerful bass and 12 hours of playtime.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557331/products/product-1747557330933.webp"
    },
    {
      id: 2,
      brand: "Sony",
      title: "Sony SRS-XB13 Extra Bass",
      price: 4999,
      description: "Compact wireless speaker with Extra Bass and long battery life.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557336/products/product-1747557335931.webp"
    },
    {
      id: 3,
      brand: "boAt",
      title: "boAt Stone 1200 14W Speaker",
      price: 3499,
      description: "14W RMS stereo output with IPX7 water resistance and RGB lights.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557328/products/product-1747557327282.webp"
    },
    {
      id: 4,
      brand: "Marshall",
      title: "Marshall Emberton Portable",
      price: 17999,
      description: "Stylish compact speaker with 360° sound and 20+ hours playtime.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557332/products/product-1747557331939.webp"
    },
    {
      id: 5,
      brand: "Bose",
      title: "Bose SoundLink Micro",
      price: 10999,
      description: "Rugged waterproof Bluetooth speaker with crisp sound and deep bass.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557329/products/product-1747557328946.webp"
    },
    {
      id: 6,
      brand: "Zebronics",
      title: "Zebronics BT4440RUCF 4.1",
      price: 2899,
      description: "4.1 channel multimedia speaker with Bluetooth, FM, and remote.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557337/products/product-1747557336917.webp"
    },
    {
      id: 7,
      brand: "Philips",
      title: "Philips SPA8140B/94 4.1",
      price: 3499,
      description: "4.1 speaker system with deep bass and USB connectivity.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557334/products/product-1747557333987.webp"
    },
    {
      id: 8,
      brand: "Infinity",
      title: "Infinity Fuze 100 by JBL",
      price: 1499,
      description: "Dual equalizer modes for normal & deep bass, IPX7 waterproof design.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557330/products/product-1747557329875.jpg"
    },
    {
      id: 9,
      brand: "MI",
      title: "Mi Portable Bluetooth Speaker 16W",
      price: 2499,
      description: "Powerful 16W sound, dual EQ modes, IPX7 water resistance.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557333/products/product-1747557332912.webp"
    },
    {
      id: 10,
      brand: "Realme",
      title: "Realme Cobble Bluetooth Speaker",
      price: 1799,
      description: "5W dynamic bass boost driver, IPX5 water resistance, long battery life.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747557335/products/product-1747557335017.webp"
    }
  ]);
};

const mobiles = async (req, res) => {
  res.json([
    {
      id: 1,
      brand: "Apple",
      title: "iPhone 14 Pro Max",
      price: 139999,
      description: "6.7-inch Super Retina XDR display, A16 Bionic chip, 48MP main camera, Dynamic Island UI.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556102/products/product-1747556101009.jpg"
    },
    {
      id: 2,
      brand: "Samsung",
      title: "Samsung Galaxy S23 Ultra",
      price: 124999,
      description: "6.8-inch QHD+ AMOLED, Snapdragon 8 Gen 2, 200MP quad camera, S-Pen included.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556103/products/product-1747556103176.jpg"
    },
    {
      id: 3,
      brand: "OnePlus",
      title: "OnePlus 11R 5G",
      price: 39999,
      description: "6.74-inch AMOLED, Snapdragon 8+ Gen 1, 100W fast charging, 50MP Sony sensor.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556104/products/product-1747556104108.jpg"
    },
    {
      id: 4,
      brand: "Xiaomi",
      title: "Redmi Note 12 Pro+ 5G",
      price: 29999,
      description: "6.67-inch AMOLED, MediaTek Dimensity 1080, 200MP camera, 120W fast charging.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556110/products/product-1747556109908.jpg"
    },
    {
      id: 5,
      brand: "Realme",
      title: "Realme Narzo 60 Pro",
      price: 23999,
      description: "Curved AMOLED display, Dimensity 7050, 100MP camera, vegan leather design.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556109/products/product-1747556108987.jpg"
    },
    {
      id: 6,
      brand: "Motorola",
      title: "Moto Edge 40",
      price: 27999,
      description: "6.55-inch 144Hz pOLED display, Dimensity 8020, IP68 water resistance, 50MP OIS camera.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556106/products/product-1747556106017.jpg"
    },
    {
      id: 7,
      brand: "Google",
      title: "Google Pixel 7A",
      price: 43999,
      description: "Google Tensor G2 chip, 64MP camera with AI features, clean Android experience.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556103/products/product-1747556103176.jpg"
    },
    {
      id: 8,
      brand: "iQOO",
      title: "iQOO Z7 5G",
      price: 17999,
      description: "6.38-inch AMOLED, MediaTek Dimensity 920, 64MP OIS camera, 90Hz refresh rate.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556105/products/product-1747556105096.jpg"
    },
    {
      id: 9,
      brand: "Infinix",
      title: "Infinix Zero 5G",
      price: 13999,
      description: "Dimensity 920, 120Hz display, 5000mAh battery with 33W fast charging.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556104/products/product-1747556104108.jpg"
    },
    {
      id: 10,
      brand: "Nothing",
      title: "Nothing Phone (2)",
      price: 44999,
      description: "Unique glyph interface, Snapdragon 8+ Gen 1, clean Android OS, 50MP dual camera.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747556107/products/product-1747556106938.jpg"
    }
  ]);
};




const tvs = async (req, res) => {
    res.json([
  {
    id: 1,
    brand: "Samsung",
    title: "Samsung 55-inch 4K UHD Smart TV",
    price: 55999,
    imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558027/products/product-1747558024505.webp"
  },
  {
    id: 2,
    brand: "Sony",
    title: "Sony Bravia 65-inch 4K OLED",
    price: 124999,
    imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558031/products/product-1747558030821.webp"
  },
  {
    id: 3,
    brand: "LG",
    title: "LG 50-inch 4K LED Smart TV",
    price: 47999,
    imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558028/products/product-1747558028746.webp"
  },
  {
    id: 4,
    brand: "OnePlus",
    title: "OnePlus Y Series 43-inch",
    price: 26999,
    imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558028/products/product-1747558027867.webp"
  },
  {
    id: 5,
    brand: "Mi",
    title: "Mi 5X 50-inch 4K TV",
    price: 34999,
    imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558029/products/product-1747558029729.webp"
  }
]);

};

const Laptops = (req, res) => {
  res.json([
    {
      id: 1,
      company: "Dell",
      title: "Dell Inspiron 15 5000",
      price: 59999,
      description: "15.6-inch FHD display, Intel Core i5 12th Gen, 8GB RAM, 512GB SSD, Windows 11 pre-installed.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558489/products/product-1747558489040.webp"
    },
    {
      id: 2,
      company: "HP",
      title: "HP Pavilion x360",
      price: 64999,
      description: "14-inch touch screen, Intel Core i5 12th Gen, 360° hinge, 16GB RAM, 512GB SSD, backlit keyboard.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558486/products/product-1747558486173.webp"
    },
    {
      id: 3,
      company: "Apple",
      title: "MacBook Air M2",
      price: 104999,
      description: "13.6-inch Liquid Retina display, Apple M2 chip, 8GB unified memory, 256GB SSD, macOS Ventura.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558488/products/product-1747558488118.webp"
    },
    {
      id: 4,
      company: "Lenovo",
      title: "Lenovo IdeaPad Slim 5",
      price: 48999,
      description: "15.6-inch FHD display, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, fingerprint sensor, Windows 11.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558483/products/product-1747558483416.webp"
    },
    {
      id: 5,
      company: "Asus",
      title: "Asus VivoBook 14",
      price: 42999,
      description: "14-inch FHD display, Intel Core i3 11th Gen, 8GB RAM, 512GB SSD, sleek and lightweight design.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558490/products/product-1747558490065.webp"
    },
    {
      id: 6,
      company: "Acer",
      title: "Acer Aspire 7",
      price: 52999,
      description: "15.6-inch FHD, AMD Ryzen 5 5500U, GTX 1650 4GB graphics, 8GB RAM, 512GB SSD, backlit keyboard.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558487/products/product-1747558487129.webp"
    },
    {
      id: 7,
      company: "Microsoft",
      title: "Surface Laptop 5",
      price: 119999,
      description: "13.5-inch PixelSense display, Intel Evo i5 12th Gen, 8GB RAM, 256GB SSD, ultra-premium build.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558490/products/product-1747558490065.webp"
    },
    {
      id: 8,
      company: "MSI",
      title: "MSI Modern 14",
      price: 68999,
      description: "14-inch FHD display, Intel Core i5 12th Gen, 16GB RAM, 512GB SSD, productivity and portability-focused.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558485/products/product-1747558485164.webp"
    },
    {
      id: 9,
      company: "Samsung",
      title: "Samsung Galaxy Book3",
      price: 77999,
      description: "15.6-inch AMOLED display, Intel Core i5 13th Gen, 16GB RAM, 512GB SSD, slim and stylish metal body.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558482/products/product-1747558481348.webp"
    },
    {
      id: 10,
      company: "LG",
      title: "LG Gram 16",
      price: 114999,
      description: "16-inch WQXGA IPS display, Intel Evo i7 12th Gen, 16GB RAM, 512GB SSD, ultra-lightweight at 1.2kg.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747558484/products/product-1747558484246.webp"
    }
  ]);
};


const accessories = async (req, res) => {
  res.json([
    {
      id: 1,
      type: "Charger",
      title: "20W USB-C Power Adapter",
      price: 1499,
      description: "Fast and efficient 20W USB-C power adapter for quick charging of iPhones, iPads, and other USB-C devices.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559490/products/product-1747559490356.webp"
    },
    {
      id: 2,
      type: "Cable",
      title: "Anker USB-C to Lightning Cable",
      price: 999,
      description: "Durable and MFi-certified USB-C to Lightning cable for fast charging and syncing Apple devices.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559489/products/product-1747559488557.webp"
    },
    {
      id: 3,
      type: "Power Bank",
      title: "Mi 10000mAh Power Bank 3i",
      price: 1799,
      description: "High-capacity 10000mAh power bank with dual output ports and fast charging support for all devices.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559491/products/product-1747559491412.webp"
    }
  ]);
};

const smartwatch = async (req, res) => {
  res.json([
    {
      id: 1,
      brand: "Apple",
      title: "Apple Watch Series 9",
      price: 41999,
      description: "Advanced smartwatch with Always-On Retina display, health sensors, and seamless integration with iPhone.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559495/products/product-1747559495342.webp"
    },
    {
      id: 2,
      brand: "Samsung",
      title: "Samsung Galaxy Watch 5",
      price: 28999,
      description: "Premium smartwatch with AMOLED display, fitness tracking, sleep analysis, and Wear OS integration.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559493/products/product-1747559493355.webp"
    }
  ]);
};

const headphones = async (req, res) => {
  res.json([
    {
      id: 1,
      brand: "boAt",
      title: "boAt Rockerz 450",
      price: 1499,
      description: "On-ear wireless headphones with up to 15 hours of playback, deep bass, and ergonomic design.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559494/products/product-1747559494382.webp"
    },
    {
      id: 2,
      brand: "Sony",
      title: "Sony WH-1000XM5",
      price: 29999,
      description: "Industry-leading wireless noise-cancelling headphones with up to 30 hours of battery life and immersive sound.",
      imageUrl: "https://res.cloudinary.com/dqfi8tfql/image/upload/v1747559492/products/product-1747559492294.webp"
    }
  ]);
};






module.exports = {
    tvs,
    speakers,
    mobiles,
    Laptops,
  
    headphones,
    smartwatch,
    accessories,
    
};
