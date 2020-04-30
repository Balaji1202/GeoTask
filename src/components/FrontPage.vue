<template>
	<div class="container">
		<div class="info-container">Know your demography</div>
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
			this.changeOpacity();
		},
		changeOpacity() {
			let root = document.documentElement;
			let opacity = 0.5
			root.style.setProperty('--opacity', opacity);
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
		overflow: auto;
	}
	.info-container {
		margin: 12rem 0 5rem 0;
		color: var(--theme-base-text);
		font-size: 2.2rem;
		text-align: center;
	}
	.select-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		padding-bottom: 8rem;
	}
	@media (max-width: 800px) {
		.select-container {
			margin: 5rem;
    	padding: 3rem;
		}
	}
</style>