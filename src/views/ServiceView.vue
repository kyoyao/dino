
<template>
<LayoutWeb layoutType=2>
<body>
    <div class="map-container">
        <div class="w-100 mt-sm-0 d-flex flex-column align-items-center pt-4">
            <h2 class="d-flex justify-content-center sesson-title flex-wrap green-font">
                代樂收<p class="m-0 d-inline brown-font">服務區域</p>
            </h2>
            <!-- <div class="iframe-rwd mb-5">
                <img class="service-map" src="@/assets/images/map.jpg" />
            </div> -->

            <div class="iframe-rwd text-center">
                <iframe :src="serviceArea" width="640" height="480"></iframe>               
            </div>
            <div class="mt-3">
                <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#serviceModal">檢視服務區域概況</button>
            </div>

        </div>
    </div>
    <div class="container mt-4">
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

<!-- Modal -->
<div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">服務區域概況</h1>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉"></button> -->
        </div>
        <div class="modal-body">
            <!-- <div v-for="(obj, idx1) in dataList" :key="idx1"> -->
                <!-- <div class="mb-3">{{obj.loc}}營運概況：</div>               
                <table>
                    <thead>
                        <tr>
                            <th style="width: 6rem;">用戶區域</th>
                            <th style="width: 6rem;">用戶人數</th>
                            <th style="width: 6rem;">已服務次數</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data,idx2) in obj.data" :key="idx2">
                            <td>{{ data.name }}</td>
                            <td>{{ data.customerCnt }}</td>
                            <td>{{ data.serviceCnt }}</td>
                        </tr>
                    </tbody>
                </table> -->
                <div class="row d-flex align-items-center">
                    <div class="col-4 text-end"><b>縣市</b></div>
                    <div class="col-8">
                        <select class="form-control form-control-sm" v-model.trim="loc">
                            <option v-if="loc===''" value="">請選擇</option>
                            <option v-for="data in cityList" :value="data.value" :key="data.value">{{ data.name }}</option>
                        </select>
                    </div>
                </div>

                <div v-if="loc!==''" class="row d-flex align-items-center mt-3">
                    <div class="col-4 text-end"><b>行政區</b></div>
                    <div class="col-8">
                        <select class="form-control form-control-sm" v-model.trim="locInfo">
                            <option v-for="o in dataList[loc].data" :value="o" :key="o.name">{{ o.name }}</option>
                        </select>
                    </div>
                </div>
                <div v-else class="text-center mt-3">
                    <div>請先選擇縣市</div>
                </div>

                <div v-if="loc!=='' && locInfo" class="row d-flex align-items-center mt-3">
                    <div class="col-4 text-end"><b>用戶人數</b></div>
                    <div class="col-8">
                        {{ locInfo.customerCnt }}位
                    </div>
                </div>

                <div v-if="loc!=='' && locInfo" class="row d-flex align-items-center mt-3">
                    <div class="col-4 text-end"><b>已服務次數</b></div>
                    <div class="col-8">
                        {{ locInfo.serviceCnt }}次
                    </div>
                </div>
            <!-- </div> -->
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" @click="initData()">關閉</button>
        </div>
        </div>
    </div>
</div>



</LayoutWeb>
</template>

<script>
import LayoutWeb from "@/components/LayoutWeb.vue"
export default {
	name: "Service",
	data() {
		return {
            serviceArea:$config.serviceArea,
            loc:"",
            locInfo: undefined,
            //fakeData
            cityList:[
                {name:"台北市",value:0},
                {name:"新北市",value:1}
            ],
			dataList:[
                {loc:"台北市",data: [
                    {name:"中山",customerCnt:13,serviceCnt:40},
                    {name:"中正",customerCnt:21,serviceCnt:78},
                    {name:"信義",customerCnt:16,serviceCnt:17},
                    {name:"內湖",customerCnt:9,serviceCnt:13},
                    {name:"北投",customerCnt:27,serviceCnt:73},
                    {name:"南港",customerCnt:2,serviceCnt:8},
                    {name:"士林",customerCnt:4,serviceCnt:7},
                    {name:"大同",customerCnt:10,serviceCnt:34},
                    {name:"大安",customerCnt:22,serviceCnt:61},
                    {name:"文山",customerCnt:1,serviceCnt:2},
                    {name:"松山",customerCnt:7,serviceCnt:11},
                    {name:"萬華",customerCnt:18,serviceCnt:26}
                ]},
                {loc:"新北市", data: [
                    {name:"永和",customerCnt:26,serviceCnt:65},
                    {name:"中和",customerCnt:23,serviceCnt:52},
                    {name:"板橋",customerCnt:8,serviceCnt:21},
                    {name:"三重",customerCnt:11,serviceCnt:36},
                    {name:"蘆洲",customerCnt:8,serviceCnt:25},
                    {name:"深坑",customerCnt:1,serviceCnt:0},
                    {name:"新店",customerCnt:18,serviceCnt:43}
                ]}          
            ]
                
		};
	},
	components: {
		LayoutWeb
  },
	mounted() {	
		window.currentApp = this;
	},
    watch: {
        loc(newId, oldId) {
            if (newId!=oldId) {
                this.locInfo=undefined;
            }
        }
    },
	methods: {
        // save() { 
        //     let url = '/api'
        //     axios.get(url)
        //       .then((res)=>{
        //           //console.log("test:" + res)
        //     })         
        // },
        showModal() {
            $('#serviceModal').show();
        },
        initData() {
            this.locInfo=undefined;
            this.loc='';
        }
	}
}
</script>

<style scoped>
    /* @import '../assets/styles/style.module.css';
    @import '../assets/styles/reset.module.css'; */
</style>