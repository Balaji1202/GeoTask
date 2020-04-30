<template>
	<div class="header">
		<div class="title">
			GeoTask
		</div>
		<div class="subtitle title">
			Demographic Report
		</div>
			<div class="theme-switcher">
				<div class="tooltip">
					<span class="tooltiptext">Switch to {{this.otherTheme}} theme</span>
					<img
						v-show="darkTheme"
						@click="switchTheme"
						class="theme-switcher-img"
						src="./../../assets/sun.svg"
						alt="theme-switcher">
					<img
						v-show="!darkTheme"
						@click="switchTheme"
						class="theme-switcher-img"
						src="./../../assets/moon.svg"
						alt="theme-switcher">
				</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			darkTheme: true,
			theme: 'dark',
			otherTheme: 'light'
		}
	},
	methods: {
		switchBodyTheme(root) {
			let display = `--${this.theme}-theme-body`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-body', theme);
		},
		switchTextTheme(root) {
			let display = `--${this.theme}-theme-text`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-text', theme);
		},
		switchImageTheme(root) {
			let display = `--${this.theme}-image-url`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-image-url', theme);
			let opacityColor = this.theme === 'dark'? 0 : 255;
			root.style.setProperty('--opacity-color', opacityColor);
			let opacity = 0.5
		},
		switchTheme() {
			this.darkTheme = !this.darkTheme;
			let root = document.documentElement;
			let tempTheme = this.theme;
			this.theme = this.otherTheme
			this.otherTheme = tempTheme
			this.switchTextTheme(root);
			this.switchBodyTheme(root);
			this.switchImageTheme(root);
		}
	},
	created() {
		let hour = new Date().getHours();
		if(hour <= 18  && hour >= 7) {
			this.switchTheme();
		}
	}
}
</script>

<style scoped>
	.theme-switcher-img {
		width: 3.4rem;
		height: 3.4rem;
		animation: rotate-switcher 3s linear infinite;
		animation-play-state: paused;
	}
	.theme-switcher-img:hover {
		animation-play-state: running;
	}
	@keyframes rotate-switcher {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	.title {
		text-align: center;
	}
	.subtitle {
		font-size: 1.7rem;
	}
	.header {
		position: fixed;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 10vh;
		background: var(--theme-base-body);
		color: var(--theme-base-text);
		font-size: 2.5rem;
		z-index: 100;
		border-bottom: 1px solid var(--theme-base-text);
		opacity: 0.9;
	}
	.theme-switcher {
		padding: 10px;
		cursor: pointer;
	}
</style>

<style>

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: var(--theme-base-text);
  color: var(--theme-base-body);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 105%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
	transition: opacity 0.3s;
	font-size: 1.2rem;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent var(--theme-base-text) transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>