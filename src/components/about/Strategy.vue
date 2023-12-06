<template>
  <div class="strategy">
    <h2 data-aos="fade-right">HITACHI GROUP STRATEGY</h2>

    <p>
      Throughout its 100 year history, the Hitachi Group has passed on its
      Mission and its Values to generation of employees and external
      stakeholders.
    </p>

    <p>The Vision has been created based on the Mission and the Values.</p>

    <p>
      It is an expression of what the Hitachi Group aims to become in the
      future.
    </p>

    <div class="triangle">
      <div data-aos="fade-down" class="top"><span>MISSION</span></div>
      <div data-aos="zoom-in" class="middle"><span>VALUES</span></div>
      <div data-aos="fade-up" class="end"><span>VISION</span></div>

      <div class="mobile-section">
        <div class="mission">
          <i class="fa-solid fa-square"></i>
          <div>
            <p>The mission that Hitachi aspires fo fullfill in society.</p>
            <p>
              Contribute to society through the development of superior,
              original technology and products.
            </p>
          </div>
        </div>
        <div class="value">
          <i class="fa-solid fa-square"></i>
          <div>
            <p>
              The values crucial to the Hitachi Group in accomplishing its
              mission.
            </p>
            <p>
              Hitachi Founding Spirit: Harmony, Sincerity, Pioneering Spirit.
            </p>
          </div>
        </div>
        <div class="vision">
          <i class="fa-solid fa-square"></i>
          <div>
            <p>What the Hitachi Group aims to become in the future</p>
            <p>
              Hitachi delivers innovations that answer society's challenges.
              With our talented team and proven experience in global markets, we
              can inspire the world.
            </p>
          </div>
        </div>
      </div>

      <div class="mission-left" data-aos="fade-right">
        <div class="logo"></div>
        <p>The mission that Hitachi aspires fo fullfill in society.</p>
      </div>

      <div class="mission-right" data-aos="fade-left">
        Contribute to society through the development of superior, original
        technology and products.
      </div>

      <div class="value-left" data-aos="fade-right">
        <div class="logo"></div>
        <p>
          The values crucial to the Hitachi Group in accomplishing its mission.
        </p>
      </div>
      <div class="value-right" data-aos="fade-left">
        Hitachi Founding Spirit: Harmony, Sincerity, Pioneering Spirit.
      </div>

      <div class="vision-left" data-aos="fade-right">
        <div class="logo"></div>
        <p>What the Hitachi Group aims to become in the future</p>
      </div>

      <div class="vision-right" data-aos="fade-left">
        Hitachi delivers innovations that answer society's challenges. With our
        talented team and proven experience in global markets, we can inspire
        the world.
      </div>
    </div>

    <div class="hisem-mission">
      <h2>MISSION OF HISEM</h2>

      <h6>Establish reliable electric power infrastructure</h6>
      <ul>
        <li>Develop Human Resources in Myanmar</li>
        <li>Expand both domestic and export business</li>
        <li>Become Globally standardized management & Compliant Company</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.strategy {
  padding: 30px 15.5%;
}

.strategy h2 {
  font-weight: bold;
  color: rgb(27, 123, 212);
  text-align: center;
  margin: 10px auto 60px;
}

.strategy p {
  padding: 0 9%;
}

.triangle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 110px auto 30px;
  position: relative;
}

.triangle .mobile-section {
  display: none;
}

.top {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 200px solid rgb(228, 41, 41); /* Change the color as desired */
  margin-bottom: 3px;
  position: relative;
}

.top span {
  position: absolute;
  bottom: -150px;
  right: -30px;
  color: #fff;
  font-weight: bold;
}

.mission-left {
  position: absolute;
  left: 100px;
  top: 60px;
  display: flex;
}

.mission-left p {
  margin-left: -10px;
}

.mission-left .logo {
  width: 40px;
  height: 30px;
  background: rgb(228, 41, 41);
}

.mission-right {
  position: absolute;
  width: 500px;
  right: 0px;
  top: 60px;
  padding-right: 30px;
}

