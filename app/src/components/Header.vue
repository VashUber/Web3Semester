<template>
	<a-layout-header style="padding: 0">
		<a-row>
			<a-col :span="8">
				<a-menu
						theme="dark"
						mode="horizontal"
						:default-selected-keys="[currentPath]"
						:style="{ lineHeight: '64px' }"
				>
					<a-menu-item key="home">
						<router-link to="/" class="link">Home</router-link>
					</a-menu-item>
					<a-menu-item key="news">
						<router-link to="/news" class="link">News</router-link>
					</a-menu-item>
					<a-menu-item key="gallery">
						<router-link to="/gallery" class="link">Gallery</router-link>
					</a-menu-item>
				</a-menu>
			</a-col>
			<a-col :span="8" class="input">
				<a-input-search placeholder="input search text"/>
			</a-col>
		</a-row>
	</a-layout-header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {currentPath: this.$route.name.toLowerCase()}
	},
}

</script>

<style lang="scss" scoped>
.input {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
}
</style>