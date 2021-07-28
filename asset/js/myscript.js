$(document).ready(function(){
//megamenu start----
    $(".section_header .main_header .menubar .category").click(function(){
    $(".main_header .cate_menu").toggleClass('active');
    });
//mobile menu---------
    $(".section_header .mobile_header .row .menu_btn").click(function(){
        $(".section_header .mobile_header .row .menu_btn .menu_icon").toggleClass("animate");
        $(".section_header .toggle_menu").slideToggle(500).toggleClass("active");
    });


    $(".section_header .toggle_menu ul li button.btn_bed").click(function(){
        $(".section_header .toggle_menu ul .sub_menu1").slideToggle().toggleClass("active");
        $(".section_header .toggle_menu ul li button.btn_bed i.fa-minus").toggleClass("active");
        $(".section_header .toggle_menu ul li button.btn_bed i.fa-plus").toggleClass("active");
    });

    $(".section_header .toggle_menu ul li button.living_room").click(function(){
        $(".section_header .toggle_menu ul .sub_menu2").slideToggle().toggleClass("active");
        $(".section_header .toggle_menu ul li button.living_room i.fa-minus").toggleClass("active");
        $(".section_header .toggle_menu ul li button.living_room i.fa-plus").toggleClass("active");
    });

    $(".section_header .toggle_menu ul li button.kitchen").click(function(){
        $(".section_header .toggle_menu ul .sub_menu3").slideToggle().toggleClass("active");
        $(".section_header .toggle_menu ul li button.kitchen i.fa-minus").toggleClass("active");
        $(".section_header .toggle_menu ul li button.kitchen i.fa-plus").toggleClass("active");
    });

    $(".section_header .toggle_menu ul li button.lighting").click(function(){
        $(".section_header .toggle_menu ul .sub_menu4").slideToggle().toggleClass("active");
        $(".section_header .toggle_menu ul li button.lighting i.fa-minus").toggleClass("active");
        $(".section_header .toggle_menu ul li button.lighting i.fa-plus").toggleClass("active");
    });

    $(".section_header .toggle_menu ul li button.furniture").click(function(){
        $(".section_header .toggle_menu ul .sub_menu5").slideToggle().toggleClass("active");
        $(".section_header .toggle_menu ul li button.furniture i.fa-minus").toggleClass("active");
        $(".section_header .toggle_menu ul li button.furniture i.fa-plus").toggleClass("active");
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    //margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        500:{
            items:2,
        },
        800:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            //loop:false
        }
    }
})