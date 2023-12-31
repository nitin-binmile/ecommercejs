const ProductType = [
  {
    title: "Women",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/d/i/j/xs-194-pink-aahwan-original-imaghyea4fzan9zu.jpeg",
    brand:["zara","Mango","Nayka","Raymond"],
    size:["XS","S","M","L"],
    color:["#750430","#00A95D","#A2D2FC","#FF7A00"]
  },
  {
    title: "Men",
    img: "https://i.pinimg.com/474x/dc/d4/0d/dcd40d9a7f9cf6a52e6cd4b2b93b15f6.jpg",
    brand:["zara","Mango","Nayka","Raymond"],
    size:["XS","S","M","L"],
    color:["#750430","#00A95D","#A2D2FC","#FF7A00"]
  },
  {
    title: "Electronic",
    img: "https://media.takealot.com/covers_images/320c36e873ed46b48b8a8e125ca9b712/s-zoom.file",
    brand:["samsung","LG","Prestige","Zebronics"],
    color:["#343232","#E4E4E4","#F0E3C8","#4D4554"]
  },
  {
    title: "shoe",
    img: "https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg",
    brand:["Bata","Nike","addidas","Campus"],
    size:["6","7","8","9","10","11","12"],
    color:["#750430","#00A95D","#A2D2FC","#FF7A00"]
  },
  {
    title: "Bag",
    img: "https://s3-alpha-sig.figma.com/img/8357/15d6/83213fb84e391b200f8b508a42d35690?Expires=1696204800&Signature=TWVa2Qw9mQBeww0Yg4Ro92yHxRCJzDStS60xmuDA0cRIdVRguSM9HBOWj2tUxt~LSr2hvcIYZwSod7mvSuvcJJSY-wrB9z~Ye0GHsF5ECUqZEoual5mshLXMNR7yoNN88Ra7Twd~gotsoxZLs8OWmVoUnxSne4mvG-WIGpmTKpg2f71~ioMX0stdsMry9Dm9T0pp8fi-jWOrrwvKU0u2lRIBGTRfq2YAfDKNG1MqePLnkXf6dX6Ez7V7S0PbK5z45sA-Mk7x3e748N~RXHoQqvwWDtWjUAQyKth4g0IsoQKMkc6XlqI8z3WtgL8MlynkYLizA3rE3mFm0fWCxvm~Rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    brand:["Tosiba","American Tourister","Hoseter"],
    color:["#750430","#00A95D","#A2D2FC","#FF7A00"],
    size:["small","medium","large"]
  },
  {
    title: "cosmetic",
    img: "https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=612x612&w=0&k=20&c=j3Vfpo81L5I2g0uJ5tArBC3l_fcPtPAcLzzT4pq5BLY=",
    brand:["nyaka","sugar","lyakme","Recode"],
    size:["small Kit","medium Kit","large Kit"]

  },
];

function getRandomDateCode() {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 11+2)); // Random number between 0 and 10
  const year = futureDate.getFullYear();
  const month = String(futureDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(futureDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

module.exports = () => {
  const data = {
    limitedTimeOffer: [],
    products: [],
  };
  const limit = 10000;
  for (let i = 0; i < limit; i++) {
    let type = ProductType[Math.floor(Math.random() * ProductType.length)];
    
    const product = {
      id: i,
      name: "product"+i,
      count: Math.floor(Math.random() * 50 + 30),
      ratings: Math.floor(Math.random() * 50 * 3 + 120),
      title: type.title,
      brand: type.brand[Math.floor(Math.random()*type.brand.length)],
      img : type.img,
      availableQuantity:Math.floor(Math.random() * 10+5),
      cost: Math.floor(50 + Math.floor(Math.random() * 60)),
      discount: Math.floor(Math.random() * 10 + 5),
    
    };
    if(type.size) product.size = type.size;
    if(type.color) product.color = type.color;
    data.products.push(product);
    if (Math.random() > 0.5)
      data.limitedTimeOffer.push({
        product: product,
        offerEndTime: getRandomDateCode(),
      });
  }
  return data;
};
