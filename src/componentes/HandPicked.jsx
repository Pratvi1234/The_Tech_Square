const handpickedProducts = [
  {
    id: 1,
    name: "iPhone 14",
    brand: "Apple",
    price: "$799",
    image: "../HandPicked/iPhone_14.jpg",
  },
  {
    id: 2,
    name: "Galaxy S23",
    brand: "Samsung",
    price: "$699",
    image: "../HandPicked/galaxy_s23.webp",
  },
  {
    id: 3,
    name: "MacBook Air",
    brand: "Apple",
    price: "$999",
    image: "../HandPicked/macbook_air.jpg",
  },
  {
    id: 4,
    name: "iPad Pro",
    brand: "Apple",
    price: "$899",
    image: "../HandPicked/ipad_pro.webp",
  },
  {
    id: 5,
    name: "Galaxy Tab S8",
    brand: "Samsung",
    price: "$649",
    image: "../HandPicked/galaxyTab_s8.jpg",
  },
  {
    id: 6,
    name: "Dell Inspiron",
    brand: "Dell",
    price: "$550",
    image: "../HandPicked/dell_Inspiron.webp",
  },
  {
    id: 7,
    name: "HP Pavilion",
    brand: "HP",
    price: "$500",
    image: "../HandPicked/HP_Pavilion.webp",
  },
  {
    id: 8,
    name: "OnePlus 11",
    brand: "OnePlus",
    price: "$699",
    image: "../HandPicked/OnePlus_11.png",
  },
];

const HandpickedProducts = () => (
  <section className="handpicked_section">
    <center>
      <h2 className="section_title text-center mb-4">HANDPICKED FOR YOU</h2>
    </center>
    <div className="handpicked_grid">
      {handpickedProducts.map((prod) => (
        <div key={prod.id} className="product_card">
          <img src={prod.image} alt={prod.name} className="product_image" />
          <h5 className="product_name">{prod.name}</h5>
          <p className="product_brand">{prod.brand}</p>
          <p className="product_price">{prod.price}</p>
          <button className="btn-add-bag">Add to Bag</button>
        </div>
      ))}
    </div>
  </section>
);

export default HandpickedProducts;
