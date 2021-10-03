<template>
	<div>
		<router-link to="/news" class="link">
			<a-icon type="arrow-left" style="font-size: 44px"/>
		</router-link>
		<div v-if="getNewsById !== undefined">
			<h2>{{ getNewsById.name }}</h2>
			<div>{{ getNewsById.desc }}</div>
			<div>{{ getNewsById.date }}</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "NewsItem",
	computed: {
		...mapGetters(['getSomeNews']),
		getNewsById() {
			return this.getSomeNews(+this.$route.params.id)
		}
	}
}

</script>

<style scoped>

</style>