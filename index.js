   
   $(document).ready(function()
   {
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#header').offset().top }, 600, 'easeOutBack');
      });
      $('#header').parallax();
      $("a[href*='#section2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#section2').offset().top }, 600, 'easeOutBack');
      });
      $("a[href*='#section3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#section3').offset().top }, 600, 'easeOutCubic');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-80 }, 600, 'easeInQuad');
      });
      $("#PanelMenu1").panel({animate: true, animationDuration: 800, animationEasing: 'swing', dismissible: true, display: 'push', position: 'left', toggle: true});
      var $maintenancePanels = $('#maintenance-panels');
      function updateButtonsmaintenance()
      {
         var active = $maintenancePanels.tabs('option', 'active');
         var count = $maintenancePanels.find('.ui-tabs-panel').length-1;
         var title = $($('#maintenance li')[active]).text();
         $('#maintenance-prev').button(active == 0 ? 'disable' : 'enable');
         $('#maintenance-next').button(active == count ? 'disable' : 'enable');
         $('#maintenance-finish').button(active == count ? 'enable' : 'disable');
         $('#maintenance').dialog('option', 'title', title);
      }
      function onResizemaintenance()
      {
         var dialogWidth = 370;
         var dialogHeight = 288;
         var viewportWidth = null!=window.innerWidth?window.innerWidth:"CSS1Compat"==document.compatMode?document.documentElement.clientWidth:document.body.clientWidth;
         if (viewportWidth < 969)
         {
            dialogWidth = 370;
            dialogHeight = 288;
         }
         $("#maintenance").dialog('option', 'width', dialogWidth);
         $("#maintenance").dialog('option', 'height', dialogHeight);
         $("#maintenance").dialog('option', 'position', { my: 'center', at: 'center', of: window } );
      }
      $("#maintenance").dialog(
      {
         title: 'Not Yet Done :P',
         modal: true,
         width: 370,
         height: 288,
         position: { my: 'center', at: 'center', of: window },
         buttons:
         [
            {
               id: "maintenance-prev",
               text: "Previous",
               click: function()
               {
                  var active = $maintenancePanels.tabs("option", "active");if (active > 0)active--;$maintenancePanels.tabs("option", "active", active);updateButtonsmaintenance();
               }
            },
            {
               id: "maintenance-next",
               text: "Next",
               click: function()
               {
                  var active = $maintenancePanels.tabs("option", "active");var count = $maintenancePanels.find('.ui-tabs-panel').length-1;if (active < count)active++;$maintenancePanels.tabs("option", "active", active);updateButtonsmaintenance();
               }
            },
            {
               id: "maintenance-finish",
               text: "Finish",
               click: function()
               {
                  $(this).dialog('close');
               }
            }
         ],
         resizable: false,
         draggable: true,
         closeOnEscape: true,
         show: { effect: 'bounce', duration: 1500, easing: 'swing' },
         hide: { effect: 'bounce', duration: 1500, easing: 'swing' },
         autoOpen: true,
         classes: {'ui-dialog': 'maintenance'} 
      });
      $(window).resize(function() { onResizemaintenance() } );
      onResizemaintenance();
      $("#maintenance-panels").tabs(
      {
         show: { effect: 'bounce', duration: 1500, easing: 'swing' },
         hide: { effect: 'bounce', duration: 1500, easing: 'swing' },
         event: 'click',
         collapsible: false
      });
      updateButtonsmaintenance();
   });
