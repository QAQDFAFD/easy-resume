<template>
	<view class="container">
		<view class="intro">
			<view>Easy Resume</view>
			<view>You can fill in some information finally choose a template to generate your customized resume.</view>
		</view>
		<view class="start">START</view>
		<view class="footer">
			<view class="chat">
				<image src="https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/user.png" mode=""></image>Chat
				with GPT
			</view>
			<view class="connect">
				<image src="https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/users.png" mode=""></image>
				Connect us
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		color: white;
		text-align: center;
		background: linear-gradient(338deg, #000000 1%, #000000 100%);
		box-shadow: 0rpx 8rpx 8rpx 0rpx rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		.intro {
			margin-top: 306rpx;
			width: 706rpx;
			height: 304rpx;

			:nth-child(1) {
				font-size: 96rpx;
			}
		}

		.start {
			width: 240rpx;
			height: 240rpx;
			background: #5957FF;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 120rpx;
		}

		.footer {
			width: 100%;
			height: 160rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 242rpx;

			>view {
				width: 332rpx;
				height: 80rpx;
				border-radius: 16rpx 16rpx 16rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #2E2E2E;

				image {
					width: 32rpx;
					height: 32rpx;
					padding-right: 15rpx;
				}
			}

			.chat {}

			.connect {}
		}
	}
</style>
