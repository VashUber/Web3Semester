<template>
	<div>
		<router-link to="/news" class="link">
			<a-icon type="arrow-left" style="font-size: 44px"/>
		</router-link>
		<div v-if="getNewsById" class="news">
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
			<Input/>
			<div class="commentaries__list">
				<Commentaries/>

			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import Input from "../components/Input";
import Commentaries from "../components/Commentaries";

export default {
	name: "NewsItem",
	components: {
		Input,
		Commentaries,
	},
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
	&__list {
		margin-top: 20px;
	}
}
</style>