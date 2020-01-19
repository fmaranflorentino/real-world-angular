import { OwlOptions } from 'ngx-owl-carousel-o';

export const bannerOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 1,
    dotsSpeed: 500,
    dots: true,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: false,
};

export const differentialOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 3,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
            mouseDrag: false,
            touchDrag: false,
        }
    }
};

export const productsOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 4,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: true,
    navText: ["<img src='../../../../assets/img/icons/arrow-back.png'>", "<img src='../../../../assets/img/icons/arrow-next.png'>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        768: {
            items: 4
        }
    }
};

export const storesOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    items: 6,
    dotsSpeed: 500,
    dots: false,
    smartSpeed: 400,
    dragEndSpeed: 350,
    nav: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        768: {
            items: 6
        }
    }
};
