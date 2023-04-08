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
		<image src="https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/Rectangle 712.png" mode=""></image>
		<view class="main">
			<view class="question">{{question}}</view>
			<view class="answer">
				<uni-forms>
					<uni-forms-item>
						<uni-easyinput type="textarea" v-model="inputName" placeholder="Input your answer here" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="next">next -></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const progressAll = ref(32)
	const progressNum = ref(1)
	const percent = ref(50)
	const question = ref('Please insert your name：')
	const inputName = ref('')

	// 进度条完成事件
	const achieved = () => {
		// todo
	}
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

		>image {
			width: 686rpx;
			height: 436rpx;
			border-radius: 20rpx;
			margin-top: 80rpx;
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
				
				:deep(.uni-easyinput__content) {
					width: 686rpx;
					background-color: #404040 !important;
					color: white !important;
				}
			}
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
