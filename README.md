# compiler
base on https://github.com/thejameskyle/the-super-tiny-compiler/blob/master/the-super-tiny-compiler.js

##babel是一个compiler
- 简单的编译器：https://github.com/thejameskyle/the-super-tiny-compiler
- 编译器三个阶段：
	- parsing
		- Lexical analysis：词法分析
			- 原始代码做词法拆分，以数字、标签、符号或者操作符等拆分
		- Syntactic analysis：句法分析
			- 一种语法重新变成另一种格式，AST格式（Abstract Syntax Tree），深度嵌套的object，一种表现方式；
	- transforming
		- 操纵每个ast节点本身或者属性
		- add、remove、replace  properties
		- add、remove nodes
		- 离开现有的ast，创建一个全新的基于当前节点的ast节点
		- Traversal、traverse 遍历、转换，操纵节点，深度优先遍历
			- visitor：NumberLiteral(node, parent)
			- enter/exit
	- generation
		- 有一些重复的转换过程
		- 生成一个大的字符串
