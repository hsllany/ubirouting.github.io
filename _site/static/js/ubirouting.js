var ubirouting = {

	init: function() {
		ubirouting.navUnderline();
		ubirouting.navPulldown();
		ubirouting.enginesAnimate();
		ubirouting.timeLine();
		ubirouting.blogAddline();
		ubirouting.switchLang();
		ubirouting.indexQr();
		ubirouting.footerQr();
	},

	navUnderline: function() {
		$(".nav .item").hover(
			function() {
				$(this).find('.underline').show();
			},
			function() {
				$(this).find('.underline').hide();
			}
		);
		$('#doc ul li:last-child i, #product ul li:last-child i, #about ul li:last-child i').css({
			'background': '#00baf0'
		});
		$('#doc ul:last-child li:last-child i, #product ul:last-child li:last-child i, #about ul:last-child li:last-child i').css({
			'background': 'none'
		});
	},

	navPulldown: function() {
		$(".nav #doc, .nav #product, .nav #about").hover(
			function() {
				$(this).children('a').addClass('current');
				$(this).children('.arrow').addClass('rotate');
				$(this).children('.pull').show();
			},
			function() {
				$(this).children('a').removeClass('current');
				$(this).children('.arrow').removeClass('rotate');
				$(this).children('.pull').hide();
			}
		);
	},

	videoLayer: function(o) {
		$('.banner').append('<div class="video-layer"><div class="embed-obj"><embed src="' + (o.address) + '"allowFullScreen="false" quality="high" width="860" height="' + (o.height) + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed></div></div>');
		ubirouting.playerAligin();
		$(window).resize(ubirouting.playerAligin);
		$('.video-layer').click(function() {
			$(this).remove();
		});
	},

	playerAligin: function() {
		var player = $('.embed-obj');
		var height = player.height();
		var Margintop = ($(window).height() - height) / 2;
		player.css({
			'margin-top': Margintop
		});
	},

	magExt: function() {
		$('.mag').css({
			zIndex: '102'
		});

		$('.mag-box').animate({
			width: '708'
		}, 500, function() {
			$('.mag-box').find('ul').fadeIn(200);
		});

		$('.mag').find('.text').animate({
			width: '364'
		}, 500);

		$('.icon-mag').animate({
			left: '77'
		}, 500);

		$('.mag-box').find('p').fadeOut(500);

		$('.mag-box').find('.blue-line').show(500);

		$('.mag-box').find('.l-line').animate({
			top: '45',
			left: '139'
		}, 500);

		$('.mag-box').find('.r-line').animate({
			top: '45',
			right: '139'
		}, 500);

		$('.mag').find('.layer').fadeOut(500);
	},

	magShk: function() {
		$('.mag').css({
			zIndex: '100'
		});

		$('.mag-box').find('ul').fadeOut(200);

		$('.mag-box').find('p').fadeIn(500);

		$('.mag-box').animate({
			width: '256'
		}, 500);

		$('.mag-box').find('.l-line').animate({
			top: '20',
			left: '30'
		}, 500);

		$('.mag-box').find('.r-line').animate({
			top: '20',
			right: '30'
		}, 500);

		$('.mag-box').find('.blue-line').hide(500);

		$('.icon-mag').animate({
			left: '25'
		}, 500);

		$('.mag').find('.text').animate({
			width: '256'
		}, 500);

		$('.mag').find('.layer').fadeIn(500);
	},

	magReset: function() {
		$('.mag').css({
			zIndex: '100'
		});

		$('.mag-box').animate({
			width: '364'
		}, 500);

		$('.mag-box').find('.text').animate({
			width: '364'
		}, 500);

		$('.icon-mag').animate({
			left: '77'
		}, 500);

		$('.mag-box').find('ul').fadeOut(200);

		$('.mag-box').find('p').fadeIn(500);

		$('.mag-box').find('.blue-line').hide(500);

		$('.mag-box').find('.l-line').animate({
			top: '20',
			left: '90'
		}, 500);

		$('.mag-box').find('.r-line').animate({
			top: '20',
			right: '90'
		}, 500);

		$('.mag').find('.layer').fadeOut(500);
	},

	wifiExt: function() {
		$('.wifi').css({
			zIndex: '102',
		});

		$('.wifi').animate({
			left: '246',
		});

		$('.wifi-box').animate({
			width: '708'
		}, 400, function() {
			$('.wifi-box').find('ul').fadeIn(200);
		});

		$('.wifi').find('.text').animate({
			width: '364'
		}, 500);

		$('.icon-wifi').animate({
			left: '77'
		}, 500);

		$('.wifi-box').find('p').fadeOut(500);

		$('.wifi-box').find('.green-line').show(500);

		$('.wifi-box').find('.l-line').animate({
			top: '45',
			left: '139'
		}, 500);

		$('.wifi-box').find('.r-line').animate({
			top: '45',
			right: '139'
		}, 500);

		$('.wifi').find('.layer').fadeOut(500);
	},

	wifiShkLeft: function() {
		$('.wifi').css({
			zIndex: '101'
		});

		$('.wifi').animate({
			left: '246'
		}, 500);

		$('.wifi-box').animate({
			width: '256'
		}, 500);

		$('.wifi-box').find('ul').fadeOut(200);

		$('.wifi-box').find('p').fadeIn(500);

		$('.wifi').find('.l-line').animate({
			top: '20',
			left: '40'
		}, 500);

		$('.wifi').find('.r-line').animate({
			top: '20',
			right: '40'
		}, 500);

		$('.wifi').find('.green-line').hide(500);

		$('.icon-wifi').animate({
			left: '25'
		}, 500);

		$('.wifi').find('.text').animate({
			width: '256'
		}, 500);

		$('.wifi').find('.layer').fadeIn(500);
	},

	wifiShkRight: function() {
		$('.wifi').css({
			zIndex: '101'
		});

		$('.wifi').animate({
			left: '698'
		}, 500);

		$('.wifi-box').find('ul').fadeOut(200);

		$('.wifi-box').find('p').fadeIn(500);

		$('.wifi').find('.l-line').animate({
			top: '20',
			left: '40'
		}, 500);

		$('.wifi').find('.r-line').animate({
			top: '20',
			right: '40'
		}, 500);

		$('.wifi').find('.green-line').hide(500);

		$('.wifi-box').animate({
			width: '256'
		}, 500);

		$('.icon-wifi').animate({
			left: '25'
		}, 500);

		$('.wifi').find('.text').animate({
			width: '256'
		}, 500);

		$('.wifi').find('.layer').fadeIn(500);
	},

	wifiReset: function() {
		$('.wifi').css({
			zIndex: '100'
		});

		$('.wifi').animate({
			left: '419',
		});

		$('.wifi-box').animate({
			width: '364'
		}, 500);

		$('.wifi').find('.text').animate({
			width: '364'
		}, 500);

		$('.wifi-box').find('ul').fadeOut(250);

		$('.wifi-box').find('p').fadeIn(500);

		$('.icon-wifi').animate({
			left: '77'
		}, 500);

		$('.wifi-box').find('.green-line').hide(500);

		$('.wifi-box').find('.l-line').animate({
			top: '20',
			left: '90'
		}, 500);

		$('.wifi-box').find('.r-line').animate({
			top: '20',
			right: '90'
		}, 500);

		$('.wifi').find('.layer').fadeOut(500);
	},

	ibeaconExt: function() {
		$('.ibeacon').css({
			zIndex: '102'
		});

		$('.ibeacon-box').animate({
			width: '708'
		}, 500, function() {
			$('.ibeacon-box').find('ul').fadeIn(200);
		});

		$('.ibeacon-box').find('p').fadeOut(500);

		$('.ibeacon-box').find('.text').animate({
			width: '364'
		}, 500);

		$('.icon-ibeacon').animate({
			left: '77'
		}, 500);

		$('.ibeacon-box').find('.red-line').show(500);

		$('.ibeacon-box').find('.l-line').animate({
			top: '45',
			left: '139'
		}, 500);

		$('.ibeacon-box').find('.r-line').animate({
			top: '45',
			right: '139'
		}, 500);

		$('.ibeacon').find('.layer').fadeOut(500);
	},

	ibeaconShk: function() {
		$('.ibeacon').css({
			zIndex: '100'
		});

		$('.ibeacon-box').animate({
			width: '256'
		}, 500);

		$('.ibeacon-box').find('ul').fadeOut(200);

		$('.ibeacon-box').find('p').fadeIn(500);

		$('.ibeacon').find('.l-line').animate({
			top: '20',
			left: '30'
		}, 500);

		$('.ibeacon').find('.r-line').animate({
			top: '20',
			right: '30'
		}, 500);

		$('.ibeacon-box').find('.red-line').hide(500);

		$('.icon-ibeacon').animate({
			left: '25'
		}, 500);

		$('.ibeacon').find('.text').animate({
			width: '256'
		}, 500);

		$('.ibeacon').find('.layer').fadeIn(500);
	},

	ibeaconReset: function() {
		$('.ibeacon').css({
			zIndex: '100'
		});

		$('.ibeacon-box').animate({
			width: '364'
		}, 500);

		$('.ibeacon-box').find('.text').animate({
			width: '364'
		}, 500);

		$('.icon-ibeacon').animate({
			left: '77'
		}, 500);

		$('.ibeacon-box').find('ul').fadeOut(200);

		$('.ibeacon-box').find('p').fadeIn(500);

		$('.ibeacon-box').find('.red-line').hide(500);

		$('.ibeacon-box').find('.l-line').animate({
			top: '20',
			left: '80'
		}, 500);

		$('.ibeacon-box').find('.r-line').animate({
			top: '20',
			right: '80'
		}, 500);

		$('.ibeacon').find('.layer').fadeOut(500);
	},

	enginesAnimate: function() {
		var aniElement = $('.engines *');

		$('.mag-box').mouseenter(function() {
			aniElement.stop();
			ubirouting.wifiShkRight();
			ubirouting.ibeaconShk();
			ubirouting.magExt();
		});

		$('.wifi-box').mouseenter(function() {
			aniElement.stop();
			ubirouting.magShk();
			ubirouting.ibeaconShk();
			ubirouting.wifiExt();
		});

		$('.ibeacon-box').mouseenter(function() {
			aniElement.stop();
			ubirouting.magShk();
			ubirouting.wifiShkLeft();
			ubirouting.ibeaconExt();
		});

		$('.reset-layer').mouseenter(function() {
			aniElement.stop();
			ubirouting.magReset();
			ubirouting.wifiReset();
			ubirouting.ibeaconReset();
		});
	},

	o2oIcoup: function() {
		var icons = $('.icon-bigdata, .icon-location, .icon-rail, .icon-navi');
		icons.fadeIn(500);
		icons.animate({
			bottom: '105'
		}, 500);
	},

	o2oIcodown: function() {
		var icons = $('.icon-bigdata, .icon-location, .icon-rail, .icon-navi');
		icons.animate({
			bottom: '-157'
		}, 200);
		icons.fadeOut(200);
	},

	blogAddline: function() {
		$('.blogs .item:nth-child(odd)').addClass('odd');
		$('.blogs .item:nth-child(even)').addClass('even');
	},

	switchLang: function() {
		$('.switchlang .curlang').click(function() {
			if ($(this).next('ul').css('display') == 'none') {
				$(this).next('ul').show();
			} else {
				$(this).next('ul').hide();
			}
		});
		$('.switchlang li').click(function() {
			$(this).parent('ul').hide();
			$('.curlang .text').html($(this).text());
		});
	},

	timeLine: function() {
		var aniElement = $('.time-line, .time-line *');
		$('.time-line .point').hover(function() {
			$(this).find('.icon-hollow').hide(100);
			$(this).find('.icon-solid').show(100);
			$(this).addClass('current');
		}, function() {
			aniElement.stop(true, true);
			$(this).find('.icon-hollow').show(100);
			$(this).find('.icon-solid').hide(100);
			$(this).removeClass('current');
		});
	},

	indexQr: function() {
		$('.index-qr').hover(function() {
				$(this).find('.wechat').show();
			},
			function() {
				$(this).find('.wechat').hide();
			});
	},

	footerQr: function() {
		$('.footer .wechat').hover(function() {
				$('.wechat-float').show();
			},
			function() {
				$('.wechat-float').hide();
			});
	}

};

(function($) {
	$.fn.textSlider = function(settings) {
		settings = jQuery.extend({
			speed: "normal",
			line: 1,
			timer: 1000
		}, settings);
		return this.each(function() {
			$.fn.textSlider.scllor($(this), settings);
		});
	};
	$.fn.textSlider.scllor = function($this, settings) {
		//alert($this.html());
		var ul = $("ul:eq(0)", $this);
		var timerID;
		var li = ul.children();
		var _btnUp = $(".up:eq(0)", $this);
		var _btnDown = $(".down:eq(0)", $this);
		var liHight = $(li[0]).height();
		var upHeight = 0 - settings.line * liHight; //滚动的高度；
		var scrollUp = function() {
			_btnUp.unbind("click", scrollUp);
			ul.animate({
				marginTop: upHeight
			}, settings.speed, function() {
				for (i = 0; i < settings.line; i++) {
					//$(li[i]).appendTo(ul);
					ul.find("li:first").appendTo(ul);
					// alert(ul.html());
				}
				ul.css({
					marginTop: 0
				});
				_btnUp.bind("click", scrollUp); //Shawphy:绑定向上按钮的点击事件
			});
		};
		var scrollDown = function() {
			_btnDown.unbind("click", scrollDown);
			ul.css({
				marginTop: upHeight
			});
			for (i = 0; i < settings.line; i++) {
				ul.find("li:last").prependTo(ul);
			}
			ul.animate({
				marginTop: 0
			}, settings.speed, function() {
				_btnDown.bind("click", scrollDown); //Shawphy:绑定向上按钮的点击事件
			});
		};
		var autoPlay = function() {
			timerID = window.setInterval(scrollUp, settings.timer);
			//alert(settings.timer);
		};
		var autoStop = function() {
			window.clearInterval(timerID);
		};
		//事件绑定
		ul.hover(autoStop, autoPlay).mouseout();
		_btnUp.css("cursor", "pointer").click(scrollUp);
		_btnUp.hover(autoStop, autoPlay);
		_btnDown.css("cursor", "pointer").click(scrollDown);
		_btnDown.hover(autoStop, autoPlay);
	};
})(jQuery);

$(function() {
	ubirouting.init();
});