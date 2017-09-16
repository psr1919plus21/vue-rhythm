# Vue component tool that helps you to support vertical rhythm.

Get *vue-rhythm*
----------

Here several ways to get *vue-rhythm*:

**download**

    Copypaste component in your project:
[Get vue-rhythm](https://raw.githubusercontent.com/psr1919plus21/vue-rhythm/master/vue-rhythm/index.js)

**npm**

    npm installation stuff here

**bower**

    bower installation stuff here


Usage
---------
In order to initialise *vue-rhythm*  you need to add *vue-rhythm* code to your project and place `<vue-rhythm></vue-rhythm>` component to your markdown.

**Example:**

in html:

    <div id="app">
    	<vue-rhythm></vue-rhythm>
    </div>


in script:

     import './components/vue-rhythm';

     new Vue({
       el: '#app',
     })


After this *vue-rhythm* grid will be added on the page.

In order to toggle *vue-rhythm* grid press `Ctrl+;`

Settings
---------

By default *vue-rhythm* grid appears with following settings:

      {
        bgColor: 'rgba(255, 0, 0, .2)',
        gridColor: 'rgba(0, 0, 0, .9)',
        lineHeight: 28,
        verticalOffset: 0
      }

In order to override settings you can pass settings objects through props like this:

      <vue-rhythm
        :settings={
          bgColor: "#333",
          gridColor: "rgba(0, 0, 0, .5)",
          lineHeight: 14,
          verticalOffset: 22}>
      </vue-rhythm>
