<template>
	<div>
		{{ news }}
	</div>
</template>
<script>
	export default {
		name: "SomeNews",
		data() {
			return {
				news: this.$route.params.news,
			}
		},
	}
</script>
<style scoped></style>
