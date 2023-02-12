<template>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="google-site-verification" content="lmB_ADq3hKqL867Wk7ZlmiDJ2rUn46-Hdh77PMLSLNk" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title v-if="layoutType==='1'">代樂收 - 最貼心的代丟垃圾服務</title>
      <title v-else-if="layoutType==='2'">代樂收 - 服務區域</title>
      <title v-else-if="layoutType==='3'">代樂收 - 聯絡我們</title> 
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
    </head>
    <div class="layout-web-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'LayoutWeb',
	props: ['layoutType'],
	data() {
		return {
			
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
</style>

<style v-if="layoutType==='1'">
    @import '../assets/styles/footer.module.css';
</style>