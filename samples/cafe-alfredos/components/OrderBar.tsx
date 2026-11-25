import { OrderLink } from "@/components/OrderLink";

export function OrderBar() {
  return (
    <div className="order-bar">
      <OrderLink className="btn btn-accent order-bar-btn">Order online</OrderLink>
    </div>
  );
}
