<template>
	<div class="container">
		<BaseBarChart class="child-element"/>
		<BaseBarChart class="child-element"/>
		<BaseBarChart class="child-element"/>
		<BaseBarChart class="child-element"/>
	</div>
</template>

<script>
import BaseBarChart from './BaseBarChart.vue';
export default {
	components: {
		BaseBarChart
	}
}
</script>

<style scoped>
	.container {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	.child-element {
		padding: 100px 0 30px 0;
		position: relative;
		width: 600px;
		height: 500px;
	}
	@media (max-width: 640px) {
		.child-element {
			position: relative;
			width: 500px;
			height: 500px;
		}
	}
	@media (max-width: 500px) {
		.child-element {
			position: relative;
			width: 400px;
			height: 400px;
		}
	}
	@media (max-width: 400px) {
		.child-element {
			position: relative;
			width: 300px;
			height: 400px;
		}
	}
	@media (max-width: 300px) {
		.child-element {
			position: relative;
			width: 250px;
			height: 350px;
		}
	}
</style>