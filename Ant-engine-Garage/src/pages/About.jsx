import React from "react";

function About() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", lineHeight: "1.6", color: "#eee" }}>
      <h2 style={{ color: "#ff6600", marginBottom: "20px", textAlign: "center" }}>
        ความเป็นมาของร้าน Ant-engine-garage
      </h2>



      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#ffa040", marginBottom: "10px" }}>ประวัติร้าน</h3>
        <p>
          ร้าน Ant-engine-garage เปิดกิจการมานานกว่า 3 ปี มีอะไหล่ครบทุกยี่ห้อ
          เจ้าของร้านชื่อ สมพร ไทยประดิษฐ์
          มีช่างมือฉมัง เช่น จันทร์บำเพ็ญ, อ๋อยประดิษฐ์พร
          และช่างฝึกหัดอย่าง น้องแป๊ะมินิคูเป้
        </p>
        <p>
          ความเป็นมาของร้านเริ่มจากเด็กชายพรสมัยเด็กที่ชอบดูรถเป็นอย่างมาก โดยเฉพาะ BMW-320i
          และได้ศึกษาวิศวกรรมยานยนต์จนจบการศึกษาจากมหาวิทยาลัยธรรมศาสตร์
          หลังจากนั้นจึงเปิดร้านซ่อมรถและจำหน่ายอะไหล่ จนประสบความสำเร็จมีช่างฝีมือมาร่วมงานมากมาย
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#ffa040", marginBottom: "10px" }}>ทีมช่างของเรา</h3>
        <div style={{ backgroundColor: "#2a2a2a", borderRadius: "8px", padding: "15px" }}>
          <div style={{ marginBottom: "16px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>
            <strong style={{ fontSize: "1.1rem", color: "#ffb366" }}>สมพร ไทยประดิษฐ์</strong> - เจ้าของร้านและช่างซ่อมหลัก<br />
            <em>ผู้ก่อตั้งร้านและมีประสบการณ์ซ่อมรถยนต์มากกว่า 10 ปี</em><br />
            <p style={{ marginTop: "6px" }}>
              📞 <a href="tel:0826683488" style={{ color: "#ff6600" }}>082-668-3488</a><br />
              📧 <a href="https://www.instagram.com/_synystxrr" style={{ color: "#ff6600" }}>tanatcha.namc@sbac.ac.th</a><br />
              🔗 <a href="https://www.instagram.com/_synystxrr" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6600" }}>
                IG:_synystxrr
              </a>
            </p>
          </div>

          <div style={{ marginBottom: "16px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>
            <strong style={{ fontSize: "1.1rem", color: "#ffb366" }}>จันทร์บำเพ็ญ</strong> - ช่างมือฉมัง<br />
            <em>เชี่ยวชาญงานซ่อมเครื่องยนต์และระบบไฟฟ้า</em><br />
            <p style={{ marginTop: "6px" }}>
              📞 <a href="tel:0643611679" style={{ color: "#ff6600" }}>064-361-1679</a><br />
              📧 <a href="https://www.instagram.com/kunakorn_sak/" style={{ color: "#ff6600" }}>kunakorn_siri2sbac.ac.th</a><br />
              🔗 <a href="https://www.instagram.com/kunakorn_sak/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6600" }}>
                IG:kunakorn_sak
              </a>
            </p>
          </div>

          <div style={{ marginBottom: "16px", borderBottom: "1px solid #444", paddingBottom: "10px" }}>
            <strong style={{ fontSize: "1.1rem", color: "#ffb366" }}>อ๋อยประดิษฐ์พร</strong> - ช่างมือฉมัง<br />
            <em>ชำนาญการจูนรีแมพและการเซ็ตเทอร์โบ</em><br />
            <p style={{ marginTop: "6px" }}>
              📞 <a href="tel:0631036144" style={{ color: "#ff6600" }}>063-103-6144</a><br />
              📧 <a href="https://www.instagram.com/ntk._168/" style={{ color: "#ff6600" }}>Natthakit.jams@sbac.ac.th</a><br />
              🔗 <a href="https://www.instagram.com/ntk._168/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6600" }}>
                IG:ntk._168
              </a>
            </p>
          </div>

          <div>
            <strong style={{ fontSize: "1.1rem", color: "#ffb366" }}>น้องแป๊ะมินิคูเป้</strong> - ช่างฝึกหัด<br />
            <em>กำลังฝึกฝนทักษะและเรียนรู้จากทีมช่างมืออาชีพ</em><br />
            <p style={{ marginTop: "6px" }}>
              📞 <a href="tel:0968871910" style={{ color: "#ff6600" }}>096-887-1910</a><br />
              📧 <a href="https://www.instagram.com/phuuxlilo/" style={{ color: "#ff6600" }}>pipitphu.wong@sbac.ac.th</a><br />
              🔗 <a href="https://www.instagram.com/phuuxlilo/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6600" }}>
                IG:phuuxlilo
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* ข้อมูลติดต่อร้าน */}
      <section style={{ marginBottom: "30px", backgroundColor: "#2a2a2a", padding: "15px", borderRadius: "8px" }}>
        <h3 style={{ color: "#ffa040", marginBottom: "10px" }}>ติดต่อร้าน Ant-engine-garage</h3>
        <p>
          📍 ที่อยู่: 6/599 ซ.พหลโยธิน 52 ถ.พหลโยธิน
          เขตสายไหม
          กรุงเทพฯ 10220<br />
          📞 โทร: <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1" style={{ color: "#ff6600" }}>086-666-8877</a><br />
          📧 อีเมล: <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1" style={{ color: "#ff6600" }}>antenginegarage@gmail.com</a><br />
          🔗 Facebook: <a href="https://www.instagram.com/itdekhere2_5/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6600" }}>
            Ant_Engine_Garage Group
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
