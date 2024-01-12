<template>
  <div class="main-container container">
    <div class="main-row row">
      <div class="main-col">
        <div class="main-wrapper main-margin">
          <div class="main-title">
            <h2 class="main-h2">
              <strong>Hitachi Soe Electric & Machinery Company Limited</strong>
            </h2>
          </div>
          <div class="main-text">
            <p style="text-align: justify">
              Hitachi Soe Electric & Machinery Co., Ltd. (HISEM) is one of the
              leading transformer manufacturers in Myanmar. HISEM has been
              formed by merging Hitachi technological innovation and 23 years of
              electrical transformer manufacturing experience of SEM since Oct
              2015. We contribute towards to Myanmar’s electricity
              infrastructure by integrating Hitachi’s transformer design and
              production technologies. &nbsp;
              <router-link to="/about-hitachi-soe">Read more </router-link>
            </p>
          </div>
          <div class="main-image">
            <img src="@/assets/images/main1.jpg" alt="Social Innovation" />
            <a
              href="https://social-innovation.hitachi/en-sg"
              target="_blank"
              class="main-image-button"
              >Find out more &gt;</a
            >
            <div class="main-image-content social">
              <h4>
                <a
                  href="https://social-innovation.hitachi/en-sg"
                  target="_blank"
                  >SOCIAL INNOVATION STORIES</a
                >
              </h4>
              <p>
                Discover how Hitachi's Social Innovation Business is
                contributing to resolving social issues in in Southeast Asia
                like Indonesia, Myanmar, Philippines, Singapore, Thailand, and
                Vietnam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-col main-col-2">
        <div class="main-wrapper main-margin">
          <div class="main-image main-image-right about-hitachi">
            <img
              class="about-img"
              src="@/assets/images/carousel2.jpg"
              alt="About Hitachi"
            />
            <a href="about-us/" class="main-image-button">Find out more &gt;</a>
            <div class="main-image-content">
              <h4><a href="/about-us/company-profile">About Hitachi Soe</a></h4>
            </div>
          </div>
          <div class="main-image main-image-right event-activity">
            <img
              class="about-img"
              src="@/assets/images/main2.jpg"
              alt="Social Innovation"
            />
            <a href="events/" class="main-image-button">Find out more &gt;</a>
            <div class="main-image-content">
              <h4>
                <a href="/news-events/events/">Events &amp; Activities</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 8px;
  margin-bottom: 0px;
}

.main-container-2 {
  display: none;
}

.main-row {
  padding-left: 0;
  padding-right: 0;
  max-width: 1275px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 10;
  width: 100%;
  margin: 0 auto;
}

.main-col {
  display: flex;
  width: 50% !important;
  margin-top: 0px;
  margin-bottom: 20px;
  position: relative;
  float: left;
}

.main-wrapper {
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 12px;
  margin-left: 12px;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  justify-content: flex-start;
}

.main-title {
  font-size: 24px;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-transform: none;
}

.main-title .main-h2 {
  margin: 0px;
  padding: 0;
  color: rgb(64, 62, 85);
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0;
  font-style: normal;
  text-align: left;
}

.main-title .main-h2 strong {
  font-weight: bolder;
  text-transform: none;
}

.main-text {
  font-size: 16px;
  line-height: 1.4;
  color: #696969;
  margin-bottom: 20px;
}

.main-text > p:last-child {
  margin-bottom: 0;
}

.main-image {
  position: relative;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
  overflow: hidden;
}

.main-image.about-hitachi {
  background: url(../assets/images/carousel2.jpg) center center / cover
    no-repeat;
}

.main-image.event-activity {
  background: url(../assets/images/main2.jpg) center center / cover no-repeat;
}

.main-image:before {
  content: "";
  width: 100%;
  display: block;
  height: 180px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.main-image img {
  border-style: none;
  vertical-align: top;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  transition: all 0.5s;
}

.main-image img:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}

.main-image-right {
  overflow: hidden !important;
}

.main-image-right:hover {
  transform: scale(1.03);
}

.main-image-button {
  position: absolute;
  top: 0;
  left: 0;
  text-align: right;
  display: block;
  width: 100%;
  background: rgba(232, 232, 232, 0.8);
  color: #f0294b;
  padding: 15px 40px;
  font-size: 12px;
  transition: opacity 500ms;
  opacity: 0;
  transition-property: color, background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
}

.main-image-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 40px;
}

.main-image-content h4 {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase !important;
  color: #fff !important;
  margin: 0 0 10px !important;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.36;
  letter-spacing: 0;
  font-style: normal;
}

.main-image-content h4 a {
  color: #fff !important;
  transition-property: color, background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  z-index: 3;
}

.main-image-content h4 a:hover {
  color: #c02 !important;
}

.main-image-content p {
  font-size: 14px;
  color: #fff !important;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 20px;
}

.main-col {
  width: 50% !important;
  margin-top: 0px;
  margin-bottom: 20px;
}

.main-col > .main-wrapper {
  padding-top: 0px !important;
  padding-right: 0px !important;
  margin-right: 12px;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  margin-left: 12px;
}

.main-image-right h4 {
  margin-bottom: 0 !important;
}

@media only screen and (max-width: 1024px) {
  .fusion-body .fusion-builder-column-24 {
    width: 50% !important;
    order: 0;
  }
  .fusion-builder-column-24 > .fusion-column-wrapper {
    margin-right: 12px;
    margin-left: 12px;
  }
}

.main-col .main-image-right:first-child {
  margin-bottom: 24px;
}

@media only screen and (max-width: 640px) {
  .fusion-body .fusion-builder-column-24 {
    width: 100% !important;
    order: 0;
  }
  .fusion-builder-column-24 > .fusion-column-wrapper {
    margin-right: 12px;
    margin-left: 12px;
  }
}

@media only screen and (max-width: 1024px) {
  .fusion-title.fusion-title-4 {
    margin-top: 0px !important;
    margin-right: 0px !important;
    margin-bottom: 20px !important;
    margin-left: 0px !important;
  }
}

@media only screen and (max-width: 640px) {
  .fusion-title.fusion-title-4 {
    margin-top: 10px !important;
    margin-right: 0px !important;
    margin-bottom: 10px !important;
    margin-left: 0px !important;
  }
}

@media (min-width: 641px) {
  .main-image-right {
    height: calc(50% - 12px);
  }
  .main-image-right img {
    display: none;
  }
}

@media (max-width: 990px) {
  .main-col {
    display: block !important;
    width: 100% !important;
  }
  .main-image {
    content: "";
    width: 100%;
    display: block;
    height: 300px !important;
    z-index: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  .about-img {
    display: none !important;
  }
}

@media (max-width: 450px) {
  .main-title .main-h2 {
    font-size: 20px;
  }
  .main-text {
    font-size: 14px;
  }

  .main-wrapper.main-margin {
    margin-left: 0;
  }
  .main-image-content.social {
    margin-top: 2px;
    padding: 25px 15px 0px;
  }
  .main-image-content h4 {
    font-size: 15px;
  }

  .main-image-content p {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .main-container.container {
    margin-top: 5px !important;
    padding-top: 10px !important;
  }
}
</style>
