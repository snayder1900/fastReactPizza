/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  //isLoadingIngredients, ingredients
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm ">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Cargando..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    // item: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    // isLoadingIngredients: PropTypes.bool.isRequired,
    // ingredients: PropTypes.string.isRequired,
  }),
};

export default OrderItem;
