<template>
	<div class="container">
		<div class="select-container">
			<BaseSelectBox
				@search-by-selected="this.setSearchBy"
				label="Search by"
				:key="this.searchByOptions[0]"
				:options="this.searchByOptions"
				tooltip="Choose a parameter of demography"
			/>
			<BaseSelectBox
				@search-by-selected="this.setSearchValue"
				label="Search value"
				:key="this.searchByValueOptions?this.searchByValueOptions[0]:1"
				:options="this.searchByValueOptions"
				tooltip="Choose a value"
			/>
		</div>
		<BaseSubmitButton
			@submit-success="generateReport"
			errorMsg="Please select a search by parameter and a value"
		/>
	</div>
</template>

<script>
import BaseSelectBox from './BaseSelectBox.vue';
import BaseSubmitButton from './BaseSubmitButton.vue';
export default {
	components: {
		BaseSelectBox,
		BaseSubmitButton
	},
	data() {
		return {
			store: this.$root.store,
			searchByOptions: ['None', 'Locality', 'Pincode']
		}
	},
	methods: {
		setSearchBy(value) {
			this.store.searchBy = value
		},
		setSearchValue(value) {
			this.store.searchValue = value
		},
		generateReport() {
			this.$emit('generate-report');
		}
	},
	computed: {
		searchByValueOptions() {
			this.store.searchValue = this.store.GeoData[this.store.searchBy]?this.store.GeoData[this.store.searchBy][0]: '';
			return this.store.GeoData[this.store.searchBy];
		}
	}
}
</script>

<style scoped>
	.container {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
	}
	.select-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 100px;
    padding: 30px;
	}
	@media (max-width: 900px) {
		.select-container {
			margin: 80px;
    	padding: 30px;
		}
	}
</style>