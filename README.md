# reactQa
1.npm init (生成package.json文件)
 (按照向导填写各个字段，最后生成 package.json 文件。

容易出错的是： name的值不要和包包同名 。

比如我们后续需要使用npm安装几个包包：browserify react reactify ...

则name值如果写作“browserify”或“react”，此依赖会安装失败！

提示如下：

npm WARN install Refusing to install react as a dependency of itself)

2.npm install react --save    npm install react-dom --save  (最开始就是没有安装react-dom,所以一直渲染不出来)

3.npm install -g gulp

4.npm install --save-dev gulp gulp-browserify gulp-concat gulp-react gulp-connect lodash reactify

5.bower init （生成bower.json文件）

6. bower install bootstrap --save

7.dist文件（压缩后的文件）

8.创建gulpfile.js 

9.创建main.js

10.创建QuestionApp.js文件

11.cmd里面执行 gulp serve
