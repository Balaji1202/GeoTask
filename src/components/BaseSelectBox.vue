<template>
	<div>
		<div class="select-container">
			<div class="tooltip">
				<span
				v-if="tooltip"
				class="tooltiptext">{{tooltip}}</span>
				<label
					class="select-label"
					:for="this._uid">{{this.label}}</label>
				<div class="select">
					<select
						class="options"
						@change="this.emitChange"
						:id="this._uid">
						<option
							selected
							:value="selectOptions[0]">{{selectOptions[0]}}
						</option>
						<option
							v-for="(option, index) in selectOptions.slice(1)" :key="index"
							:value="option">{{option}}
						</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			required: true
		},
		label: {
			type: String,
			required: true
		},
		tooltip: {
			required: false,
			type: String
		}
	},
	data() {
		return {
			selectOptions: []
		}
	},
	methods: {
		emitChange(event) {
			this.$emit('search-by-selected', event.target.value)
		}
	},
	watch: {
		options: {
			handler() {
				this.selectOptions = this.options ? this.options: ['None']
			},
			immediate: true
			
		}
	}
}
</script>


<style scoped>
	

	.select-label {
		font-size: 2.0rem;
		padding: 5px;
		color: var(--theme-base-text);
	}
	/* Reset Select */
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		appearance: none;
		outline: 0;
		box-shadow: none;
		border: 1px solid var(--theme-base-text);
		background-color: transparent;
		width: 10px;

	}
	/* Remove IE arrow */
	select::-ms-expand {
		display: none;
	}
	/* Custom Select */
	.select {
		position: relative;
		display: flex;
		width: 23rem;
		height: 3.5rem;
		line-height: 3;
		overflow: hidden;
		border-radius: .25rem;
	}

	select {
		flex: 1;
		padding: 0.7rem .7rem;
		color: var(--theme-base-text);
		cursor: pointer;
		font-size: 1.5rem;
	}
	/* Arrow */
	.select::after {
		content: '\25BC';
		font-size: 1.2rem;
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.25rem 1rem;
		background-color: var(--theme-base-text);
		color: var(--theme-base-body);
		cursor: pointer;
		pointer-events: none;
		-webkit-transition: .25s all ease;
		-o-transition: .25s all ease;
		transition: .25s all ease;
	}
	/* .select::after {
		background-color:var(--theme-base-body);
	} */
	/* Transition */
	.select:hover::after {
		color: var(--theme-base-text);
	}
	 .select-container{
		 padding: 5rem;
	 }
</style>