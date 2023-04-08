<template>
	<view>
		{{userInfo.userInfo}}
		<view class="charts-box">
			<qiun-data-charts type="word" :opts="opts" :chartData="chartData" />
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	import {
		info
	} from '../../store/info.js'
	const userInfo = info()

	const chartData = reactive({})

	const opts = reactive({
		color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
			"#ea7ccc"
		],
		padding: undefined,
		enableScroll: false,
		extra: {
			word: {
				type: "normal",
				autoColors: false
			}
		}
	})

	const getServerData = () => {
		//模拟从服务器获取数据时的延时
		setTimeout(() => {
			//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
			let res = reactive({
				series: [{
						name: "跨全端图表",
						textSize: 25,
						data: undefined
					},
					{
						name: "微信小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "支付宝小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "百度小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "QQ小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "头条小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "抖音小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "360小程序",
						textSize: 20,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 10,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 12,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 10,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 12,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 10,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 12,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 10,
						data: undefined
					},
					{
						name: "跨全端",
						textSize: 12,
						data: undefined
					}
				]
			});
			this.chartData = JSON.parse(JSON.stringify(res));
		}, 500);
	}

	onReady() {
		getServerData()
	}
</script>

<style>

</style>
