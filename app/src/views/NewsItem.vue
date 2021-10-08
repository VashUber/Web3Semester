<template>
	<div>
		<router-link to="/news" class="link">
			<a-icon type="arrow-left" style="font-size: 44px"/>
		</router-link>
		<div v-if="getNewsById"  class="news">
			<h2>{{ getNewsById.name }}</h2>
			<div class="news__content">
				<div>
					<div>{{ getNewsById.desc }}</div>
					<div class="news__date">{{ getNewsById.date }}</div>
				</div>
				<div>
					<img :src="getNewsById.imgUrl" alt="" class="news__image">
				</div>
			</div>
		</div>
		<div class="commentaries">
			<div class="commentaries__input">
				<a-input placeholder="enter your comment" allow-clear class="input"/>
			</div>
			<div class="commentaries__list">
				<div class="commentaries__item">
					<a-avatar :size="64" icon="user"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, distinctio doloremque enim id laborum
						quidem veritatis? Beatae dignissimos dolore earum eos exercitationem explicabo ipsum laborum quas quasi,
						sit. Dicta, eius.</p>
				</div>
			</div>
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

<style scoped lang="scss">
.news {
	margin-bottom: 20px;
	&__image {
		width: 700px;
		border-radius: 10px;
		margin-left: 20px;
	}
	&__content {
		display: flex;
	}
}

.commentaries {
	&__input {
		width: 450px;
	}
	&__list {
	 margin-top: 20px;
	}
	&__item {
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
}
</style>