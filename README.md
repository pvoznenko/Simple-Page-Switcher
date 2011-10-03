<script>
	$(function() {
		$( "#test-example1" ).simplePagingPlugin( 3 );
		$( "#test-example2" ).simplePagingPlugin( 'another-row-class' );
		$( "#test-example3" ).simplePagingPlugin({ 
			'perPage'     : 4,
            'cssClassRow' : 'another-row-class',
			'arrowLeft'   : '<',
            'arrowRight'  : '<img src="http://ui-dev.jquery.com/images/demo-spindown-closed.gif" />'
		});
	});
</script>
<h4>Example 1</h4>
<p>This example should show 3 rows with class "spp-block-row" (default value) per page</p>
<div id="test-example1">
	<div class="spp-block-row">Row 1</div>
	<div class="spp-block-row">Row 2</div>
	<div class="spp-block-row">Row 3</div>
	<div class="spp-block-row">Row 4</div>
	<div class="spp-block-row">Row 5</div>
	<div class="spp-block-row">Row 6</div>
</div>

<h4>Example 2</h4>
<p>This example should show 5 (default value) rows with class "another-row-class" per page</p>
<div id="test-example2">
	<div class="another-row-class">Row 1</div>
	<div class="another-row-class">Row 2</div>
	<div class="another-row-class">Row 3</div>
	<div class="another-row-class">Row 4</div>
	<div class="another-row-class">Row 5</div>
	<div class="another-row-class">Row 6</div>
</div>

<h4>Example 3</h4>
<p>This example should show 4 rows with class "another-row-class" per page. Left arrow should be "<" and right - image "&lt;img src=&quot;http://ui-dev.jquery.com/images/demo-spindown-closed.gif&quot;&frasl;&gt;" </p>
<div id="test-example3">
	<div class="another-row-class">Row 1</div>
	<div class="another-row-class">Row 2</div>
	<div class="another-row-class">Row 3</div>
	<div class="another-row-class">Row 4</div>
	<div class="another-row-class">Row 5</div>
	<div class="another-row-class">Row 6</div>
</div>