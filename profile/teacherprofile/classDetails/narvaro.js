const att = document.querySelectorAll('table td')

for(var i = 0; i < att.length; i++) {
      att[i].addEventListener('click', function(e){
        console.log();

          if (e.target.className == 'no') {
              e.target.className = 'yes';
              console.log();
            }

            else {
              e.target.className = 'no';
            }
      });
    }
