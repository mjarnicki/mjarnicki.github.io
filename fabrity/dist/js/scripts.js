"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var hidePasswordFlag = false;
  var showPasswordButtonsList = document.querySelectorAll('.form__show-password-button');
  var formContainer = document.querySelector('.form__container');

  var _iterator = _createForOfIteratorHelper(showPasswordButtonsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.addEventListener('click', function (event) {
        event.preventDefault();
        var showPasswordbutton = event.target.closest('.form__show-password-button');
        var passwordInput = showPasswordbutton.previousElementSibling;

        if (hidePasswordFlag) {
          passwordInput.type = "password";
          showPasswordbutton.setAttribute("aria-label", 'pokaż hasło');
          showPasswordbutton.classList.remove('form__show-password-button--visible');
        } else {
          passwordInput.type = "text";
          showPasswordbutton.setAttribute("aria-label", 'ukryj hasło');
          showPasswordbutton.classList.add('form__show-password-button--visible');
        }

        hidePasswordFlag = !hidePasswordFlag;
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector('.login-submit').addEventListener('click', validateForm);
  document.querySelector('.register-submit').addEventListener('click', validateForm); // form navigation

  var _iterator2 = _createForOfIteratorHelper(formContainer.querySelectorAll('[data-target]')),
      _step2;

  try {
    var _loop = function _loop() {
      var button = _step2.value;
      var formNodeList = formContainer.children;
      button.addEventListener('click', function (event) {
        event.preventDefault();

        if (button.getAttribute('type') && button.parentNode.checkValidity() || !button.getAttribute('type')) {
          var _iterator3 = _createForOfIteratorHelper(formNodeList),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var formElement = _step3.value;

              var _iterator4 = _createForOfIteratorHelper(formElement.querySelectorAll('input')),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var input = _step4.value;
                  input.value = null;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              formElement.classList.add('d-none');
              formElement.classList.remove('form__validate');

              if (formElement.getAttribute('id') === button.getAttribute('data-target')) {
                formElement.classList.remove('d-none');
                formElement.querySelectorAll('input, button')[0].focus();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

function validateForm(event) {
  event.preventDefault();
  var formContainer = event.target.parentNode;
  var formValidity = formContainer.checkValidity();

  if (!formValidity) {
    formContainer.querySelector('input:invalid').focus();
    formContainer.classList.add('form__validate');
  }
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector('body');
  var parent = document.querySelector('.header__container');
  var contrastIcon = document.querySelector('.contrast-icon');
  var hamburgerIcon = parent.querySelector('.hamburger__container');
  var mobileMenuContainer = parent.querySelector('.header__mobile-menu');
  var mobileMenuItem = mobileMenuContainer.querySelectorAll('.header__menu-item');
  var desktopMenuContainer = parent.querySelector('.header__desktop-menu');
  var desktopMenuItem = desktopMenuContainer.querySelectorAll('.header__menu-item'); // toggle contrast

  if (localStorage.contrast) {
    body.classList.add('contrast');
  }

  contrastIcon.addEventListener('click', function () {
    if (localStorage.contrast) {
      body.classList.remove('contrast');
      localStorage.setItem('contrast', '');
    } else {
      body.classList.add('contrast');
      localStorage.setItem('contrast', true);
    }
  }); // header shrink

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 80) {
      parent.classList.add('header__container--shrink');
    } else if (window.pageYOffset <= 80) {
      parent.classList.remove('header__container--shrink');
    }
  }); // toggle HamburgerMenu events

  hamburgerIcon.addEventListener('click', function () {
    toggleMobileMenu();
  }); // move to page section events for mobile

  var _iterator = _createForOfIteratorHelper(mobileMenuItem),
      _step;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      item.addEventListener('click', function (event) {
        toggleMobileMenu();
        scrollToPageSection(event, item, 60);
      });
      item.addEventListener('keypress', function (event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
          toggleMobileMenu();
          scrollToPageSection(event, item, 60);
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // move to page section events for desktop

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(desktopMenuItem),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var item = _step2.value;
      item.addEventListener('click', function (event) {
        scrollToPageSection(event, item, 120);
      });
      item.addEventListener('keypress', function (event) {
        if (event.keyCode == 32 || event.keyCode == 13) scrollToPageSection(event, item, 120);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    } // mark active element depending on scroll position TODO
    // functions

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  function toggleMobileMenu() {
    body.classList.toggle('overflow-hidden');
    hamburgerIcon.classList.toggle('hamburger__container--active');
    mobileMenuContainer.classList.toggle('header__mobile-menu--active');

    var _iterator3 = _createForOfIteratorHelper(mobileMenuContainer.querySelectorAll('.header__menu-item')),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var el = _step3.value;
        if (el.getAttribute('tabindex')) el.removeAttribute('tabindex');else el.setAttribute("tabindex", -1);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    trapFocus(parent);
  }
});

function scrollToPageSection(event, item, offset) {
  event.preventDefault();
  var targetId = item.getAttribute('href');
  var target = document.querySelector(targetId);
  var offsetTop = target.offsetTop - offset;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
  setTimeout(function () {
    return target.querySelector('a, button').focus();
  }, 800);
}

function trapFocus(element) {
  var focusableEls = element.querySelectorAll('.focus-trap');
  var firstFocusableEl = focusableEls[0];
  var lastFocusableEl = focusableEls[focusableEls.length - 1];
  var KEYCODE_TAB = 9;
  element.addEventListener('keydown', function (e) {
    var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey)
      /* shift + tab */
      {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else
      /* tab */
      {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
  });
}
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var publicationsContainer = document.querySelector('#publications-to-paste');
  var loaderContainer = document.querySelector('.publications__loader');
  var loaderButton = document.querySelector('.publications__load-more');
  publicationsInitialLoad(publicationsContainer, loaderContainer);
  loaderButton.addEventListener('click', function () {
    publicationsNextLoad(publicationsContainer, loaderContainer);
  });
});

function publicationsInitialLoad(publicationsContainer, loaderContainer) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var publicationList = JSON.parse(this.response);
      var initialPublicationsContainer = "\n                <div class=\"row px-1\">\n                    <div class=\"col-12 col-md-6\" id=\"publications-left-column\">\n                        ".concat(generatePublicationHTML(publicationList[0], 0), "\n                        ").concat(generatePublicationHTML(publicationList[2], 2), "\n                    </div>\n                    <div class=\"col-12 col-md-6\" id=\"publications-right-column\">\n                        ").concat(generatePublicationHTML(publicationList[1], 1), "\n                    </div>\n                </div>\n                <div class=\"row px-1\">\n                    <div class=\"col-12 col-md-6\" id=\"publications-left-column\">\n                        ").concat(generatePublicationHTML(publicationList[3], 3), "\n                    </div>\n                    <div class=\"col-12 col-md-6\" id=\"publications-right-column\">\n                        ").concat(generatePublicationHTML(publicationList[4], 4), "\n                    </div>\n                </div>");
      publicationsContainer.insertAdjacentHTML('beforeend', initialPublicationsContainer);
      loaderContainer.classList.add('d-none');
    }
  };

  xhttp.open("GET", "https://my-json-server.typicode.com/TomaszJaworski/test-api/news", true);
  xhttp.send();
}

function publicationsNextLoad(publicationsContainer, loaderContainer) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 1) {
      loaderContainer.classList.remove('d-none');
    }

    if (this.readyState == 4 && this.status == 200) {
      var loadedPublications = publicationsContainer.querySelectorAll('.publications__release').length;
      var publicationList = JSON.parse(this.response);
      var nextPublicationsContainer = "\n                <div class=\"row px-1\">\n                    <div class=\"col-12 col-md-6\" id=\"publications-left-column\">\n                        ".concat(generatePublicationHTML(publicationList[loadedPublications], loadedPublications), "\n                    </div>\n                    <div class=\"col-12 col-md-6\" id=\"publications-right-column\">\n                        ").concat(generatePublicationHTML(publicationList[loadedPublications + 1], loadedPublications + 1), "\n                    </div>\n                </div>");
      publicationsContainer.insertAdjacentHTML('beforeend', nextPublicationsContainer);
      loaderContainer.classList.add('d-none');

      if (publicationList.length === loadedPublications + 2) {
        document.querySelector('.publications__load-more').classList.add('d-none');
      }
    }
  };

  xhttp.open("GET", "https://my-json-server.typicode.com/TomaszJaworski/test-api/news", true);
  xhttp.send();
}

function generatePublicationHTML(element, index) {
  var date = new Date(element.date);
  var parsedDate = "".concat(date.getFullYear(), ".").concat(("0" + (date.getMonth() + 1)).slice(-2), ".").concat(("0" + date.getDay()).slice(-2), " ").concat(("0" + date.getHours()).slice(-2), ":").concat(("0" + date.getMinutes()).slice(-2));
  return "\n    <article class=\"publications__release container\">\n        <div class=\"row\">\n            <div class=\"col-6 col-md-12 order-last order-md-first\">\n                <div class=\"publications__release-header\">\n                    <img src=\"dist/images/comas.svg\" class=\"publications__release-commas-icon d-none d-md-block\" alt=\"ikona\">\n                    <h2 class=\"publications__release-title ".concat(index == 0 || index == 1 ? 'mb-2 mb-md-4' : '', "\">\n                        ").concat(element.title, "\n                    </h2>\n                </div>\n                <p class=\"publications__release-date d-none d-md-block\">Data dodania <time>").concat(parsedDate, "</time>.</p>\n            </div>\n            <div class=\"col-6 col-md-12 order-first order-md-last\">\n                <img class=\"publications__release-teaser ").concat(index == 1 ? 'publications__release-teaser--big' : '', "\" src=\"").concat(element.image, "\" alt=\"").concat(element.title, " zajawka\"/>\n            </div>\n        </div>\n        <p class=\"publications__release-content\">").concat(element.text, "</p>\n    </article>");
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slider__img");
  var dotsContainer = document.querySelector(".slider__dots-container");
  var toggleAutoplayButton = document.querySelector(".slider__toggle-autoplay");
  generateDots(slides, dotsContainer);
  var dots = document.querySelectorAll('.slider__dot');
  var sliderLength = dots.length;
  var autoSlideFlag = true;
  var sliderInterval = setInterval(function () {
    return nextSlide(slides, dots);
  }, 4000); // initial slider launch

  changeSlide(1, slides, dots); // change slide with mouse

  dotsContainer.addEventListener('click', function (event) {
    var dotIndex = event.target.getAttribute('index');
    if (dotIndex) changeSlide(dotIndex, slides, dots);
  }); // change slide with keyboard

  dotsContainer.addEventListener('keypress', function (event) {
    if (event.keyCode == 32 || event.keyCode == 13) {
      var dotIndex = event.target.getAttribute('index');
      if (dotIndex) changeSlide(dotIndex, slides, dots);
    }
  }); // toggle auto sliding

  toggleAutoplayButton.addEventListener('click', function () {
    if (!autoSlideFlag) {
      nextSlide(slides, dots);
      sliderInterval = setInterval(function () {
        return nextSlide(slides, dots);
      }, 4000);
      autoSlideFlag = true;
      document.querySelector('.slider__toggle-autoplay--play').classList.toggle('d-none');
      document.querySelector('.slider__toggle-autoplay--pause').classList.toggle('d-none');
      toggleAutoplayButton.setAttribute("aria-label", "zatrzymaj slider");
    } else {
      window.clearInterval(sliderInterval);
      autoSlideFlag = false;
      document.querySelector('.slider__toggle-autoplay--play').classList.toggle('d-none');
      document.querySelector('.slider__toggle-autoplay--pause').classList.toggle('d-none');
      toggleAutoplayButton.setAttribute("aria-label", "uruchom slider");
    }
  });

  function changeSlide(n, slides, dots) {
    var _iterator = _createForOfIteratorHelper(slides),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        item.classList.remove('slider__img--active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(dots),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _item = _step2.value;

        _item.classList.remove('slider__dot--active');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    slides[n - 1].classList.add('slider__img--active');
    dots[n - 1].classList.add('slider__dot--active');
  }

  function nextSlide(slides, dots) {
    var activeDotIndex = document.querySelector('.slider__dot--active').getAttribute('index');
    var activeDotIndexInt = parseInt(activeDotIndex);
    var sliderLength = dots.length;
    if (sliderLength === activeDotIndexInt) changeSlide(1, slides, dots);else changeSlide(activeDotIndexInt + 1, slides, dots);
  }

  function generateDots(slides, dotsContainer) {
    var dotList = '';

    for (var i = 0; i < slides.length; i++) {
      dotList += "<li tabindex=\"0\" role=\"button\" class=\"slider__dot\" index=\"".concat(i + 1, "\" \n             aria-label=\"zmie\u0144 slajd na ").concat(slides[i].getAttribute('alt'), "\">\n        </li>");
    }

    dotsContainer.insertAdjacentHTML('beforeend', dotList);
  }
});