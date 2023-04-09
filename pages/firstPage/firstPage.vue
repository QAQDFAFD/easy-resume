<template>
	<view class="container">
		<view class="intro">
			<view>Easy Resume</view>
			<view>You can fill in some information finally choose a template to generate your customized resume.</view>
		</view>
		<view class="start" @click="start">START</view>
		<!-- <unicloud-db ref="udb" v-slot:default='{data,loading,error,options}' collection="contacts">
			<view v-if='error'>

			</view>
			<view v-else>
				<uni-list>
					<uni-list-item v-for="item in data" :key="item._id" :note="item.phone" link>{{item.name}}
					</uni-list-item>
				</uni-list>

			</view>
		</unicloud-db> -->
		<view class="footer">
			<view class="chat">
				<image src="https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/user.png" mode=""></image>Chat
				with GPT
			</view>
			<view class="connect" @click="connect">
				<image src="https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/users.png" mode=""></image>
				Connect us
			</view>
			<uni-popup ref="popup" type="center">联系方式：wy15195382735@163.com</uni-popup>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const popup = ref(null)
	const connect = function() {
		popup.value.open()
	}
	// 导入云对象
	const firstCloudObj = uniCloud.importObject('firstCloudObj')

	// const add = () => {
	// 	const db = uniCloud.database()
	// 	db.collection('contacts').add({
	// 		"name": "李嘉俊",
	// 		"phone": "手机15195382735"
	// 	}).then(res => console.log("123",res))
	// }
	const start = () => {
		// 执行登录
		login()
		uni.navigateTo({
			url: "/pages/fillInfo/fillInfo",
		})
	}

	// 获取用户的手机号
	// const getPhoneNumber = (e) => {
	// 	if (e.detail.errMsg == "getPhoneNumber:ok") {
	// 		console.log("用户点击了接受")
	// 		console.log(e.detail);
	// 		let encryptedData = e.detail.encryptedData
	// 		let errMsg = e.detail.errMsg
	// 		let iv = e.detail.iv
	// 	} else {
	// 		console.log("用户点击了拒绝")
	// 	}
	// }


	const login = () => {
		console.log('执行登录');
		uni.login({
			"provider": 'weixin',
			"onlyAuthorize": true,
			success: function(event) {
				console.log('获取code成功');
				const {
					code
				} = event
				// 打印出code
				console.log(code);

				// 用户获得了临时票据code，向服务端发起登录请求
				uni.request({
					method: 'POST',
					url: 'http://localhost:3007/wx/wxLogin',
					data: {
						code: code,
						appSecret: '42f38be11589d5e8657cc62426166218',
						appId: 'wx402e26b7d373de75'
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						uni.setStorageSync('token', res.data)
						console.log(res.data);
					}
				})

			},
			fail: function(e) {
				console.log(e.code);
			}
		})
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
