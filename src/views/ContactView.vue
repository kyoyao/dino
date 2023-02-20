
<template>
<LayoutWeb layoutType=4>
    
</LayoutWeb>
</template>

<script>
import LayoutWeb from "@/components/LayoutWeb.vue";
export default {
    name: "Contact",
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
      showModal () {
        $('#serviceModal').show();
      }
    }
}
</script>

<style scoped>

</style>