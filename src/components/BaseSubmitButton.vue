<template>
	<div>
		<div class="button-container">
			<button 
			class="button"
			@click="generateReport">Generate report</button>
		</div>
		<div class="snackbar-container">
			<div ref="snackbar" id="snackbar">{{errorMsg}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		errorMsg: {
			type: String,
			required: false
		}
	},
	methods: {
		generateReport() {
			if(this.$root.store.searchBy && this.$root.store.searchValue) {
				this.$emit('submit-success');
				return;
			}
			if(this.errorMsg) {
				this.showErrorToast();
			}
			
		},
		showErrorToast() {
			let snackbar = this.$refs.snackbar
  		snackbar.className = "show";
  		setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
		}
	}
}
</script>
<style scoped>
	.button-container {
		display: flex;
		justify-content: space-between;
		flex-basis: 100%;
		align-items: center;
		flex-direction: column;
		padding-bottom: 100px;
	}
	.button {
		background: none;
		border-radius: 20px;
		border: 1px solid var(--theme-base-text);
		padding: 15px 30px;
		font-size: 1.4rem;
		color: var(--theme-base-text);
		cursor: pointer;
		outline: none;
		box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
	}
	.button:hover {
		font-size: 1.45rem;
		box-shadow: 3px 2px rgba(0, 0, 0, 0.3);
	}
</style>

<style>
	/* The snackbar - position it at the bottom and in the middle of the screen */
.snackbar-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 2rem; /* Set a default minimum width */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 10px; /* Rounded borders */
  padding: 1rem; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
	bottom: 30px; /* 30px from the bottom */
	font-size: 1.5rem;
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>