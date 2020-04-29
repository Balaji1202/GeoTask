<template>
	<div>
		<BaseHeader/>
		<DemographicPage
			v-if="this.showReport"
		/>
		<FrontPage
			@generate-report="this.onGenerateReport"
			v-else
		/>
	</div>
</template>

<script>
import FrontPage from './components/FrontPage.vue';
import BaseHeader from './components/BaseHeader.vue';
import DemographicPage from './components/DemographicPage.vue';
export default {
	components: {
		FrontPage,
		DemographicPage,
		BaseHeader
	},
	data() {
		return {
			store: this.$root.store,
			incomeOnLocality: null,
			expenditureOnPincode: null,
			revisedExpenditureOnPincode: null,
			showReport: false,
		}
	},
	methods: {
		onGenerateReport() {
			this.showReport = true
		},
		fetchPlainData() {
			let locAndIncome = [];
			let locality = [];
			fetch('https://balaji1202.github.io/GeoTask/plain-data.json')
			.then(res => res.json())
			.then(res => {		
				this.store.GeoData.Locality = res.locality;
				this.store.GeoData.Pincode = res.pincode;
			});
		},
		
		fetchData() {
			this.fetchPlainData();
		}
	},
	mounted() {
		this.fetchData();
	},
	watch: {
		expenditureOnPincode: {
			handler(value) {
				for(let i = 0; i < value.length; i++) {
					
				}
				this.revisedExpenditureOnPincode
			}
		}
	}
}
</script>