This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# react-router
react-router包含3个库，react-router、react-router-dom和react-router-native。react-router提供最基本的路由功能，实际使用的时候不会直接安装react-router,而是根据应用运行的环境安装react-router-dom(在浏览器中使用)或react-router-native(在rn中使用)。react-router-dom 和 react-router-native都依赖react-router,所以在安装时react-router会自动安装。

react-router中奉行一切皆组件的思想，路由器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect都以组件形式存在。

# 渲染
Route渲染优先级为：children > component > render 三者能接收到同样的[route props]，包括match location history，但是当不匹配的时候children的match为null,这三种方式互斥，只能用一种。

children: func 不管location是否匹配，都要渲染一些内容，使用children。除了此特性之外，其它工作方法与render完全一样。

render: func 当用render的时候，调用的只是个函数。它和component一样能够访问所有的[route props]

component: component 只有在location匹配的时候才渲染

# 动态路由
使用:id的形式定义动态路由 组件从match.params中解构出来

# 嵌套路由
Route组件嵌套在其它页面组件中就产生了嵌套关系

# BrowserRouter
<BrowserRouter>使用HTML5提供的history API(pushState, replaceState, popState事件)来保持UI和URL同步

basename: String

# HashRouter
<HashRouter> 使用URL的hash部分(window.location.hash)来保持UI和URL的同步

basename: String

# MemoryRouter
把URL的历史记录保存在内存中的<Router>(不读写、不写入地址栏)

Link 

to: string 一个字符串形式的链接地址，通过pathname、search、hash属性创建

to: object 一个对象形式的链接地址，可以有以下属性 pathname-要链接到的路径 search-查询参数 hasn-URL中的hash state-存储到location中的额外状态数据

replace:bool 当设置为true时，点击链接后将替换历史堆栈中的当前条目，而不是添加新条目。默认为false。

others 还可以传递一些其它属性，title id className

Redirct

to:string 要重定向到的URL
to:object 要重定向到的位置，其中pathname可以是能够理解的任何有效URL路径。对象中的state对象可以在重定向的组件中通过this.props.location.state进行访问。

Route

<Route>可能是React Router中最重要的组件，基本职责是在其Path属性与某个location匹配时呈现一些UI

path: string 可以是能够理解的有效的URL路径，没有定义path的<Route>总是被匹配。

location:object <Route>尝试将其path与当前history location(通常是当前浏览器URL)进行匹配。但是，带有不同pathname的location也可以与之匹配。如果一个<Route>被包裹在一个<Switch>中，并且与<Switch>的location相匹配，那么<Route>的location参数将被<Switch>所使用的location覆盖。

Router

所有Router组件的通用低阶接口。通常情况下，应用程序只会使用其中一个高阶Router: BrowserRouter HashRouter MemoryRouter NativeRouter StaticRouter

Switch

用于渲染与路径匹配的第一个子<Route>或<Redirect> 当匹配到第一个子<Route>时，<Switch>会停止查找匹配项并立即呈现。<Route>组件使用path属性进行匹配，而<Redirect>组件使用它们的from属性进行匹配。没有path属性的<Route></Route>或者没有from 属性的<Redirect>及那个始终与当前路径匹配。

# BrowserRouter与HashRouter对比
1、HashRouter最简单，不要服务端渲染，靠浏览器的#来区分path就可以，BrowserRouter需要服务器端对不同的URL返回不同的HTML

2、BrowserRouter使用HTML5 history API(pushState, replaceState, popState事件)，让页面的UI同步URL

3、HashRouter不支持location.key 和 location.state 动态路由跳转需要通过?传递参数

4、Hash history不需要服务器任何配置就可以运行





## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
