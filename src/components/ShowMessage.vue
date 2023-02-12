<template>
<div>
	<BootstrapModalAlert v-for="(alert, index) in alerts" :key="index" :bootstrap-color="alert.bootstrapColor" :title="alert.title" :message="alert.message" :button-label="alert.buttonLabel" :callback="alert.callback" @close="removeAlert(index)" />
</div>
</template>

<script>
import BootstrapModalAlert from '@/components/BootstrapModalAlert.vue';

export default {
	components: {
		BootstrapModalAlert
	},
	data() {
		return {
			alerts: this.alertQueue
		};
	},
	props: ["alertQueue"],
	methods: {
		removeAlert: function(index) {
			this.alerts.splice(index, 1);
		}
	}
}
</script>