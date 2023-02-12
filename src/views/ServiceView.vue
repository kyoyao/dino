
<template>
<LayoutWeb layoutType=2>
    <!-- <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="google-site-verification" content="lmB_ADq3hKqL867Wk7ZlmiDJ2rUn46-Hdh77PMLSLNk" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>代樂收 - 服務區域</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
    </head> -->

    <body>
    <div class="navbar bg-light fixed-top navbar-box">
        <div class="container-fluid nav-container">
            <a class="navbar-brand brand-title" href="/">
                <h1 class="brand-h1 navbar-brand brand-title">代樂收</h1><span class="navbar-subtitle">dinosaur</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navlink-container" id="navbarToggleExternalContent">
            <div class=" p-4 link-container">
                <a class="navbar-links" href="#">服務範圍</a>
            </div>
            <div class=" p-4 link-container">
                <a class="navbar-links" href="contact.html">聯絡我們</a>
            </div>
            <div class="p-4 link-container">
                <a class="navbar-links" href="login.html">用戶登入</a>
            </div>
            <div class="p-4 link-container">
                <a class="navbar-links" href="profile.html">個人資料(測試)</a>
            </div>
        </div>
    </div>
    <div class="map-container">
        <div class="w-100  mt-5 mt-sm-0 d-flex flex-column align-items-center pt-4">
            <h2 class="d-flex justify-content-center sesson-title flex-wrap green-font">代樂收<p
                    class="m-0 d-inline brown-font">服務區域</p>
            </h2>
            <div class="iframe-rwd mb-5">
                <img class="service-map" src="@/assets/images/map.jpg" />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="w-100">
            <h2 class="d-flex justify-content-center sesson-title flex-wrap green-font">代樂收<p
                    class="m-0 d-inline orange-font">計費方式</p>
            </h2>
            <div class="card-container d-flex justify-content-around w-100 flex-wrap">
                <div class="text-center">
                    <p class="fs-2">代樂收以政府垃圾袋公升數作為計費單位</p>
                    <p class="orange-font fs-2 mb-5">(需使用雙北政府垃圾袋)</p>
                    <p class="fs-4">單次計費10元/1公升</p>
                    <p class="fs-3">「優惠方案」4元起/公升</p>
                    <p class="fs-3">另有房東、租賃管理專案 歡迎使用官方Line與我們聯繫唷！</p>
                </div>
            </div>
        </div>
    </div>
    <!--footer-->

    <div class="container">
        <footer class="row  py-5 my-5 border-top">
            <div class="col mb-3">
                <h5>聯絡我們</h5>
                <div class="d-flex flex-column flex-md-row d-md-flex mb-2 text-muted">
                    創生環保科技股份有限公司
                </div>
                <div
                    class="p-2 line-btn d-flex flex-column flex-md-row d-md-flex align-items-center justify-content-center">
                    <img class="me-2" src="@/assets/images/btn_base.png"/>
                    <span class="fs-7">加入LINE好友</span>
                </div>
                <div class="d-flex flex-column flex-md-row d-md-flex mt-2 ">
                    <span class="text-muted">電話 : 0917085865</span>
                </div>
            </div>

            <div class="col mb-3">
                <h5>服務</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="service.html" class="nav-link p-0 text-muted">服務範圍</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>登入</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-muted">用戶登入</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">用戶註冊</a></li>
                </ul>
            </div>
            <div class="col-12 col-lg-3 mb-3">
                <h5>注意事項</h5>
                <p>預約代丟服務每趟需14公升以上,若不足則以14公升計算<br /><br />
                    每週三、日為非營業時間,預約代丟與客服詢請在營業時間內安排</p>
            </div>
        </footer>
    </div>
</body>
</LayoutWeb>
</template>

<script>
import LayoutWeb from "@/components/LayoutWeb.vue";
export default {
	name: "Service",
	data() {
		return {
			
		};
	},
	components: {
		LayoutWeb
  },
	mounted() {	
		window.currentApp = this;
	},
	methods: {
			
	}
}
</script>

<style scoped>
    /* @import '../assets/styles/style.module.css';
    @import '../assets/styles/reset.module.css'; */
</style>