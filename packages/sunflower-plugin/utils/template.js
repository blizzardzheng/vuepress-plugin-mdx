module.exports = function(tpl,data) {
  const re = /<%([^%>]+)?%>/g
  //exec() 方法在一个指定字符串中执行一个搜索匹配
  while(match = re.exec(tpl)){  //判断match是否为true
      console.log(match)
      //eplace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串
      //["<%name%>", "name", index: 21, input: "<p>Hello, my name is <%name%>. I'm <%age%> years old.</p>"]
      tpl = tpl.replace(match[0],data[match[1]])
      //tpl = tpl.replace("<%name%>",data["name"])
      
  }
  return tpl
}