.middle {
  border-bottom: 100px solid rgb(228, 41, 41);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 300px;
  margin-bottom: 10px;
  position: relative;
}

.middle span {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
}

.value-left {
  position: absolute;
  left: 100px;
  top: 200px;
  display: flex;
}

.value-left p {
  margin-left: -15px;
}

.value-left .logo {
  width: 40px;
  height: 30px;
  background: rgb(228, 41, 41);
}

.value-right {
  position: absolute;
  width: 480px;
  right: 0px;
  top: 200px;
  padding-right: 30px;
}

.end {
  border-bottom: 100px solid #1859af;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 400px;
  position: relative;
}

.end span {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
}

.vision-left {
  position: absolute;
  left: 100px;
  top: 320px;
  display: flex;
}

.vision-left p {
  margin-left: -10px;
}

.vision-left .logo {
  width: 40px;
  height: 30px;
  background: #1859af;
}

.vision-right {
  position: absolute;
  width: 440px;
  right: 0px;
  top: 320px;
  padding-right: 30px;
}

.hisem-mission {
  margin: 200px auto 30px;
}

.hisem-mission h6 {
  padding: 10px 9%;
  font-weight: bold;
  font-size: 18px;
}

.hisem-mission ul {
  padding: 10px 12%;
}

.hisem-mission ul li {
  margin-bottom: 10px;
}

@media (max-width: 1500px) {
  .strategy {
    padding: 30px 13%;
  }

  .strategy p {
    padding: 0 6%;
  }

  .top {
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 130px solid rgb(228, 41, 41); /* Change the color as desired */
  }

  .top span {
    position: absolute;
    bottom: -110px;
    right: -35px;
  }

  .mission-left {
    left: 80px;
    top: 50px;
  }

  .mission-left p {
    margin-left: -10px;
  }

  .mission-left .logo {
    width: 35px;
    height: 25px;
    background: rgb(228, 41, 41);
  }

  .mission-right {
    width: 450px;
    top: 50px;
    padding-right: 30px;
  }

  .middle {
    border-bottom: 110px solid rgb(228, 41, 41);
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    width: 250px;
  }

  .middle span {
    top: 60px;
    left: 50%;
  }

  .value-left {
    position: absolute;
    top: 160px;
    left: 80px;
  }

  .value-left p {
    margin-left: -10px;
    width: 300px;
  }

  .value-left .logo {
    width: 33px;
    height: 25px;
  }

  .value-right {
    width: 400px;
    right: 0px;
    top: 160px;
    padding-right: 20px;
  }

  .end {
    border-bottom: 100px solid #1859af;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    width: 350px;
  }

  .end span {
    top: 50px;
    left: 50%;
  }

  .vision-left {
    left: 80px;
    top: 280px;
  }

  .vision-left p {
    margin-left: -10px;
    width: 300px;
  }

  .vision-left .logo {
    width: 33px;
    height: 25px;
  }

  .vision-right {
    width: 320px;
    top: 280px;
    padding-right: 0px;
  }

  .hisem-mission {
    margin: 150px auto 30px;
  }

  .hisem-mission h6 {
    padding: 10px 9%;
    font-size: 18px;
  }

  .hisem-mission ul {
    padding: 10px 12%;
  }

  .hisem-mission ul li {
    margin-bottom: 10px;
  }
}

@media (max-width: 1350px) {
  .strategy {
    padding: 30px 9%;
  }
}

