
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const menuData = {
    "INDIAN FOOD": {
      Starter: [
        { name: "Paneer Tikka", price: "₹250" },
        { name: "Samosa", price: "₹100" },
      ],
      "Main Course": [
        { name: "Butter Chicken", price: "₹350" },
        { name: "Dal Makhani", price: "₹300" },
      ],
    },
    "CHINESE FOOD": {
      Starter: [
        { name: "Spring Rolls", price: "₹200" },
        { name: "Manchow Soup", price: "₹150" },
      ],
      "Main Course": [
        { name: "Kung Pao Chicken", price: "₹400" },
        { name: "Fried Rice", price: "₹250" },
      ],
    },
    "DESSERTS": {
      Options: [
        { name: "Gulab Jamun", price: "₹150" },
        { name: "Ice Cream", price: "₹120" },
      ],
    },
  };

  return (
    <section style={styles.menuPage}>
      <h1 style={styles.heading}>Our Menu</h1>

      {Object.entries(menuData).map(([category, sections]) => (
        <div key={category} style={styles.category}>
          <h2 style={styles.categoryTitle}>{category}</h2>

          {Object.entries(sections).map(([section, items]) => (
            <div key={section} style={styles.section}>
              <h3 style={styles.sectionTitle}>{section}</h3>
              <ul style={styles.list}>
                {items.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={() => navigate("/")}
        style={styles.backButton}
      >
        Back to Home
      </button>
    </section>
  );
};

const styles = {
  menuPage: {
    maxWidth: "700px",
    margin: "3rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#d35400",
  },
  category: {
    marginBottom: "2rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1rem",
  },
  categoryTitle: {
    fontSize: "2rem",
    color: "#2980b9",
    marginBottom: "0.8rem",
  },
  section: {
    marginLeft: "1rem",
    marginBottom: "1rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#27ae60",
    marginBottom: "0.5rem",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.3rem 0",
    fontSize: "1.1rem",
    borderBottom: "1px dotted #ccc",
  },
  backButton: {
    display: "block",
    margin: "2rem auto 0",
    padding: "0.7rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#d35400",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MenuPage;
