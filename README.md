<p align="center">
  <a href="https://luchoster.dev/">
    <img alt="Luchoster" src="https://luchoster.dev/icons/icon-192x192.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Theme Base
</h1>

Stack and libs:

* React
* Gatsby
* Animate.css
* SASS (SCSS) support

## Create Your Starter

```shell
cd ..
mkdir gatsby-starter-site
git init
yarn init -y
yarn add gatsby-theme-luchoster-base gatsby react react-dom
```

Then create your config:

```js:title=gatsby-config.js
module.exports = {
  __experimentalThemes: ["gatsby-theme-luchoster-base"],
}
```

The theme comes with Sass support.
You can create a new folder `src/styles/` and add a sass file `main.scss` (for example), and start writing your styles right out of the box.

If you would like to use some of the predefined mixins, breakpoints and/or functions, just include: `@import '~gatsby-theme-luchoster-base/src/styles/main.scss';` at the top of your main styles file. This will allow you to:
* **Use BEM Mixers:**

  ```
  .block {
  	color: #eee;
	@include modifier('block--mod') {
  		color: #042;
  	}
  	@include element('block__elem') {
  		color: #fff;
  	}
  }
  ```

  Modifier
  ```
  <div className="block block--modifier">Modifier</div>
  ```

  Element
  ```
  <div className="block">
  	<div className="block__element">Element</div>
  </div>
  ```

  For more info about BEM Methodology, please visit: [getbem.com](http://getbem.com/)

* **Use animate.css:**

	`<div className="some-class animated zoomIn">Zoom in</div>`

* **Use Breakpoint Mixers:**

	Based on [@ajlkn](https://twitter.com/ajlkn)'s `breakpoint.scss` I modified it a bit to use the breakpoints defined [here](https://gist.github.com/luchoster/167483502cb46bf171a7340daa6c370f).
    To use this mixin, you just have to write:

    ```
    .hero {
    	height: 350px;
        @include breakpoint(md) {
        	height: 550px;
        }
        @include breakpoint(lg) {
        	height: 750px;
        }
    }
    ```
    Now your mobile `.hero` height will be `350px`, `550px` for tablet and `750px` for larger screens.
