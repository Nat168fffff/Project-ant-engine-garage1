import React from "react";

export default function Cart({
  cartItems,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ฟังก์ชันสั่งซื้อ (แสดง alert แจ้งเตือน)
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("ตะกร้าว่าง ไม่มีสินค้าให้สั่งซื้อ");
      return;
    }
    alert("สั่งซื้อเรียบร้อย ขอบคุณครับ!");
  };

  return (
    <div className="cart-container">
      <h2>ตะกร้าสินค้า ({cartItems.reduce((s, i) => s + i.quantity, 0)})</h2>

      {cartItems.length === 0 ? (
        <p>ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>สินค้า</th>
                <th>จำนวน</th>
                <th>ราคาต่อหน่วย</th>
                <th>ราคารวม</th>
                <th>จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => onDecreaseQuantity(item.id)}
                      >
                        –
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    {item.price.toLocaleString("th-TH", {
                      style: "currency",
                      currency: "THB",
                    })}
                  </td>
                  <td>
                    {(item.price * item.quantity).toLocaleString("th-TH", {
                      style: "currency",
                      currency: "THB",
                    })}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ปุ่มสั่งซื้อ */}
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              สั่งซื้อ
            </button>
          </div>
        </>
      )}

      <h3>
        รวมทั้งหมด:{" "}
        {total.toLocaleString("th-TH", {
          style: "currency",
          currency: "THB",
        })}
      </h3>
    </div>
  );
}
