/**
 * jQuery SimplePaging plugin
 *
 * Copyright (c) 2011 Pavel Voznenko (p.voznenko@gmail.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function( $, undefined ) {
    $.fn.simplePagingPlugin = function( options ) {
        var settings = {
            'perPage'     : 30,
            'cssClassRow' : 'spp-block-row',
            'cssIdLeft'   : 'spp-go-left',
            'cssIdRight'  : 'spp-go-right',
            'cssIdFirst'  : 'spp-go-first',
            'cssIdLast'   : 'spp-go-last',
            'cssIdMain'   : 'spp-block',
            'arrowLeft'   : '←',
            'arrowRight'  : '→'
        },
        $this = $( this );
                        
        var methods = {
            'init' : function ( options ) {
                if ( options !== undefined ) {
                    switch ( typeof options ) {
                        case 'object' :
                            $.extend( settings, options );
                            break;
                        case 'string' :
                            settings.cssClassRow = options; 
                            break;
                        case 'number' :
                            settings.perPage = options; 
                            break;
                    }
                }
                return true;
            },
            'showRows' : function ( options ) {
                $( elObj ).hide();
                if ( options === undefined ) {
                    options = {
                        'from' : 0, 
                        'to'   : settings.perPage
                    };
                }
                for ( var i = options.from; i < options.to; i++ ) {
                    if ( elObj[i] !== undefined ) {
                        $( elObj[i] ).show();
                    }
                }
            }
        };
                    
        methods.init( options );  
                        
        var elObj = $( '.' + settings.cssClassRow, $this ),
        elCount = elObj.length;
                        
        if ( elCount > settings.perPage ) {
            var pages = elCount % settings.perPage == 0 ? elCount / settings.perPage : parseInt( elCount / settings.perPage ) + 1;

            methods.showRows( );

            $this.append( '\
                <div id="' + settings.cssIdMain + '">\n\
                    <a href="#go-to-first" id="' + settings.cssIdFirst + '">1</a> \n\
                    <a href="#go-left" id="' + settings.cssIdLeft + '">' + settings.arrowLeft + '</a> \n\
                    <span>1</span> \n\
                    <a href="#go-right" id="' + settings.cssIdRight + '">' + settings.arrowRight + '</a> \n\
                    <a href="#go-to-last" id="' + settings.cssIdLast + '">' + pages + '</a>\n\
                </div>\n\
            ' );

            $( '#' + settings.cssIdFirst ).click(function() {
                var options = {
                    'from' : 0,
                    'to'   : settings.perPage
                };
                                
                methods.showRows( options );
                            
                $( '#' + settings.cssIdMain + ' span' ).show().text( '1' );
                $( '#' + settings.cssIdFirst + ', #' + settings.cssIdLeft ).hide();
                $( '#' + settings.cssIdLast + ', #' + settings.cssIdRight ).show();
                            
                return false;
            })
            .hide();

            $( '#' + settings.cssIdLast ).click(function() {
                var options = { 
                    'from' : (pages * settings.perPage - elCount == 0 ? elCount - settings.perPage : (pages - 1) * settings.perPage),
                    'to'   : elCount
                };
                                
                methods.showRows( options );
                            
                $( '#' + settings.cssIdMain + ' span' ).show().text( pages );
                $( '#' + settings.cssIdFirst + ', #' + settings.cssIdLeft ).show();
                $( '#' + settings.cssIdLast + ', #' + settings.cssIdRight ).hide();
                            
                return false;
            });

            $( '#' + settings.cssIdLeft ).click(function() {
                var currentPage = parseInt( $( '#' + settings.cssIdMain + ' span' ).text() ),
                newPage     = currentPage - 1 > 1 ? currentPage - 1 : 1,
                options     = {
                    'from' : (newPage == 1 ? 0 : (newPage - 1) * settings.perPage),
                    'to'   : (newPage * settings.perPage >= elCount ? elCount : newPage * settings.perPage)
                };

                methods.showRows( options );

                $( '#' + settings.cssIdMain ).children().show();    
                $( '#' + settings.cssIdMain + ' span' ).text( newPage );

                if ( newPage == 1 ) {
                    $( '#' + settings.cssIdFirst + ', #' + settings.cssIdLeft ).hide();
                }
                            
                return false;
            })
            .hide();

            $( '#' + settings.cssIdRight ).click(function() {
                var currentPage = parseInt($('#' + settings.cssIdMain + ' span').text()),
                newPage     = currentPage + 1 < pages ? currentPage + 1 : pages,
                options = {
                    'from' : (newPage == pages ? (pages * settings.perPage - elCount == 0 ? elCount - settings.perPage : (pages - 1) * settings.perPage) : currentPage * settings.perPage),
                    'to'   : (newPage * settings.perPage >= elCount ? elCount : newPage * settings.perPage)
                };

                methods.showRows( options );

                $( '#' + settings.cssIdMain ).children().show();    
                $( '#' + settings.cssIdMain + ' span' ).text( newPage );

                if ( newPage == pages ) {
                    $( '#' + settings.cssIdLast + ', #' + settings.cssIdRight ).hide();
                }
                            
                return false;
            });
        }
    }
})( jQuery );