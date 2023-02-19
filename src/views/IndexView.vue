<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<LayoutWeb layoutType=1>

<body>
    <div class="homepage-container">
        <div class="row p-4 mx-auto h-100">
            <div class="left-content col">
                <h2 class="fw-bold brown-font mb-5 main-title">代丟垃圾服務</h2>
                <h3 class="brown-font">家裡垃圾沒時間處理嗎?</h3>
                <h3 class="brown-font">垃圾車的時間趕不上?</h3>
                <h3 class="brown-font">丟垃圾不方便很困擾?</h3>
            </div>
            <div class="right-content col d-md-flex d-none ">
                <img src="@/assets/images/dinosaur.png" />
            </div>          
        </div>
        <div class="dropdown-icon-box">
            <a href="#select-me">
                <span class="material-icons dropdown-icon blink_icon">
                    keyboard_double_arrow_down
                </span>
            </a>           
        </div>
        <div class="bubble1 bubble"></div>
        <div class="bubble2 bubble"></div>
        <div class="bubble3 bubble"></div>
        <div class="bubble4 bubble"></div>
        <div class="bubble5 bubble"></div>
    </div>

    <!--選擇代樂收-->
    <div id="select-me" class="sesson-container p-4">
        <div class="w-100  mt-5 mt-sm-0">
            <h2 class="d-flex justify-content-center sesson-title flex-wrap">選擇<p class="m-0 d-inline sesson-title-logo">代樂收</p></h2>    
            <div class="card-container d-flex justify-content-around w-100 flex-wrap ">
                <div class="sesson-card d-flex  fs-5 fw-bold flex-column p-4 justify-content-around">
                        <span class="material-icons sesson-icons">
                            schedule
                        </span>
                    
                        <span class="d-flex justify-content-center align-items-center"><span class="material-icons orange-font me-2">done</span>彈性預約</span>
                </div>
                <div class="sesson-card d-flex  fs-5 fw-bold flex-column p-4 justify-content-around">
                        <span class="material-icons sesson-icons">
                            support_agent
                        </span>
                    <span class="d-flex justify-content-center align-items-center"><span class="material-icons orange-font me-2">done</span>專人服務</span>
                </div>
                <div class="sesson-card d-flex  fs-5 fw-bold flex-column p-4 justify-content-around">
                    <span class="material-icons sesson-icons">
                        more_time
                    </span>
                        
                    <span class="d-flex justify-content-center align-items-center"><span class="material-icons orange-font me-2">done</span>效率執行</span>
                </div>
                <div class="sesson-card d-flex  fs-5 fw-bold flex-column p-4 justify-content-around">
                    <span class="material-icons sesson-icons">
                        savings
                    </span>
                    <span class="d-flex justify-content-center align-items-center"><span class="material-icons orange-font me-2">done</span>價格實惠</span>
                </div>
            </div> 
        </div>   
    </div>

    <!-- 服務流程 -->
    <div class="process-container">
        <div class="process-chart-container">
            <h2 class="pb-3 pt-2 border-bottom text-center sesson-title">服務流程</h2>
            <!--first section-->
            <div class="row align-items-center how-it-works d-flex">
                <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div class="font-weight-bold orange-font timeline-number">01</div>
                </div>
                <div class="col-8 col-md-6 process-content-container">
                    <h5 class="process-title">預約</h5>
                    <p class="process-content">至少提前一天以上官方Line預約</p>
                </div>
            </div>
            <!--path between 1-2-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner top-right"></div>
                </div>
                <div class="col-8 font">
                    <hr />
                </div>
                <div class="col-2">
                    <div class="corner left-bottom"></div>
                </div>
            </div>
            <!--second section-->
            <div class="row align-items-center justify-content-end how-it-works d-flex">
                <div class="col-8 col-md-6 d-flex flex-column align-items-end">
                    <h5 class="process-title">貼貼紙</h5>
                    <p class="process-content">將代丟的垃圾袋<br />貼上代樂收貼紙</p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="font-weight-bold orange-font timeline-number">02</div>
                </div>
            </div>
            <!--path between 2-3-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner right-bottom"></div>
                </div>
                <div class="col-8">
                    <hr />
                </div>
                <div class="col-2">
                    <div class="corner top-left"></div>
                </div>
            </div>
            <!--third section-->
            <div class="row align-items-center how-it-works d-flex">
                <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div class="font-weight-bold orange-font timeline-number">03</div>
                </div>
                <div class="col-8 col-md-6">
                    <h5 class="process-title">放垃圾</h5>
                    <p class="process-content">依預約時間放置指定位置如不指定時間則服務人員於8:00~20:00依收取路線過去收取 </p>
                </div>
            </div>
            <!--path between 3-4-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                    <hr />
                </div>
                <div class="col-2">
                    <div class="corner left-bottom"></div>
                </div>
            </div>
            <!--fourth section-->
            <div class="row align-items-center justify-content-end how-it-works d-flex">
                <div class="col-8 col-md-6 d-flex flex-column align-items-end">
                    <h5 class="process-title">拍照</h5>
                    <p class="process-content">拍照給官方Line<br />並告知垃圾量以便人員核對代丟垃圾數量</p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div class="font-weight-bold orange-font timeline-number">04</div>
                </div>
            </div>
            <!--path between 4-5-->
            <div class="row timeline">
                <div class="col-2">
                    <div class="corner right-bottom"></div>
                </div>
                <div class="col-8">
                    <hr />
                </div>
                <div class="col-2">
                    <div class="corner top-left"></div>
                </div>
            </div>
            <!--fifth section-->
            <div class="row align-items-center how-it-works d-flex">
                <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div class="font-weight-bold orange-font timeline-number">05</div>
                </div>
                <div class="col-8 col-md-6">
                    <h5 class="process-title">完成</h5>
                    <p class="process-content">人員收取完畢後<br />官方客服會以Line通知用戶完成服務</p>
                </div>
            </div>
        </div>
    </div>
</body>
</LayoutWeb>
</template>


<script>
import LayoutWeb from "@/components/LayoutWeb.vue";
export default {
	name: "Index",
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
<!-- <style scoped>
    @import '@/assets/styles/style.module.css';
    /* @import '@/assets/styles/reset.module.css'; */
    @import '@/assets/styles/footer.module.css';
</style> -->

