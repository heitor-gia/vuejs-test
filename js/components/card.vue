<style>
</style>

<template>
	<div class="ui card">
		<div class="image">
			<img :src="item.url">
		</div>
		<div class="content">
			<p>{{item.title}}</p>
		</div>
	</div>
</template>


<script>
	module.exports = {
		props : ["item"]
	} 
</script>