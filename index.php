<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Qmars</title>
</head>
<?php include 'pages/linkStyle.html' ?>

<body>
    <?php include 'pages/navbar.html' ?>

    <!-- ----------------[navigator]----------------- -->
    <nav class="cube-wrap">
        <div class="cube">
            <div class="side top"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div>
            <div class="side bottom"><a href="#"><i class="fa-brands fa-linkedin-in fa-flip-vertical"></i></a></div>
            <div class="side front"><a href="#"><i class="fa-solid fa-envelope"></i></a></div>
            <div class="side back"><a href="#"><i class="fa-solid fa-envelope fa-flip-vertical"></i></a></div>
            <div class="side left"><a href="#"><i class="fa-brands fa-github fa-rotate-270"></i></a></div>
            <div class="side right"><a href="#"><i class="fa-brands fa-github fa-flip-vertical"></i></a></div>
        </div>
    </nav>
    <!-- ----------------[navigator]----------------- -->
    <!-- -----------------[header]------------------- -->
    <header class="py-4 ms-sm-5 row align-items-center">
        <div class="col-md-5 container d-block p-5">
            <h1 class="typing-anima">Hello there, its <span id="qmars">Qmars</span></h1>
            <h5>Fat Programmer, Sad Programmer, Mad Programmer</h5>
            <p class="lead text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-center text-md-start">
                <button type="button" class="btn btn-outline-light px-3" data-bs-toggle="modal" data-bs-target="#getStartedModal">
                    Say "hello there"
                </button>
            </div>
        </div>
    </header>
    <!-- -----------------[header]------------------- -->
    <!-- ---------------[whos qmars]----------------- -->
    <section class="py-4 ms-sm-5 row" id="whos">
        <div class="container row align-items-center">
            <div class="whos-left col-lg-10 p-5 pe-0">
                <h3>#who is Qmars?</h3>
                <p class="lead text-muted mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sunt corporis et soluta, doloremque excepturi accusantium laborum? Minus corporis, dolor temporibus molestias beatae, reiciendis hic accusamus delectus nihil ratione velit!
                    Veniam magni dicta totam rerum quod harum voluptatem ipsa, exercitationem, ad atque porro voluptatibus, dolore animi autem numquam illum sit expedita perspiciatis consequuntur quas quaerat? Sunt, iusto. Nostrum, excepturi pariatur.
                    Itaque esse qui necessitatibus quidem iure, tenetur laudantium. Similique, praesentium autem ea placeat nobis culpa ratione ipsum, cupiditate maxime et aspernatur quas libero, voluptate magnam aut nam perspiciatis adipisci repudiandae.
                    Corrupti optio nulla animi harum quidem obcaecati mollitia, magnam natus aut quod? Tempore id tempora, omnis explicabo, nemo accusamus quibusdam quas doloribus voluptatibus eaque sunt facilis officiis dolore maxime corrupti!</p>
            </div>
            <div class="whos-right col-2 d-lg-block d-none p-5">
            </div>
        </div>
    </section>
    <!-- ---------------[whos qmars]----------------- -->
    <!-- -----------------[skill]-------------------- -->
    <section class="p-5">
        <div class="row container skill">
            <div class="col-sm-1">
                <h3 id="skill">#skills</h3>
            </div>
            <div class="col-sm-11">
                <div class="row">
                    <div class="col-3">
                        <h2>HTML5,CSS3</h2>
                        <div id="htmlcss"></div>
                        <h2>SASS</h2>
                        <div id="sass"></div>
                        <h2>Bootstrap</h2>
                        <div id="bootstrap"></div>
                    </div>
                    <div class="col-3">
                        <h2>JavaScript</h2>
                        <div id="javascript"></div>
                        <h2>JQuery</h2>
                        <div id="jquery"></div>
                        <h2>React.JS</h2>
                        <div id="reactjs"></div>
                    </div>
                    <div class="col-3">
                        <h2>Python</h2>
                        <div id="python"></div>
                        <h2>Django</h2>
                        <div id="django"></div>
                        <h2>mySQL</h2>
                        <div id="mysql"></div>
                    </div>
                </div>
            </div>
            <div class="middleland p-4"></div>
        </div>
    </section>
    <!-- -----------------[skill]-------------------- -->
    <!-- ---------------[experience]----------------- -->
    <section class="p-5">
        <div class="row container skill">
            <div class="col-sm-1">
                <h3 id="experience">#experience</h3>
            </div>
            <div class="col-sm-11 row">
                <div class="col-1">
                    <ul class="exBtns">
                        <li class="exBtn-item exBtn-1">
                            <h6>CO-CEO of SPHYNX Games</h6>
                        </li>
                        <li class="exBtn-item exBtn-2">
                            <h6>Founder of Empire</h6>
                        </li>
                        <li class="exBtn-item exBtn-3">
                            <h6>Work for Oracle</h6>
                        </li>
                    </ul>
                </div>
                <div class="col-11">
                    <div class="exShow">
                        <div class="exShow-item exShow-item-1">
                            <p>
                                Lorem ipsum dolor sit amet consectetur 111adipisicing elit. Tempore praesentium, maxime asperiores explicabo aliquid ea debitis minima totam est
                            </p>
                        </div>
                        <div class="exShow-item exShow-item-2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur000 adipisicing elit. Tempore praesentium, maxime asperiores explicabo aliquid ea debitis minima totam est
                            </p>
                        </div>
                        <div class="exShow-item exShow-item-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur 878789adipisicing elit. Tempore praesentium, maxime asperiores explicabo aliquid ea debitis minima totam est
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="middleland p-4"></div>
        </div>
    </section>
    <!-- ---------------[experience]----------------- -->
</body>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="custom.js"></script>

</html>