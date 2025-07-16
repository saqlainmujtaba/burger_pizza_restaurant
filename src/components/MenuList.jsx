import menuData from "../assets/Json/kfc_menu_data.json";
import MenuItem from "./MenuItem";
import OrderDetails from "./OrderDetails";
import "../styles/components/MenuList.css";

const MenuList = () => {
  // Group items by category
  const groupedData = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="menuContainer">
        <div className="menuList">
          {Object.entries(groupedData).map(([category, items]) => (
            <div key={category} className="menuCategory">
              <h2 className="categoryTitle">{category}</h2>
              <div className="categoryItems">
                {items.map((deal, index) => (
                  <MenuItem key={index} deal={deal} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <OrderDetails />
      </div>
    </>
  );
};

export default MenuList;
