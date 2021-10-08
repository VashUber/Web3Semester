<template>
	<div>
		<h1>
			Welcome here
		</h1>
		<a-row justify="space-around">
			<a-col>
				<a-carousel autoplay>
					<div v-for="item in getNews">
						<div class="item">
							<img :src="item.imgUrl" alt="">
						</div>
					</div>
				</a-carousel>
			</a-col>
		</a-row>
	</div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
	name: 'Home',
	computed: {
		...mapGetters(['getNews'])
	}
}
</script>

<style scoped lang="scss">
.item {
	display: flex;
	justify-content: center;

	img {
		width: 960px;
		height: 500px;
	}
}
</style>