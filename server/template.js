﻿export default ({body, title})=>{
	
	return `<!Doctype html>
	<html>
	<head>
	<title>${title}</title>
	<script src="https://d3js.org/d3.v5.min.js"></script>
	</head>
	<body>
	  <div id="root">${body}</div>
	</body>
	<script src="/dist/bundle.js"></script>`;

}	