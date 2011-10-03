`$(function() {`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`$( "#test-example1" ).simplePagingPlugin( 3 );`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`$( "#test-example2" ).simplePagingPlugin( 'another-row-class' );`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`$( "#test-example3" ).simplePagingPlugin({` <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`'perPage'     : 4,`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`'cssClassRow' : 'another-row-class',`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`'arrowLeft'   : '<',`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`'arrowRight'  : '<img src="http://ui-dev.jquery.com/images/demo-spindown-closed.gif" />'`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`});`<br/>
`});`<br/>

<h4>Example 1</h4>
<p>This example should show 3 rows with class "spp-block-row" (default value) per page</p>
`<div id="test-example1">`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="spp-block-row">Row 1</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="spp-block-row">Row 2</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="spp-block-row">Row 3</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="spp-block-row">Row 4</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="spp-block-row">Row 5</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="spp-block-row">Row 6</div>`<br/>
`</div>`<br/>

<h4>Example 2</h4>
<p>This example should show 5 (default value) rows with class "another-row-class" per page</p>
`<div id="test-example2">`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 1</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 2</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 3</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 4</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 5</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 6</div>`<br/>
`</div>`<br/>

<h4>Example 3</h4>
<p>This example should show 4 rows with class "another-row-class" per page. Left arrow should be "<" and right - image "&lt;img src=&quot;http://ui-dev.jquery.com/images/demo-spindown-closed.gif&quot;&frasl;&gt;" </p>
`<div id="test-example3">`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 1</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 2</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 3</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 4</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 5</div>`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`<div class="another-row-class">Row 6</div>`<br/>
`</div>`<br/>