// import { Stack } from "react-bootstrap";
// import { useShopCart } from "../context/ShoppingCartContext";
// import StoreItems from "../data/item.json";

// type CartItemProps = {
//   id: number;
//   quantity: number;
// };

// export function CartItem({ id, quantity }: CartItemProps) {
//   const { removeQuantity } = useShopCart();
//   const item = StoreItems.find((i) => i.id === id);
//   if (item === null) return null;

//   return (
//     <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
//       <img
//         src={item?.image}
//         style={{ width: "125px", height: "75px", objectFit: "cover" }}
//       />

//       <div className="me-auto">
//         <div>
//           {item?.name}
//           {quantity > 1 && (
//             <span className="text" style={{ fontSize: ".65rem" }}>
//               x{quantity}
//             </span>
//           )}
//         </div>
//         <div className="text-muted" style={{ fontSize: ".75rem" }}>
//           {item?.price}$
//         </div>
//         <div>{quantity * item?.price}$</div>
//       </div>
//     </Stack>
//   );
// }

import { Button, Stack } from "react-bootstrap";
import { useShopCart } from "../context/ShoppingCartContext";
import storeItems from "../data/item.json";
import { formatCurrency } from "../utilities/formatCurr";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeQuantity } = useShopCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeQuantity(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
