import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-3 p-4">
      <LinkButton to="/menu">&larr; Regresar al menú</LinkButton>

      <p className="font-semibold mt-7">
        Tu carrito esta vacío. Empezar a añadir pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
