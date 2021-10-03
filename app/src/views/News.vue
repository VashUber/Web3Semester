<template>
	<div>
		<Table :newsItems="getNews"/>
	</div>
</template>

<script>
import Table from "../components/Table"
import {mapGetters} from "vuex";

export default {
	name: 'News',
	components: {
		Table,
	},
	computed: {
		...mapGetters(['getNews'])
	},

}
</script>

<style lang="scss" scoped>

</style>