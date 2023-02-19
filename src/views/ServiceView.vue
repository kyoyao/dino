
<template>
<LayoutWeb layoutType=2>
<body>
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
</body>
</LayoutWeb>
</template>

<script>
import LayoutWeb from "@/components/LayoutWeb.vue"
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
        // save() { 
        //     let url = '/api'
        //     axios.get(url)
        //       .then((res)=>{
        //           //console.log("test:" + res)
        //     })         
        // },
	}
}
</script>

<style scoped>
    /* @import '../assets/styles/style.module.css';
    @import '../assets/styles/reset.module.css'; */
</style>