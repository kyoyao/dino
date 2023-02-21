<template>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="google-site-verification" content="lmB_ADq3hKqL867Wk7ZlmiDJ2rUn46-Hdh77PMLSLNk" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title v-if="layoutType==='1'">代樂收 - 最貼心的代丟垃圾服務</title>
      <title v-else-if="layoutType==='2'">代樂收 - 服務區域</title>
      <title v-else-if="layoutType==='3'">代樂收 - 收費資訊</title>
      <title v-else-if="layoutType==='4'">代樂收 - 聯絡我們</title> 
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
    </head>

    <body class="layout-web-body">
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
            <div class="pt-2 collapse navlink-container" id="navbarToggleExternalContent">
                <div class=" p-4 link-container">
                    <a class="navbar-links" href="/service">服務範圍</a>
                </div>
                <div class=" p-4 link-container">
                    <a class="navbar-links" href="/charge">收費資訊</a>
                </div>
                <div class=" p-4 link-container">
                    <a class="navbar-links" href="/contact">聯絡我們</a>
                </div>
                <div class="p-4 link-container">
                    <a class="navbar-links" href="login.html">用戶登入</a>
                </div>
                <div class="p-4 link-container">
                    <a class="navbar-links" href="profile.html">個人資料(測試)</a>
                </div>
            </div>
        </div>
        <slot></slot>
    </body>

    <div class="container">
        <footer class="row border-top pt-3 mt-2" :class="{'pt-5': layoutType=='4', 'mt-5': layoutType=='4'}">
            <div class="col-4 mb-3">
                <h5>聯絡我們</h5>
                <!-- <div class="d-flex flex-column flex-md-row d-md-flex mb-2 text-muted" >
                    創生環保科技股份有限公司 
                </div> -->
                <div class="d-inline flex-column flex-md-row d-md-flex align-items-center justify-content-start">
                    <a :href="lineLink" target="_blank"><img class="icon me-2" src="@/assets/images/icon_line.png"/></a>
                    <a :href="fbLink" target="_blank"><img class="icon me-2" src="@/assets/images/icon_fb.png"/></a>
                    <!-- <span class="fs-7">加入LINE好友</span> -->
                </div>
                <!-- <ul class="nav flex-column mt-2">
                    <li class="nav-item text-muted mb-2">信箱 : cs90019424@gmail.com</li>
                    <li class="nav-item text-muted mb-2">電話 : 0917085865</li>
                    <li class="nav-item text-muted mb-2">市話 : 02-23627542</li>
                    <li class="nav-item text-muted">地址 : 台北市忠孝東路四段300號5樓</li>
                </ul> -->
            </div>       
            <div class="col-4 mb-3">
                <h5>服務</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/service" class="nav-link p-0 text-muted">服務範圍</a></li>
                </ul>
                <h5 class="mt-3">收費</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/charge" class="nav-link p-0 text-muted">收費資訊</a></li>
                </ul>
            </div>
            <div class="col-4 mb-3">
                <h5>登入</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-muted">用戶登入</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">用戶註冊</a></li>
                </ul>
            </div>
            <div class="col-12 col-lg-3 mb-3">
                <h5>注意事項</h5>
                    <p>預約代丟服務每趟需14公升以上,若不足則以14公升計算<br/><br/>
                        每週三、日為非營業時間,預約代丟與客服詢請在營業時間內安排</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
	name: 'LayoutWeb',
	props: ['layoutType'],
	data() {
		return {
			fbLink:$config.fbLink,
            lineLink:$config.lineLink,
		};
	},
	components: {
		
	},
	mounted() {	

	},
	methods: {
			
	}
}
</script>

<style>
    @import '../assets/styles/style.module.css';
    @import '../assets/styles/reset.module.css';
    @media screen and (max-width:768px) {
        .icon {
            margin: 0px 0.5rem 0.5rem 0px !important;
        }
    }
</style>

<style v-if="layoutType==='1'">
    @import '../assets/styles/footer.module.css';
</style>