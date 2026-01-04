const categories = [
  { title: "iPhone", image: "../images/iphone.jpg" },
  { title: "Samsung", image: "../images/samsung.jpg" },
  { title: "iPad", image: "../images/ipad.jpg" },
  { title: "MacBook", image: "../images/macbook.png" },
  { title: "Watches", image: "../images/watch.jpg" },
  { title: "Audio", image: "../images/audio.jpg" },
  { title: "Accessories", image: "../images/assecories.jpg" },
];

const CategorySection = () => (
  <section className="category_section" id="categories">
    <center>
      <h2 className="section_title mb-4 text-center">Shop By Category</h2>
    </center>
    <div className="categories_row_full">
      {categories.map((cat, i) => (
        <div key={i} className="category_card">
          <img src={cat.image} alt={cat.title} className="category_image" />
          <h5 className="category_title mt-2">{cat.title}</h5>
        </div>
      ))}
    </div>
  </section>
);

export default CategorySection;
