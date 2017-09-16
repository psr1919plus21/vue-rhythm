# Vue component tool that helps you to support vertical rhythm.

![Image of vue-rhythm](https://raw.githubusercontent.com/psr1919plus21/vue-rhythm/master/vue-rhythm.png)

Get *vue-rhythm*
----------

Here several ways to get *vue-rhythm*:

**download**
Copypaste component in your project:
[Get vue-rhythm](https://raw.githubusercontent.com/psr1919plus21/vue-rhythm/master/vue-rhythm/index.js)

**npm**

    npm install vue-rhythm


Usage
---------
In order to initialise *vue-rhythm*  you need to add *vue-rhythm* code to your project and place `<vue-rhythm></vue-rhythm>` component to your markdown.

**Example:**

in html:

    <div id="app">
    	<vue-rhythm></vue-rhythm>
    </div>


in script:

     import 'vue-rhythm';

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

License
=======

Copyright (c) 2017 Philipp Gaponenko (psr1919plus21@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
