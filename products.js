/* ============================================================
   PRODUCT DATA — single source of truth
   Edit this file to add your real products, prices, images
   and descriptions. Both the store page and product pages
   read from this file automatically.
   ============================================================ */

const PRODUCTS = [
  // ---------- CATEGORY 1 ----------
  {id:"c1-01", category:1, categoryLabel:"Saima", code:"M1 · 01", name:"Saima", price:"Rs. 50,000", images:["c1-01-1.jpeg","c1-01-1.jpeg","c1-01-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. —."},
  {id:"c1-02", category:1, categoryLabel:"AYESHA", code:"C1 · 02", name:"Ayesha", price:"Rs. 40,000", images:["c1-02-1.jpeg","c1-02-1.jpeg","c1-02-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. —."},
  {id:"c1-03", category:1, categoryLabel:"Category One", code:"C1 · 03", name:"Sonia", price:"Rs. 45,000", images:["c1-03-3.jpeg","c1-03-3.jpeg","c1-03-3.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. — ."},
  {id:"c1-04", category:1, categoryLabel:"Category One", code:"C1 · 04", name:"Eva ", price:"Rs. 40,000", images:["c1-04-1.jpeg","c1-04-1.jpeg","c1-04-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. — ."},
  {id:"c1-05", category:1, categoryLabel:"Category One", code:"C1 · 05", name:"Maria", price:"Rs. 40,000", images:["c1-05-1.jpeg","c1-05-1.jpeg","c1-05-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. — ."},
  {id:"c1-06", category:1, categoryLabel:"Category One", code:"C1 · 06", name:"Sarish", price:"Rs. 40,000", images:["c1-06-1.jpeg","c1-06-1.jpeg","c1-06-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. — ."},
  {id:"c1-07", category:1, categoryLabel:"Category One", code:"C1 · 07", name:"Laiba", price:"Rs. 50,000", images:["c1-07-1.jpeg","c1-07-1.jpeg","c1-07-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. — ."},
  {id:"c1-08", category:1, categoryLabel:"Category One", code:"C1 · 08", name:"Areeba", price:"Rs. 50,000", images:["c1-08-1.jpeg","c1-08-1.jpeg","c1-08-1.jpeg"], description:"DHA Karachi Escorts offers premium, discreet, and luxury escorts services across all major areas of Karachi. — ."},

  // ---------- CATEGORY 2 ----------
  {id:"c2-01", category:2, categoryLabel:"Category Two", code:"C2 · 01", name:"RAMADA HOTEL", price:"Rs. 50,000", images:["c2-01-1.jfif","c2-01-1.jfif","c2-01-1.jfif"], description:"Book Escourts in Luxury Hotels — Message US on Whatsapp For more Details."},
  {id:"c2-02", category:2, categoryLabel:"Category Two", code:"C2 · 02", name:"Hotel Mehran", price:"Rs. 50,000", images:["c2-01-1.jfif","c2-01-1.jfif","c2-01-1.jfif"], description:"Book Escourts in Luxury Hotels — Message US on Whatsapp For more Details."},
  {id:"c2-03", category:2, categoryLabel:"Category Two", code:"C2 · 03", name:"Seashell Inn", price:"Rs. 40,000", images:["c2-03-1.jfif","c2-03-1.jfif","c2-03-1.jfif"], description:"Book Escourts in Luxury Hotels — Message US on Whatsapp For more Details."},
  {id:"c2-04", category:2, categoryLabel:"Category Two", code:"C2 · 04", name:"Pearl Continental Hotel", price:"Rs. 50,000", images:["c2-04-1.jpg","c2-04-1.jpg","c2-04-1.jpg"], description:"Book Escourts in Luxury Hotels — Message US on Whatsapp For more Details."},
  {id:"c2-05", category:2, categoryLabel:"Category Two", code:"C2 · 05", name:"Beach Luxury Hotel", price:"Rs. 50,000", images:["c2-05-1.jfif","c2-05-1.jfif","c2-05-1.jfif"], description:"Book Escourts in Luxury Hotels — Message US on Whatsapp For more Details."},
  {id:"c2-06", category:2, categoryLabel:"Category Two", code:"C2 · 06", name:"Marriott Hotel", price:"Rs. 35,000", images:["c2-06-2.jfif","c2-06-2.jfif","c2-06-2.jfif"], description:"Book Escourts in Luxury Hotels — material, sizing, specs or details go here."},
  
  // ---------- CATEGORY 3 ----------
  {id:"c3-01", category:3, categoryLabel:"Category Three", code:"C3 · 01", name:"Defence", price:"", images:["c3-01-1.jpeg","c3-01-1.jpeg","c3-01-1.jpeg"], description:" Escorts services across all major areas of Karachi Get in Touch For more details. — material, sizing, specs or details go here."},
  {id:"c3-02", category:3, categoryLabel:"Category Three", code:"C3 · 02", name:"Clifton", price:"", images:["c3-02-1.jpeg","c3-02-1.jpeg","c3-02-1.jpeg"], description:" Escorts services across all major areas of Karachi Get in Touch For more details. — material, sizing, specs or details go here."},
  {id:"c3-03", category:3, categoryLabel:"Category Three", code:"C3 · 03", name:"Teen Talwar", price:"", images:["c3-03-1.jpeg","c3-03-1.jpeg","c3-03-1.jpeg"], description:" Escorts services across all major areas of Karachi Get in Touch For more details. — material, sizing, specs or details go here."},
  {id:"c3-04", category:3, categoryLabel:"Category Three", code:"C3 · 04", name:"Shahra-e-Faisal", price:"", images:["c3-04-1.jpeg","c3-04-1.jpeg","c3-04-1.jpeg"], description:" Escorts services across all major areas of Karachi Get in Touch For more details. — material, sizing, specs or details go here."},
  {id:"c3-05", category:3, categoryLabel:"Category Three", code:"C3 · 05", name:"Bahria Town", price:"", images:["c3-05-1.jpeg","c3-05-1.jpeg","c3-05-1.jpeg"], description:" Escorts services across all major areas of Karachi Get in Touch For more details. — material, sizing, specs or details go here."},
 
];
