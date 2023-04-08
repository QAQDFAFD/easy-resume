<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 用户登录
			// uni.login({
			//   provider: 'weixin', //使用微信登录
			//   success: function (loginRes) {
			//     console.log(loginRes.authResult);
			//   }
			// });
			uni.login({
				provider: 'univerify',
				univerifyStyle: {
					fullScreen: true
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container {
		padding-top: 176rpx;
	}
</style>
