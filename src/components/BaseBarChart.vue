<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
		data() {
		return {
			type: 'bar',
			data: [],
			label: 'Expenditure',
			labels: []
		}
	},
	methods: {
		fetchData() {
			let _this = this;
			return new Promise(function(resolve, reject) {
				fetch('https://balaji1202.github.io/GeoTask/expenditure.json')
				.then(res => res.json())
				.then(json => {
					_this.data = json;
					resolve();
				});
			});
		},
		assignData() {
			let _this = this;
			return new Promise(function(resolve, reject) {
				_this.data = _this.data.filter((data) => data.pincode === 560040);
				_this.labels = Object.keys(_this.data[0]).filter(data => data !== 'pincode');
				resolve();
			})
		},
		drawChart() {
			this.renderChart(
				{
					labels: this.labels,
					datasets: [
						{
							backgroundColor: '#f87979',
							data: Object.values(this.data[0]).filter(data => data !== 560040),
							label: this.label
						}
					],
				},
				{ responsive: true, maintainAspectRatio: false }
			)
		}
	},
	created() {
		this.fetchData()
			.then(this.assignData)
			.then(this.drawChart);
	}
}
</script>