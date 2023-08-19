<template>
	<view class="container">
		<view class="header">
			<view class="progress">
				<view class="back"> back </view>
				<view class="progress-num">{{progressNum}}/{{progressAll}}</view>
			</view>
			<progress :percent="percent" color="#5957FF" border-radius='10' active="true" active-mode="forwards"
				backgroundColor="#404040" stroke-width="14" class="progress-bar" @activeend='achieved'></progress>
		</view>
		<!-- 滑动块 -->
		<swiper :current="current" touchable='false'>
			<!-- 第一页 -->
			<!-- 姓名、联系方式（邮箱、手机） -->
			<!-- 第二页等等 -->
			<swiper-item v-for="(item,index) in question" :key="item">
				<image :src="index % 2 === 0 ? imgs[0] : imgs[1]" mode="">
				</image>
				<view class="main">
					<view class="question">{{question[index]}}</view>
					<view class="answer">
						<uni-forms>
							<uni-forms-item>
								<uni-easyinput type="textarea" v-model="inputContent[Object.keys(inputContent)[index]]"
									:placeholder="questionEn[index]" />
							</uni-forms-item>
						</uni-forms>
					</view>
				</view>
				<view class="next" @click="slideNext">next -></view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script setup>
	import {
		computed,
		reactive,
		ref,
		watch
	} from 'vue'
	import {
		info
	} from '../../store/info.js'
	const userInfo = info()
	const progressAll = computed(() => question.length)
	const progressNum = ref(1)
	const able = ref(false)
	const question = reactive(['请输入你的姓名', '请输入你的手机号码', '请输入你的电子邮箱', '你的求职意向', '你的教育背景', '你的工作经验', '相关技能证书', '自我评价'])
	const questionEn = reactive(['please enter your name', 'please enter your phone number',
		'please enter your email address', 'your job objective', 'your education background',
		'your work experience', 'relevant skills certificate', 'self-assessment'
	])
	const inputContent = reactive({
		name: null,
		tel: '',
		email: '',
		objective: '',
		education: '',
		experience: '',
		certificate: '',
		self: '',
	})
	// 当前所在的页面
	const current = ref(0)
	// 进度
	const percent = computed(() => {
		return ((current.value + 1) / progressAll.value) * 100
	})
	// 用于切换的图片
	const imgs = reactive(['https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/Rectangle 712.png',
		'https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/Frame 3012.png'
	])

	// 跳转到下一个页面
	const slideNext = () => {
		current.value++
		progressNum.value++
		if (progressNum.value === question.length + 1) {
			progressNum.value = question.length
			uni.navigateTo({
				url: "/pages/confirm/confirm",
			})
			// 将数据提交
			userInfo.userInfo = inputContent
			console.log('123',userInfo.userInfo);
		}
	}

	// 进度条完成事件
	const achieved = () => {
		// todo
	}

	// todo:添加防抖函数

	watch(() => inputContent, () => {
		console.log(inputContent);
	}, {
		deep: true
	})

</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100vw;
		height: 100vh;
		background: #111617;
		color: white;

		.header {
			width: 686rpx;
			height: 156rpx;

			.progress {
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
			}

			.progress-bar {
				width: 100%;
				height: 60rpx;
			}

		}

		:deep(swiper) {
			width: 100%;
			height: calc(100vh - 156rpx - 176rpx);


			image {
				width: 686rpx;
				height: 436rpx;
				border-radius: 20rpx;
				margin-top: 80rpx;
			}

			swiper-item {
				margin-right: 64rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				:last-child {
					margin-right: 0;
				}

				.main {
					width: 686rpx;
					height: 322rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 80rpx;

					.question {}

					.answer {
						margin-top: 32rpx;
					}
				}
			}

		}

		:deep(.uni-easyinput__content) {
			width: 686rpx;
			background-color: #404040 !important;
			color: white !important;
		}


		.next {
			width: 686rpx;
			height: 92rpx;
			border-radius: 78rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background: #616161;
			margin-top: 80rpx;
		}
	}
</style>
