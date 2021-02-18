const OrderPage = {
    orderpage_items:[
  {
    picture:
      "https://assets.myntassets.com/f_webp,w_111,h_148,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/12396002/2020/9/2/e28df103-c57c-4f6e-b37a-59d422d891751599054145306Libas1.jpg",
    brand: "Libas",
    label: "Printed Kurta Set",
    price:"Rs 1760",
    size: ["Size:S", "Size:M", "Size:L", "Size:XL"],
    qty: [
      "Qty:1",
      "Qty:2",
      "Qty:3",
      "Qty:4",
      "Qty:5",
      "Qty:6",
      "Qty:7",
      "Qty:8",
      "Qty:9",
      "Qty:10",
    ]
  },
  {
    picture:
      "https://assets.myntassets.com/f_webp,w_111,h_148,q_95,c_limit,fl_progressive/h_148,q_95,w_111/v1/assets/images/12396002/2020/9/2/e28df103-c57c-4f6e-b37a-59d422d891751599054145306Libas1.jpg",
    brand: "Anouk",
    label: "Printed Kurta Set",
    price:"Rs 500",
    size: ["Size:S", "Size:M", "Size:L", "Size:XL"],
    qty: [
      "Qty:1",
      "Qty:2",
      "Qty:3",
      "Qty:4",
      "Qty:5",
      "Qty:6",
      "Qty:7",
      "Qty:8",
      "Qty:9",
      "Qty:10",
    ]
  }
],
orderpage_prices:{
    totalMrp: "Rs 2260",
    discountonmrp: "Rs 100",
    Convenience_fees: "Free",
    totalamount: "Rs 2160"
}
}

export default function getOrderPage() {
  return OrderPage;
}
