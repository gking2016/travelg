<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gdemo</title>
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

</head>
<body>
    <div class="nav">
        <span class="close">&times;</span>
        <div class="overlay_content">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <span class="menu">&#9776;</span><br>
    <header class="header">
      <img  class="logo" src="./images/cabernet_malec-removebg-preview.png" alt="">
      <h1 class="heading-primary">
          <span class="heading-primary-main" >outdoors</span>
          <span class="heading-primary-sub" >is where life happens</span>
          <div>
          <button class="btn">explore</button></div>
      </h1>
    </header>
    <main>
      <section id="aboutus" data-aos="zoom-in-up"  data-aos-duration="2000">
        <h1> 
          <span class="green">About</span>Us</h1>
        <div class="flx">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel. Aut, odio quo! Ad enim doloremque nam quam error veritatis velit magni deleniti excepturi provident, accusantium sequi. Est, voluptatibus! Ratione, officia ipsa perspiciatis, est sed natus optio recusandae consequuntur ipsum molestiae enim fugit laborum nam ipsam! Sed eum quidem illo?<br>
            <button class="green" id="btn">learn more..></button>
          </p>
          <div class="imgs">
            <div class="ih">
            <img class="img img1" src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="">
          </div>
          <div class="ih">
            <img class="img img2" src="https://images.unsplash.com/photo-1568056358788-45e19d19c528?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="">
          </div>
            <div class="ih">
            <img class="img img3" src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
        </div>

      </section>
    </main>
    <div class="modal" id="myModal">
      <div class="modal_content" ><br>
        <span class="close">&times;</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eveniet cum sint quo eius harum ducimus, ea corrupti odit voluptas quae tempora optio excepturi placeat rem dolorem veniam qui pariatur amet aliquam. Non voluptatibus dolores illum amet sunt, nam aperiam obcaecati numquam est doloremque quibusdam doloribus quo quis, ex magnam atque error deserunt recusandae itaque? Obcaecati tempore magni esse alias consectetur dignissimos dolorem laborum architecto illum ad? Error deleniti tenetur, ullam possimus vitae eveniet quos pariatur quisquam minus accusamus dolor dicta, a consequatur delectus autem cupiditate eaque dolore quod ea! Sequi itaque ipsum nobis voluptas harum commodi ducimus ex asperiores?</p>
      </div>
    </div>
    <script src="./js/index.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();

      var modal = document.getElementById("myModal");
      var btn = document.getElementById("btn");
      var close = document.getElementsByClassName("close")[1];

      btn.onclick = () => {
        modal.style.display = "block";
      }

      close.onclick = () => {
        modal.style.display = "none";
      }
    </script>
  
</body>
</html>
