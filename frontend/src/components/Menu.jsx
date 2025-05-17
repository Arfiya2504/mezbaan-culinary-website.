import rawData from '../restApi.json';

const Menu = () => {
  const dishes = rawData.data[0]?.dishes;

  if (!dishes) {
    return <div>Loading or Error: No data available</div>;
  }

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            “Discover our chef’s favorites, crafted with fresh ingredients and bold flavors to satisfy every craving and delight your palate.”</p>
        </div>
        <div className="dishes_container">
          {dishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
