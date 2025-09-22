// Global products data (no modules to support file:// usage)
window.PRODUCTS_DATA = [
  { id: 'resin-jewelry-set', name: 'Resin Jewelry Set', price: 899, image: 'images/art3.jpg', category: 'jewelry', description: 'Beautiful handcrafted resin jewelry with floral designs' },
  { id: 'decorative-bowls', name: 'Decorative Bowls', price: 1299, image: 'images/bowls.jpg', category: 'decor', description: 'Elegant resin bowls perfect for home decoration' },
  { id: 'resin-coasters', name: 'Resin Coasters', price: 699, image: 'images/coaster.jpg', category: 'festive', description: 'Set of 4 beautiful resin coasters with unique patterns' },
  { id: 'statement-rings', name: 'Statement Rings', price: 599, image: 'images/ring.jpg', category: 'jewelry', description: 'Bold and beautiful resin rings for every occasion' },
  { id: 'night-lamps', name: 'Night Lamps', price: 1599, image: 'images/lamp.jpg', category: 'decor', description: 'Ambient resin night lamps with LED lighting' },
];


// Append keychains from images/keychains (dummy prices; update later)
window.PRODUCTS_DATA = window.PRODUCTS_DATA.concat([
  { id: 'keychain-0028', name: 'Letter Keychains', price: 299, image: 'images/keychains/IMG-20250922-WA0028.jpg', category: 'keychains', description: 'Handcrafted resin keychain' },
  { id: 'keychain-0029', name: 'Name Keychains', price: 678, image: 'images/keychains/IMG-20250922-WA0029.jpg', category: 'keychains', description: 'Handcrafted resin keychain' },
  { id: 'keychain-0030', name: 'Detailed Keychains', price: 449, image: 'images/keychains/IMG-20250922-WA0030.jpg', category: 'keychains', description: 'Handcrafted resin keychain' },
  { id: 'keychain-0031', name: 'Couple Keychains', price: 849, image: 'images/keychains/IMG-20250922-WA0031.jpg', category: 'keychains', description: 'Handcrafted resin keychain' },
]);

// Append jewellery items (using images/jewellery) with provided prices
window.PRODUCTS_DATA = window.PRODUCTS_DATA.concat([
  { id: 'jewelry-bangles',   name: 'Resin Bangles',   price: 299, image: 'images/jewellery/IMG-20250922-WA0032.jpg', category: 'jewelry', description: 'Handcrafted resin bangles' },
  { id: 'jewelry-pendant',   name: 'Resin Pendant',   price: 179, image: 'images/jewellery/IMG-20250922-WA0033.jpg', category: 'jewelry', description: 'Handcrafted resin pendant' },
  { id: 'jewelry-hairclips', name: 'Resin Hair Clips',price: 149, image: 'images/jewellery/IMG-20250922-WA0034.jpg', category: 'jewelry', description: 'Handcrafted resin hair clips' },
  { id: 'jewelry-bracelet',  name: 'Resin Bracelet',  price: 149, image: 'images/jewellery/IMG-20250922-WA0035.jpg', category: 'jewelry', description: 'Handcrafted resin bracelet' },
  { id: 'jewelry-jhumka',    name: 'Resin Jhumka',    price: 299, image: 'images/jewellery/IMG-20250922-WA0036.jpg', category: 'jewelry', description: 'Handcrafted resin jhumka earrings' },
  { id: 'jewelry-earrings',  name: 'Resin Earrings',  price: 149, image: 'images/jewellery/IMG-20250922-WA0037.jpg', category: 'jewelry', description: 'Handcrafted resin earrings' },
]);

// Append home decor items (using images/home decor)
window.PRODUCTS_DATA = window.PRODUCTS_DATA.concat([
  { id: 'decor-cup',        name: 'Resin Cup',        price: 349,  image: 'images/home decor/IMG-20250922-WA0038.jpg', category: 'decor', description: 'Handcrafted resin cup' },
  { id: 'decor-board',      name: 'Wooden Board',     price: 599,  image: 'images/home decor/IMG-20250922-WA0039.jpg', category: 'decor', description: 'Decorative wooden serving board' },
  { id: 'decor-tray',       name: 'Resin Tray',       price: 2599, image: 'images/home decor/IMG-20250922-WA0040.jpg', category: 'decor', description: 'Premium resin serving tray' },
  { id: 'decor-clock',      name: 'Resin Clock',      price: 1899, image: 'images/home decor/IMG-20250922-WA0041.jpg', category: 'decor', description: 'Handcrafted resin wall clock' },
  { id: 'decor-geode',      name: 'Geode Painting',   price: 4599, image: 'images/home decor/IMG-20250922-WA0042.jpg', category: 'decor', description: 'Geode-inspired resin painting' },
  { id: 'decor-bowl-plate', name: 'Bowl & Plate',     price: 2499, image: 'images/home decor/IMG-20250922-WA0043.jpg', category: 'decor', description: 'Resin bowl and plate set' },
  { id: 'decor-table',      name: 'Resin Table',      price: 3499, image: 'images/home decor/IMG-20250922-WA0044.jpg', category: 'decor', description: 'Artistic resin side table' },
  { id: 'decor-mirror',     name: 'Resin Mirror',     price: 3499, image: 'images/home decor/IMG-20250922-WA0045.jpg', category: 'decor', description: 'Resin embellished mirror' },
]);

// Append festive collection items (using images/festive collections)
window.PRODUCTS_DATA = window.PRODUCTS_DATA.concat([
  { id: 'festive-baby-detail', name: 'Baby Detailing',      price: 3499, image: 'images/festive collections/IMG-20250922-WA0046.jpg', category: 'festive', description: 'Preserved baby details in resin' },
  { id: 'festive-garland',     name: 'Garland Preservation', price: 3499, image: 'images/festive collections/IMG-20250922-WA0047.jpg', category: 'festive', description: 'Preserved garland keepsake' },
  { id: 'festive-diary',       name: 'Resin Diary',          price: 899,  image: 'images/festive collections/IMG-20250922-WA0048.jpg', category: 'festive', description: 'Handmade resin-covered diary' },
  { id: 'festive-puja-thali',  name: 'Puja Thali',           price: 1299, image: 'images/festive collections/IMG-20250922-WA0049.jpg', category: 'festive', description: 'Decorative resin Puja thali' },
  { id: 'festive-hamper',      name: 'Resin Gift Hamper',    price: 1299, image: 'images/festive collections/IMG-20250922-WA0050.jpg', category: 'festive', description: 'Curated resin gift hamper' },
  { id: 'festive-lamp',        name: 'Resin Lamp',           price: 1999, image: 'images/festive collections/IMG-20250922-WA0051.jpg', category: 'festive', description: 'Ambient resin decorative lamp' },
]);

