(function() {

	'use strict';

      document.addEventListener('DOMContentLoaded', function() {
          var includes = document.querySelectorAll('.includes-link');
          for(var i = 0; i < includes.length; i++) {
             includes[i].addEventListener('click', function(e) {
              e.preventDefault();
              var example_box = this.parentElement.parentElement;
              example_box.classList.toggle('hide-includes');
             })
          }

      })



})();
