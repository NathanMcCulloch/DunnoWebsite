$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $loginButton = $('.login-button');
    const $navDropdown = $('#nav-dropdown');
      
      $menuButton.on('click', () => {
      $navDropdown.show();
    });

    $navDropdown.on('mouseleave', () => {
        $navDropdown.hide();
      });
    
      $loginButton.on('click', () => {
          
      });

    
  
  })