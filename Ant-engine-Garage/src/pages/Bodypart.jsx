import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Greddy Turbo Kit S2000",
    price: 166930,
    image:
      "https://www.greddy.com/cdn/shop/files/11550051_WK_01.jpg?v=1712125794",
    link: "/product/1",
  },
  {
    id: 2,
    name: "Intercooler Full Kit Honda CIVIC Type R FK8 HKS",
    price: 459000,
    image:
      "https://www.racedivision.com.au/cdn/shop/products/5A393CEF-1DB8-4BA8-9921-CAF34BD70188.jpg?v=1571710188",
    link: "/product/2",
  },
  {
    id: 3,
    name: "Nitrous oxide",
    price: 14000,
    image: "https://www.labgaz.com/images/content/original-1450145496239.jpg",
    link: "/product/3",
  },
  {
    id: 4,
    name: "GReddy Intake Plenum Manifold NISSAN SKYLINE GTR RB26DETT Single Throttle",
    price: 95000,
    image:
      "https://cartoys.com.au/wp-content/uploads/product_images/13522306.jpg",
    link: "/product/4",
  },
  {
    id: 5,
    name: "FLEX Turbo F55",
    price: 25000,
    image:
      "https://hdautomotive.com.au/wp-content/uploads/2022/07/Flex_F55Kit_2.webp",
    link: "/product/5",
  },
  {
    id: 6,
    name: "JQ Werks Madtrace Racing Steering Wheel System",
    price: 75500,
    image:
      "https://jhpusa.com/cdn/shop/files/JQ-Werks-Madtrace-Racing-Steering-Wheel-System-Honda-Civic-Type-R-17a.jpg?v=1717197408&width=990",
    link: "/product/6",
  },
  {
    id: 7,
    name: "พวงมาลัย SPOON GEN 3 (rare)",
    price: 11150,
    image:
      "https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/117343363_310672876954713_381013177655887885_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BKM9toxxr1wQ7kNvwEh4VeP&_nc_oc=AdlkzHWGyZLcrYdPG-iqLSPe0U78r-AXP0oQLVhUpz7hSivUudISysuGcyl95RptFqc&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=7wEaiXeinCdmlPn6EHBIdQ&oh=00_AfRhwr81JOu86zO0r4UwJ2caxtFbY4DfZnxojRfsk_-H7A&oe=689E9929",
    link: "/product/7",
  },
  {
    id: 8,
    name: "ท่อ SPOON SPORT N1 MUFFLER KIT - HONDA CIVIC TYPE R FL5",
    price: 91000,
    image:
      "https://shop-image.readyplanet.com/4iZS4qqj4Jzmo6Pv_ifhkOnhDMc=/500x500/c686615353f44feb9f8fb17a087a8b4f",
    link: "/product/8",
  },
  {
    id: 9,
    name: "RB26DETT engine",
    price: 1190000,
    image:
      "https://theskylineshed.com/cdn/shop/files/353083132_6796001860434027_8043091738682920196_n_700x700.jpg?v=1686892551",
    link: "/product/9",
  },
  {
    id: 10,
    name: "LB-Silhouette WORKS GT NISSAN 35GT-RR - Liberty Walk (BODY-PART)",
    price: 1900000,
    image:
      "https://libertywalk.co.jp/wp-content/uploads/2022/11/LB-Silhouette-WORKS-GT-NISSAN-35GT-RR09-1.jpeg",
    link: "/product/10",
  },
  {
    id: 11,
    name: "ฝากระโปรง HONDA FD",
    price: 27000,
    image:
      "https://yangtanok.com/Photo/ProductPhoto/191530826837791997_2032212880156359_6595227229980983296_n-768x512.jpg",
    link: "/product/11",
  },
  {
    id: 12,
    name: "supra trd3000gt พาร์ทแท้",
    price: 4999000,
    image: "https://ig-model.online/cdn/shop/files/3598-1.jpg?v=1747019029",
    link: "/product/12",
  },
  {
    id: 13,
    name: "LB-WORKS Ferrari F40 - Liberty Walk (BODY-PART)",
    price: 40000000,
    image:
      "https://libertywalk.co.jp/wp-content/uploads/2023/02/LB-WORKS-FERRARI-F4000005.jpg",
    link: "/product/13",
  },
  {
    id: 14,
    name: "c west kit R34",
    price: 57900,
    image:
      "https://www.kentmodels.co.uk/wp-content/uploads/2018/11/Gnkei1CagAAtW1O-scaled.jpg",
    link: "/product/14",
  },
  {
    id: 15,
    name: "Nissan GT-R(R34) Bodypart Nismo",
    price: 8130000,
    image:
      "https://cdn.bhdw.net/im/nissan-skyline-gt-r-r34-nismo-wallpaper-81902_w635.webp",
    link: "/product/15",
  },
  {
    id: 16,
    name: "LB-ER34 Super Silhouette SKYLINE - Liberty Walk (BODY-PART)",
    price: 10500000,
    image:
      "https://libertywalk.co.jp/wp-content/uploads/2023/02/LB-ER34-Super-Silhouette-SKYLINE00002.jpg",
    link: "/product/16",
  },
  {
    id: 17,
    name: "LB☆Super Silhouette WORKS S15 SILVIA (BODY-PART) ",
    price: 2300000,
    image:
      "https://libertywalk.shop/wp-content/uploads/2021/06/o1080078614936758078.jpg",
    link: "/product/17",
  },
  {
    id: 18,
    name: "Mazda Rx-7 veilside fortune (BODY-PART)",
    price: 7150000,
    image: "https://www.veilsidejpn.com/free/images/VF-RX7-FF3-032.jpg",
    link: "/product/18",
  },
  {
    id: 19,
    name: "LB-WORKS Mclaren 720S - Liberty Walk (BODY-PART)",
    price: 12000000,
    image: "https://libertywalk.co.jp/wp-content/uploads/2023/10/720S_059.jpg",
    link: "/product/19",
  },
  {
    id: 20,
    name: "LB☆Silhouette WORKS Mazda RX-7 FD3S (BODY-KIT)",
    price: 500000,
    image:
      "https://libertywalk.shop/wp-content/uploads/2023/01/LB-Super-Silhouette-MAZDA-FD3S-RX-700014.jpg",
    link: "/product/20",
  },
  {
    id: 21,
    name: "BODY for HONDA FD 1.8/2.0 (BODY)",
    price: 700000,
    image:
      "https://www.hiroboy.com/userfiles/images/sys/products/124_Honda_Civic_FD2_Type_R_Spoon_Ver_PreOrder_40974.jpeg",
    link: "/product/21",
  },
  {
    id: 22,
    name: "เหล็กค้ำท้ายกระบะ isuzu Dmax",
    price: 990,
    image:
      "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.6435-9/99013175_2584543288454768_881176638866325504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mZLs32Z-dXcQ7kNvwFyMIW-&_nc_oc=AdkxbS_l6PHvLoeDQcJGPShWlCb5Ge2v_LyqdH8tEBbZSMUvjJFP4LgUoXdpYZggCgM&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_gid=KiagpfKVjDgJHez32NqSfg&oh=00_AfSDusy4672I6aTd4a9Rpm8Hi9E2Gfqo9OttX1kcOlubNw&oe=689E7E22",
    link: "/product/22",
  },
  {
    id: 23,
    name: "เบาะ Mugen Full Bucket Seat MX-A MX-B สีดำ Japan",
    price: 55000,
    image:
      "https://laz-img-sg.alicdn.com/p/786ad054ebfd1ecc86afab3a4743193f.jpg",
    link: "/product/23",
  },
  {
    id: 24,
    name: "เบาะ Recaro CS Cross Sportster GK100H ของแท้ หุ้มด้วยผ้า Kamui ผ้ากลาง Glass Mesh",
    price: 156000,
    image:
      "https://th-live-02.slatic.net/p/81a0be89cac5ea5a931c773994f8e056.jpg",
    link: "/product/24",
  },
  {
    id: 25,
    name: "Lamborghini Urus By NOVITEC (BODY-PART)",
    price: 600000,
    image: "https://luxurypulse.com/img/pictures/62069d13c4f4et(19).jpeg",
    link: "/product/25",
  },
  {
    id: 26,
    name: "เบาะแต่ง thailand racing 2.0",
    price: 50,
    image:
      "https://lh3.googleusercontent.com/proxy/GluY2HrlizT4E0sQCrQNbRAhfCk62J8kiBp5YJTYAkJMZRj32y-qX5O8UE3YyPm96ngZVZjM9yZqNjsQljj-WnZiGAN5-aEaEe3DyNu9XhPH",
    link: "/product/26",
  },
  {
    id: 27,
    name: "เกียร์ Sequential",
    price: 500000,
    image:
      "https://lh3.googleusercontent.com/proxy/u60xbmJ4jXoLJLXsnKID30fm23Z4g4xY6aEt3ZGEU-5f1owL6MvXhR0CLG5g8lImei4kR16XrrWjl_HmCrvT8sHQlWLc9JHW7Vqn8VAM2ItG6pWTI-AnwyFDhI4bo6jr3h26Tlih2YTWHAK4lwgj42v0Gpg_DMboFoYT2PfrWTMIAA",
    link: "/product/27",
  },
  {
    id: 28,
    name: "Body Part EVO 1,2,3 for Ecar GLXi",
    price: 9900,
    image:
      "https://cdn.mendetails.com/wp-content/uploads/2023/07/16090028/03-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4-mitsubishi-lancer-evolution-jul23.webp",
    link: "/product/28",
  },
];

export default function Bodypart({ addToCart }) {
  return (
    <div>
      <h2>ชุดแต่งรถยนต์</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={product.link}>
              <img src={product.image} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}
            </p>
            <button onClick={() => addToCart(product)}>สั่งซื้อ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
