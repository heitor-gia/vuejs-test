<style type="text/css">
	.full-screen{
		width: 100vw;
		height: 100vh;
		padding: auto;
	}
	.content: {
		width: 100%;
		height: 100%;
		background: blue;
	}
</style>


<template>
	<div class="full-screen container">
		<panel>	
		</panel>
	</div>
</template>


<script type="text/javascript">
	var Panel = require('./panel.vue') 

	module.exports = {
		components:{
			panel:Panel
		},
		data: function() {
			return {
				msg:"relou mai frendi!"
			}
		}
	}
</script>