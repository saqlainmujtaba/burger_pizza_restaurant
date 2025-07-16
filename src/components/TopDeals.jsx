import "../styles/components/topDeals.css";

// Images
import CrispyDuoBox from "../assets/topDeals/CrispyDuoBox.png";
import familyFestivle from "../assets/topDeals/familyFestivle.png";
import valueBucket from "../assets/topDeals/valueBucket.png";
import XtremeDuoBox from "../assets/topDeals/XtremeDuoBox.png";
import MenuItem from "./MenuItem";

const topDealsData = [
  {
    name: "Crispy Duo Box",
    image: CrispyDuoBox,
    price: 930,
    description:
      "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
  },
  {
    name: "Krunch Combo",
    image: familyFestivle,
    price: 630,
    description:
      "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
  },
  {
    name: "Chick & Chips",
    image: valueBucket,
    price: 630,
    description:
      "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
  },
  {
    name: "Hot Wings Bucket",
    image: XtremeDuoBox,
    price: 1250,
    description:
      "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
  },
];

const TopDeals = () => {

  return (
    <div className="topDeals">
      <h1>Top Deals</h1>
      <div className="tdItems">
        {topDealsData.map((deal, i) => (
         <MenuItem deal={deal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
