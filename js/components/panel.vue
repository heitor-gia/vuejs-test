<style>
	.content{
		width: 80%;
		height: 80%;
		background: #F00;
	}
</style>



<template>
	<div class="ui four columns grid">
		<card v-for="photo in photos" :item="photo">
		</card>
	</div>
</template>



<script>
	Card = require('./card.vue');

	module.exports = {
		components:{
			card:Card
		},
		data:function() {
			return {
				msg:"ola",
				photos : []
			}	
		} ,
		created: function(){
        this.$http.get("http://jsonplaceholder.typicode.com/photos?albumId=20")
        .then(function(resp){
            this.photos = resp.data;
        });
    }
	}

</script>