@media (max-width: 1260px) {
  .strategy {
    padding: 30px 1%;
  }

  .strategy p {
    padding: 0 5%;
  }

  .top {
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 130px solid rgb(228, 41, 41); /* Change the color as desired */
  }

  .top span {
    position: absolute;
    bottom: -110px;
    right: -35px;
  }

  .mission-left {
    left: 100px;
    top: 50px;
  }

  .mission-left p {
    margin-left: -10px;
  }

  .mission-left .logo {
    width: 35px;
    height: 25px;
  }

  .mission-right {
    width: 500px;
    top: 50px;
    padding-right: 60px;
  }

  .middle {
    border-bottom: 110px solid rgb(228, 41, 41);
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    width: 250px;
  }

  .middle span {
    top: 60px;
    left: 50%;
  }

  .value-left {
    top: 160px;
    left: 100px;
  }

  .value-left p {
    margin-left: -10px;
    width: 350px;
  }

  .value-left .logo {
    width: 33px;
    height: 25px;
  }

  .value-right {
    width: 450px;
    top: 160px;
    padding-right: 60px;
  }

  .end {
    border-bottom: 100px solid #1859af;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    width: 350px;
  }

  .end span {
    top: 50px;
    left: 50%;
  }

  .vision-left {
    left: 100px;
    top: 280px;
  }

  .vision-left p {
    margin-left: -10px;
    width: 320px;
  }

  .vision-left .logo {
    width: 33px;
    height: 25px;
  }

  .vision-right {
    width: 390px;
    top: 280px;
    padding-right: 60px;
  }
}

@media (max-width: 1170px) {
  .strategy {
    padding: 30px 1%;
  }

  .strategy p {
    padding: 0 5%;
    font-size: 14px;
  }

  .top {
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 130px solid rgb(228, 41, 41); /* Change the color as desired */
  }

  .top span {
    position: absolute;
    bottom: -110px;
    right: -35px;
  }

  .mission-left {
    left: 60px;
    top: 50px;
  }

  .mission-left p {
    margin-left: -10px;
  }

  .mission-left .logo {
    width: 25px;
    height: 15px;
  }

  .mission-right {
    width: 430px;
    top: 50px;
    padding-right: 60px;
    font-size: 13px;
  }

  .middle {
    border-bottom: 110px solid rgb(228, 41, 41);
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    width: 250px;
  }

  .middle span {
    top: 60px;
    left: 50%;
  }

  .value-left {
    top: 160px;
    left: 60px;
  }

  .value-left p {
    margin-left: -10px;
    width: 350px;
  }

  .value-left .logo {
    width: 25px;
    height: 17px;
  }

  .value-right {
    width: 400px;
    top: 160px;
    padding-right: 60px;
    font-size: 14px;
  }

  .end {
    border-bottom: 100px solid #1859af;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    width: 350px;
  }

  .end span {
    top: 50px;
    left: 50%;
  }

  .vision-left {
    left: 60px;
    top: 280px;
  }

  .vision-left p {
    margin-left: -10px;
    width: 300px;
  }

  .vision-left .logo {
    width: 25px;
    height: 16px;
  }

  .vision-right {
    width: 320px;
    top: 280px;
    padding-right: 50px;
    font-size: 14px;
  }
}

@media (max-width: 999px) {
  .mission-left {
    display: none;
  }
  .mission-right {
    display: none;
  }

  .value-left {
    display: none;
  }
  .value-right {
    display: none;
  }
  .vision-left {
    display: none;
  }
  .vision-right {
    display: none;
  }

  .triangle .mobile-section {
    display: block;
    width: 600px;
    margin: 40px auto;
  }

  .triangle .mobile-section .mission,
  .mobile-section .value,
  .mobile-section .vision {
    display: flex;
  }

  .triangle .mobile-section i {
    color: red;
  }

  .triangle .mobile-section .vision i {
    color: rgb(23, 76, 175);
  }
}

@media (max-width: 650px) {
  .triangle .mobile-section {
    display: block;
    width: 600px;
    margin: 40px auto;
    padding: 10px 20px;
  }

  .triangle .mobile-section {
    display: block;
    width: auto;
    margin: 40px auto;
  }
}

@media (max-width: 400px) {
  .top {
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-bottom: 110px solid rgb(228, 41, 41); /* Change the color as desired */
  }
  .middle {
    border-bottom: 110px solid rgb(228, 41, 41);
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    width: 220px;
  }

  .end {
    border-bottom: 100px solid #1859af;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    width: 320px;
  }
}
</style>
