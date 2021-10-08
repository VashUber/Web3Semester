<template>
	<div>
		<a-row :gutter="[16, 16]">
			<div v-for="item in getNews">
				<a-col :span="8">
					<img :src="item.imgUrl" alt="">
				</a-col>
			</div>
		</a-row>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Gallery",
	computed: {
		...mapGetters(['getNews'])
	}
}
</script>

<style scoped>
img {
	width: 480px;
}
</style>