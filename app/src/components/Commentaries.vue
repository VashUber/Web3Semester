<template>
	<div class="commentaries">
		<a-avatar :size="64" icon="user"/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, distinctio doloremque enim id laborum
			quidem veritatis? Beatae dignissimos dolore earum eos exercitationem explicabo ipsum laborum quas quasi,
			sit. Dicta, eius.</p>
	</div>
</template>

<script>
export default {
	name: "Commentaries"
}
</script>

<style scoped lang="scss">
.commentaries {
	display: flex;
	background: #ffffff;
	width: 700px;
	border-radius: 10px;
	padding: 20px;
	box-sizing: border-box;

	p {
		width: 600px;
		padding-left: 20px;
	}

}
</style>