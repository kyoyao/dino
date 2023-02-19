
<template>
<LayoutWeb layoutType=3>
<body>
    <div class="charge-rwd pt-5">
        <img class="charge-img" src="@/assets/images/charge_info.png" />
    </div>
</body>
</LayoutWeb>
</template>

<script>
import LayoutWeb from "@/components/LayoutWeb.vue";
export default {
  name: "Charge",
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
    .charge-rwd {
        position: relative; 
        height: 60vh;
        margin: 3rem;
    /* width: 50%; */
    /* overflow: hidden;*/
    }

    @media screen and (max-width:768px) {
        .charge-rwd {
            margin: 0px !important;
            height: auto;
        }
        .charge-img {
            width: 100%;
            height: 100%;
            padding-top: 1rem;
        }
        
    }
    </style>