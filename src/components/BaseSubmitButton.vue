<template>
	<div>
		<div class="button-container">
			<button 
			class="button"
			@click="generateReport">Generate report</button>
		</div>
		<div ref="snackbar" id="snackbar">{{errorMsg}}</div>
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
	}
	.button {
		background: none;
		border-radius: 20px;
		border: 1px solid var(--theme-base-text);
		padding: 15px 30px;
		font-size: 16px;
		color: var(--theme-base-text);
		cursor: pointer;
		outline: none;
		box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
	}
	.button:hover {
		font-size: 17px;
		box-shadow: 3px 2px rgba(0, 0, 0, 0.3);
	}
</style>

<style>
	/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -165px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 10px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
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