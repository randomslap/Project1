

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
  $("html, body").animate({
      scrollTop: "0px"
    });
  $(document).animate({
    scrollTop: "0px"
  });
}

/* <div id="navbarResponsive">
<ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link js-scroll-trigger" href="#about">OVERWATCH</a>
    </li>
    <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#services">CS:GO</a>
    </li>
    <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#contact">DOTA II</a>
    </li>
    <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#contact">LEAGUE OF LEGENDS</a>
    </li>
</ul>
    </div >
    <nav class="navbar navbar-collapse-sm navbar-dark bg-transparent navbar-dark bg-dark" id="mainNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="/assetts/images/logomin.png" width="50"
        height="50"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarLg">
      test
    </button>
    <div class="navbar-collapse collapse" id="collapsingNavbarLg">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Collapse on LG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
*/