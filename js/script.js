let overlay = $(".j-overlay");

/* --- search --- */
let searchBox = $(".j-search"),
    searchResetBtn = $(".j-search-reset"),
    searchResult = $(".j-search-result");


searchBox.focus(function () {
    overlay.addClass("is-active");
    $(this).addClass("is-active");
    searchResult.addClass("is-active");
});

searchReset()

function searchReset() {
    if (searchBox.val()) {
        searchResetBtn.removeClass("hidden");
    } else {
        searchResetBtn.addClass("hidden");
    }
}

searchResetBtn.on("click", function () {
    searchBox.val('');
    searchReset();
});

searchBox.on("keyup focus", function () {
    searchReset();
});

searchBox.blur(function () {
    setTimeout(() => {
        searchResult.removeClass("is-active");
        overlay.removeClass("is-active");
        $(this).removeClass("is-active");
    }, 200);
});

let profileBtnValue = $(".j-profile > span");
profileBtnValue.text(profileBtnValue.text().slice(0, 20));

let navLink = $(".j-nav-item"), navLinkHoverEffect = $(".j-nav-hover");


let moveHover = function (self) {
    let parent = self.parent().parent().parent();

    navLinkHoverEffect
        .css("width", self.width() + 30)
        .css(
            "right",
            parent.width() - 30 -
            (self.offset().left + self.width()) +
            parent.offset().left
        );
    navLinkHoverEffect.css("transform", "scaleX(1)");
}

let removeHover = function () {
    navLinkHoverEffect.css("transform", "scaleX(0)");
};

navLink.hover(function () {
    moveHover.call(this, $(this));
}, function () {
    removeHover.call(this, $(this));
});

let megaMenu = $(".j-mega-menu"),
    megaMenuBox = $(".j-mega-menu_results"),
    megaMenuCategory = $(".j-mega-menu_category"),
    megaMenuListOption = $(".j-mega-menu_list-option");

megaMenu.hover(function () {
    megaMenuBox.css("top", 45)
        .css("opacity", 1).css("visibility", "visible");//transition: all 0.3s ease;
    overlay.addClass("is-active");
}, function () {
    megaMenuBox.css("top", 60)
        .css("opacity", 0).css("visibility", "hidden");
    overlay.removeClass("is-active");
});

megaMenuCategory.hover(function () {
    megaMenuCategory.removeClass("is-active");
    megaMenuListOption.removeClass("is-active");

    let id = $(this).attr("id");
    let idOption = id + "-list";
    $("#" + idOption).addClass("is-active");

    $(this).addClass("is-active");
});

let emailMarketingInput = $(".j-emailMarketing-input"),
    emailMarketingBtn = $(".j-emailMarketing-btn");

setInterval(function () {
    if (emailMarketingInput.val().length >= 2) {
        emailMarketingBtn.addClass("is-active");
    } else {
        emailMarketingBtn.removeClass("is-active");
    }
}, 200);

let footerHistoryBtn = $(".j-footer-history-btn"),
    footerHistoryMore = $(".j-footer-history-article .c-footer_history-more");

footerHistoryBtn.click(function () {
    if (footerHistoryBtn.hasClass("c-footer_history-showMore")) {
        $(this).removeClass("c-footer_history-showMore").addClass("c-footer_history-hideMore");
        $(this).text("بستن");
        footerHistoryMore.slideDown(900);
    } else {
        $(this).removeClass("c-footer_history-hideMore").addClass("c-footer_history-showMore");
        $(this).text("مشاهده بیشتر");
        footerHistoryMore.slideUp(900);
    }
});

/*--------------------------------------------slider -----------------------------*/


let slider = $(".j-slider"),
    sliderPrevBtn = $(".j-slider_prev-btn"),
    sliderNextBtn = $(".j-slider_next-btn"),
    sliderPagination = $(".j-slider_pagination");

let index = 0;
lastIndex = slider.children().length;

for (i = 0; i < lastIndex; i++) {
    sliderPagination.append("<span class='c-slider_pagination-bullet j-slider_pagination-bullet'></span>");
}

$(".j-slider_pagination-bullet:first-child").addClass("is-active");

sliderPrevBtn.click(function () {
    index--;
    if (index == -1) {
        index = lastIndex - 1;
    }
    sliderPaginationBullet(index);
    slider.css("transform", "translateX(" + (index * 100) + "%)");
});

sliderNextBtn.click(function () {
    index++;
    if (index == lastIndex) {
        index = 0;
    }
    sliderPaginationBullet(index);
    slider.css("transform", "translateX(" + (index * 100) + "%)");
});

setInterval(() => {
    index++;
    if (index == lastIndex) {
        index = 0;
    }
    sliderPaginationBullet(index);
    slider.css("transform", "translateX(" + (index * 100) + "%)");
}, 10000);

$(".j-slider_pagination-bullet").click(function () {
    let bulletIndex = $(this).index();
    index = bulletIndex;
    slider.css("transform", "translateX(" + (bulletIndex * 100) + "%)");
    sliderPaginationBullet(bulletIndex);
});

function sliderPaginationBullet(index) {
    let sliderBullet = $(".j-slider_pagination-bullet");

    sliderBullet.removeClass("is-active");
    $(sliderBullet[index]).addClass("is-active");
}

/* ---------------------------------------------------------- product slider ------------------------------*/
let productSlider = $(".j-productSlider"),
    productSliderSlide = $(".j-productSlider_slide"),
    productSliderPrevBtn = $(".j-productSlider_prev-btn"),
    productSliderNextBtn = $(".j-productSlider_next-btn");

/*-----------------------------------*/

// let width;
// width = (productSlider.parent().parent().width() - 30) / 4;
// productSliderSlide.css("min-width", width);
// console.log(productSliderSlide.width());

/*----------------------------------*/

let widthSlide = productSliderSlide.width() + 15,
    indexSize = 1,
    slideNumber = productSlider.children().length;

productSliderPrevBtn.click(function () {
    if (indexSize != 0) {
        indexSize--;
        productSlider.css("transform", "translateX(" + (widthSlide * indexSize) + "px)");
        productSliderNextBtn.removeClass("is-disable");
        $(this).removeClass("is-disable");
    } else {
        $(this).addClass("is-disable");
    }
});

productSliderNextBtn.click(function () {
    if (indexSize != slideNumber - 3) {
        productSlider.css("transform", "translateX(" + (widthSlide * indexSize) + "px)");
        indexSize++;
        $(this).removeClass("is-disable");
        productSliderPrevBtn.removeClass("is-disable");
    } else {
        $(this).addClass("is-disable");
    }
});


function scrollingSlider() {
}


/**
 * resize slider number
 * 1) auto slide
 * 2) touch mode
 *
 * */