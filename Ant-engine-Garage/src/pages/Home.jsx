import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#1e1e1e",
      borderRadius: "12px",
      color: "#f0f0f0",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: "0 8px 20px rgb(0 0 0 / 0.7)"
    }}>
      <h2 style={{
        color: "#ff6600",
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "25px",
        textAlign: "center",

      }}>
        ยินดีต้อนรับสู่ร้านขายชุดแต่งรถยนต์ Ant Engine Garage
      </h2>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
        เราเป็นตัวแทนจำหน่ายชุดแต่งแท้จากแบรนด์ชั้นนำ ทั้งรีแมพและจูนเนอร์คุณภาพสูง
        สินค้าของเราคือของแท้ นำเข้าจากต่างประเทศ ราคายุติธรรม พร้อมบริการติดตั้งครบวงจร
        ทีมงานมืออาชีพของเราใส่ใจในทุกรายละเอียด เพื่อให้รถของคุณดูดีและสมรรถนะเพิ่มขึ้นอย่างแท้จริง
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
        ไม่ว่าจะเป็นชุดแต่งสเกิร์ตรอบคัน สปอยเลอร์ ล้อแม็กซ์ หรือระบบอิเล็กทรอนิกส์ต่าง ๆ
        เรามีสินค้าครบครันรองรับรถทุกยี่ห้อและรุ่น
        พร้อมบริการหลังการขายและคำแนะนำโดยช่างผู้ชำนาญการ เพื่อให้คุณมั่นใจในคุณภาพและบริการ
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
        นอกจากนี้ เรายังรับจูนเครื่องยนต์ (Remap ECU) และบริการปรับแต่งสมรรถนะรถยนต์ (Tuning)
        ด้วยอุปกรณ์มาตรฐานและเทคโนโลยีล่าสุด เพื่อช่วยให้เครื่องยนต์ทำงานเต็มประสิทธิภาพ
        ประหยัดน้ำมัน และปล่อยไอเสียเป็นมิตรกับสิ่งแวดล้อม
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
        หากคุณกำลังมองหาชุดแต่งที่ไม่เหมือนใคร หรืออยากเพิ่มสมรรถนะรถยนต์ของคุณ
        ร้าน Ant Engine Garage คือคำตอบที่คุณไม่ควรพลาด
        ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและโปรโมชั่นสุดพิเศษ!
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/d5Ts18Jo2Qs"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

      <div style={{
        textAlign: "center",
        marginTop: "30px"
      }}>
        <Link to="/About" style={{ textDecoration: "none" }}>
  <button
    style={{
      backgroundColor: "#ff6600",
      color: "#fff",
      border: "none",
      padding: "12px 30px",
      borderRadius: "8px",
      fontSize: "1.2rem",
      cursor: "pointer",
      boxShadow: "0 0 0px rgb(0, 0, 0)",
      transition: "background-color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e65500")}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6600")}
  >
    ติดต่อเรา
  </button>
</Link>
      </div>
    </div>
  );
}



export default Home;
