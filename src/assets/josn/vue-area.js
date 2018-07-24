export const arrAll =
[
	{name: "选择省份", sub: [{name: "请选择"}], type: 1},
	{
		name: "北京",
		sub: [
			{name: "请选择", sub: []},
			{
				name: "北京",
				sub: [{name: "请选择"}, {name: "东城区"}, {name: "其他"}],
				type: 0
			}], type: 1
	},
	{
		name: "广东",
		sub: [{name: "请选择", sub: []},
			{
				name: "广州",
				sub: [{name: "请选择"},{name: "从化市"}, {name: "其他"}],
				type: 0
			},
			{
				name: "云浮",
				sub: [{name: "请选择"}, {name: "云城区"}, {name: "罗定市"},{name: "其他"}],
				type: 0
			},
			{name: "其他"}],
		type: 1
		}
	]