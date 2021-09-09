/*!/wp-content/themes/infinxt/framework/js/custom.js*/
jQuery.noConflict();jQuery(document).ready(function($){"use strict";var currentWidth=window.innerWidth||document.documentElement.clientWidth;if(dttheme_urls.loadingbar==="enable"){Pace.on("done",function(){$(".pre-loader").fadeOut(500);$(".pace").remove()})}
if($('#header-wrapper').hasClass('header-top-absolute')){var header_height=$('#header-wrapper').find('#header').outerHeight();var breadcrumb_height=$('#header-wrapper').find('.main-title-section-wrapper').outerHeight();var total_height=parseFloat(header_height)+parseFloat(breadcrumb_height);$('#header-wrapper').find('.main-title-section-bg').css('height',total_height)}
if(currentWidth>991){$('.dt-sc-sticky-content').each(function(e){stickyContent($(this),$)})}
if($("#header-wrapper .apply-sticky-header").length>0){var $window=$(window),lastScrollTop=0,st;$(window).on('scroll',function(){st=$(this).scrollTop();if(0<st){$("#header-wrapper .apply-sticky-header").addClass('dt-header-top')}else{$("#header-wrapper .apply-sticky-header").removeClass('dt-header-top')}
if(st<lastScrollTop||$window.width()<992){if(0===st){$("#header-wrapper .apply-sticky-header").removeClass('dt-header-scroll')}else{$("#header-wrapper .apply-sticky-header").addClass('dt-header-scroll')}}else{$("#header-wrapper .apply-sticky-header").removeClass('dt-header-scroll')}
lastScrollTop=st}).trigger('scroll')}
function megaMenu(){if($("#header .container").length){var $header=$("#header .container").offset().left;$("li.has-mega-menu").each(function(){var $parent=$(this),$parent_left=$parent.offset().left,$sub_menu=$parent.children("ul.sub-menu"),$section=$sub_menu.find('section');if($section.hasClass('elementor-section-stretched')){$sub_menu.css('left',-$parent_left)}else{$sub_menu.css('left',($header-$parent_left))}})}}
megaMenu();$(window).on("resize",function(){megaMenu()});$("div.dt-header-menu").each(function(){var d=$(this).data('menu'),c=$(this).find('ul[data-menu="'+d+'"]').clone(),m=$('body').find('.mobile-menu[data-menu="'+d+'"]');$('[data-animation]',c).each(function(ix,ele){var $classes=$(ele).attr("class"),$animation=$(ele).attr("data-animation");$classes=$classes.replace($animation,'');$(ele).attr("class",$classes)});c.prependTo(m)});$('.menu-trigger').on('click',function(event){$(this).next('.mobile-menu').toggleClass('nav-is-visible');$(this).parent('.mobile-nav-container').find('.overlay').toggleClass('is-visible');$('body').toggleClass('nav-is-visible')});function closeMobNav(){$('body').removeClass('nav-is-visible');$('.overlay').removeClass('is-visible');$('.mobile-menu').removeClass('nav-is-visible');$('.menu-item-has-children a').removeClass('selected');$('.menu-item-has-children ul.sub-menu').addClass('is-hidden')}
$('li.close-nav').on('click',function(event){closeMobNav()});$('.mobile-nav-container > .overlay').on('click',function(event){closeMobNav()});$('.menu-item-has-children > a, .page_item_has_children > a').on('click',function(event){if($('body').hasClass('nav-is-visible')){event.preventDefault();var a=$(this).clone();$(this).next('.sub-menu').find('.see-all').html(a)}
var selected=$(this);if(selected.next('ul').hasClass('is-hidden')){selected.addClass('selected').next('ul.sub-menu').removeClass('is-hidden')}else{selected.removeClass('selected').next('ul.sub-menu').addClass('is-hidden')}});$('.go-back').on('click',function(){$(this).parent('ul:not(.menu)').addClass('is-hidden')});if($('ul.visual-nav').length>0){$('ul.visual-nav').visualNav({selectedClass:'current_page_item',externalLinks:'external',useHash:!1,})}
if($("div.dt-video-wrap").length){$("div.dt-video-wrap").fitVids()}
if($('a.video-image').length){$('a.video-image').prettyPhoto({animation_speed:'normal',theme:'facebook',slideshow:3000,autoplay_slideshow:!1,social_tools:!1,deeplinking:!1})}
if(currentWidth>767){if($('#primary').hasClass('with-both-sidebar')){if(($('#secondary-left').is(':empty')&&$('#secondary-right').is(':empty'))){$('#primary').css({'width':'100%','margin':0})}}else if($('#primary').hasClass('with-left-sidebar')){if($('#secondary-left').is(':empty')){$('#primary').css({'width':'100%','margin':0})}}else if($('#primary').hasClass('with-right-sidebar')){if($('#secondary-right').is(':empty')){$('#primary').css({'width':'100%','margin':0})}}}
$('#main .sidebar-as-sticky').theiaStickySidebar({additionalMarginTop:70,containerSelector:$('#primary').parent('.container')});if($('.sidenav-sticky').length){$('.sidenav-sticky .side-navigation').theiaStickySidebar({additionalMarginTop:90,containerSelector:$('#primary')})}
$("select").each(function(){if(!$(this).parents('body').hasClass('woocommerce-cart')&&!$(this).parents('body').hasClass('woocommerce-checkout')){if($(this).css('display')!='none'){$(this).wrap('<div class="selection-box"></div>')}}else if($(this).parents('section').hasClass('secondary-sidebar')){if($(this).css('display')!='none'){$(this).wrap('<div class="selection-box"></div>')}}});$('.activity-type-tabs > ul >li:first').addClass('selected');$('.dir-form > .item-list-tabs > ul > li:first').addClass('selected');$('.downcount').each(function(){var el=$(this);el.downCount({date:el.attr('data-date'),offset:el.attr('data-offset')})});$('p:empty').each(function(){$(this).next('br').remove();$(this).remove()});$(window).on("resize",function(){if($(".apply-isotope").length){$(".apply-isotope").isotope({itemSelector:'.column',transformsEnabled:!1,masonry:{columnWidth:'.grid-sizer'}})}});$(".dt-like-this").on('click',function(){var el=jQuery(this);if(el.hasClass('liked')){return!1}
var post={action:'infinxt_likes_ajax',post_id:el.attr('data-id')};$.post(dttheme_urls.ajaxurl,post,function(data){el.find('span').html(data);el.addClass('liked')});return!1});if($('input, textarea').length){$('input, textarea').placeholder()}
$("a.dt-sc-toggle-advanced-options").on('click',function(event){event.preventDefault();var $this=$(this);$this.parents('.wpsl-search').find("div.dt-sc-advanced-options").slideToggle("slow",function(){$this.toggleClass('expanded');if($this.hasClass('expanded')){$this.html(dttheme_urls.advOptions+' <span class="fas fa-angle-up"></span>')}else{$this.html(dttheme_urls.advOptions+' <span class="fas fa-angle-down"></span>')}})});if($(".single-post").length){$(".dt_like_btn a").on("click",function(){var btn=$(this);var post_id=btn.data("postid");var act=btn.data("action");$.ajax({type:"post",url:dttheme_urls.ajaxurl,data:{action:'dt_wp_post_rating_like',nonce:dttheme_urls.wpnonce,post_id:post_id,doaction:act},success:function(data,textStatus,XMLHttpRequest){btn.find('span').text(data)},error:function(MLHttpRequest,textStatus,errorThrown){}});return!1})}
$(".dt_scroll_down a").on('click',function(a){a.preventDefault();var st=0;if(dttheme_urls.stickynav==='enable'){st=90}
$("html, body").stop();$("html, body").animate({scrollTop:$('.entry-details.within-image').offset().top-st},{duration:1000,easing:"easeInOutQuart"})});if(dttheme_urls.enable_totop){$().UItoTop({easingType:'easeOutQuart'})}
if($(".dt-parallax-bg").length){$('.dt-parallax-bg').each(function(){$(this).find('.main-title-section-bg').css('background-position','50% 0px');$(this).find('.main-title-section-bg').on('inview',function(event,visible){if(visible===!0){$(this).parallax("50%",0.3)}})})}
dt_blog_related_article();function dt_blog_related_article(){var $related=$(".related-article");var $relatedflag=$(".related-flag");var effect='auto';if($related.length){$related.mouseenter(function(e){effect='normal';$related.addClass('open');e.preventDefault()}).mouseleave(function(){$related.removeClass('open');e.preventDefault()});$relatedflag.waypoint(function(direction){if(effect=='auto'){if(direction=='up'){$related.removeClass('open')}else{$related.addClass('open')}}},{offset:'100%',context:window})}}
$('.single .entry-thumb.single-preview-img a.mag-pop, a.lightbox-preview-img').magnificPopup({type:'image',closeOnContentClick:!1,closeBtnInside:!1,mainClass:'mfp-with-zoom mfp-img-mobile',image:{verticalFit:!0,titleSrc:function(item){return item.el.attr('title')+' &middot; <a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">image source</a>'}},zoom:{enabled:!0,duration:300,opener:function(element){return element.find('img')}}});$('.alignfull').each(function(){if($(this).parents('body').hasClass('has-gutenberg-blocks')&&$(this).parents('#primary').hasClass('content-full-width')){if($(this).parents('body').hasClass('layout-boxed')){var containerWidth=$('.layout-boxed .wrapper').width();$(this).css('width',containerWidth);var mainLeft=$('#main').offset().left;var primaryLeft=$('#primary').offset().left;var sectionMargin=parseInt(primaryLeft,10)-parseInt(mainLeft,10);var offset=0-sectionMargin;$(this).css('left',offset)}else{var windowWidth=$(window).width();$(this).css('width',windowWidth);var $container='';$container=$(this).parents('.content-full-width');var offset=0-$container.offset().left;$(this).css('left',offset)}}});if($('.wp-block-categories-list').length){$('.wp-block-categories-list').find('li').each(function(){var span_text=$(this).find('span:first').html();$(this).find('span:first').remove()
$('<span>'+span_text+'</span>').insertAfter($(this).find('a:first'))})}});function stickyContent($stickyContent,$){var $sticky=$stickyContent;var $stickyH=$sticky.outerHeight();var $stickyParentContainer=$stickyContent.parents('.elementor-row');var $stickyParentContainerOffset=$stickyParentContainer.offset();var $stickyContainer=$stickyContent.parents('.elementor-column');var $stickyContainerWidth=$stickyContainer.width();var $start=$stickyParentContainerOffset.top;var $limit=$start+$stickyParentContainer.outerHeight();$(window).scroll(function(){if($(window).scrollTop()>$start-10&&$(window).scrollTop()<=$limit-$stickyH-10){$sticky.css({'position':'fixed','width':$stickyContainerWidth,'top':10})}else if($(window).scrollTop()>$limit-$stickyH-10){$sticky.css({'position':'absolute','top':'auto','bottom':0})}else{$sticky.css('position','static')}})}(function($){var dtBlogPostsWidgetHandler=function($scope,$){$(window).on('load',function(){if(($("ul.entry-gallery-post-slider").length)&&($("ul.entry-gallery-post-slider li").length>1)){$("ul.entry-gallery-post-slider").bxSlider({mode:'fade',auto:!1,video:!0,pager:'',autoHover:!0,adaptiveHeight:!1,responsive:!0})}
if($(".apply-isotope").length){$(".apply-isotope").isotope({itemSelector:'.column',transformsEnabled:!1,masonry:{columnWidth:'.grid-sizer'}})}
if($('.tpl-blog-holder.apply-equal-height').length){$(".tpl-blog-holder.apply-equal-height article").matchHeight({property:"min-height"})}});$('.dt-sc-posts-list-wrapper').each(function(){var $page=1;var $T=$(this);var $data="",$content=$T.find('.tpl-blog-holder');var $b=$T.find('.loadmore-btn.more-items');if($b.length){$(document).on('click','.loadmore-btn.more-items',function(){var $this=$($b);var $count=$this.attr('data-count'),$cats=$this.attr('data-cats'),$style=$this.attr('data-style'),$layout=$this.attr('data-layout'),$column=$this.attr('data-column'),$list_type=$this.attr('data-listtype'),$hover=$this.attr('data-hover'),$overlay=$this.attr('data-overlay'),$align=$this.attr('data-align'),$mpages=$this.attr('data-maxpage'),$pos=$this.attr('data-pos'),$eheight=$this.attr('data-eheight'),$meta=$this.attr('data-meta'),$blogpostloadmore_nonce=$this.attr('data-blogpostloadmore-nonce');if($meta!=''){$meta=JSON.parse($meta)}
$content.addClass('loading');if($this.hasClass('more-items')){$page++}
$.ajax({type:"post",dataType:"html",url:dttheme_urls.ajaxurl,data:{action:"infinxt_ajax_load_more_post",count:$count,cats:$cats,pos:$pos,style:$style,layout:$layout,column:$column,pageNumber:$page,listtype:$list_type,hover:$hover,overlay:$overlay,align:$align,meta:$meta,blogpostloadmore_nonce:$blogpostloadmore_nonce},cache:!0,success:function(data){var $res=data.split('#####$$$$$');if($res.length>0){$content.append($res[0]);$T.find('.loadmore-btn').attr('data-pos',$res[1]);var newbx=$content.find('ul.entry-gallery-post-slider');if(newbx!==null){newbx.bxSlider({mode:'fade',auto:!1,video:!0,pager:'',autoHover:!0,adaptiveHeight:!1,responsive:!0})}
if($eheight==''){$content.css({overflow:'hidden'}).isotope('reloadItems').isotope();$(window).trigger('resize')}
if(parseInt($page)>=parseInt($mpages)){$T.find('.loadmore-btn').removeClass('more-items').html('All Posts Loaded')}else{$T.find('.loadmore-btn').addClass('more-items')}}
$content.removeClass('loading')},error:function(jqXHR,textStatus,errorThrown){$content.html('No More Posts Found')}});return!1})}
$(window).scroll(function(){var $c=$T.find('.infinite-btn.more-items');var ST=$(window).scrollTop();var DH=$(document).height();var WH=$(window).height();if((parseInt(ST)==parseInt(DH)-parseInt(WH))&&$c.length>0){var $count=$c.attr('data-count'),$cats=$c.attr('data-cats'),$style=$c.attr('data-style'),$layout=$c.attr('data-layout'),$column=$c.attr('data-column'),$list_type=$c.attr('data-listtype'),$hover=$c.attr('data-hover'),$overlay=$c.attr('data-overlay'),$align=$c.attr('data-align'),$mpages=$c.attr('data-maxpage'),$pos=$c.attr('data-pos'),$eheight=$c.attr('data-eheight'),$meta=$c.attr('data-meta'),$blogpostloadmore_nonce=$c.attr('data-blogpostloadmore-nonce');if($meta!=''){$meta=JSON.parse($meta)}
$content.addClass('loading');$page++;$.ajax({type:"post",dataType:"html",url:dttheme_urls.ajaxurl,data:{action:"infinxt_ajax_load_more_post",count:$count,cats:$cats,pos:$pos,style:$style,layout:$layout,column:$column,pageNumber:$page,listtype:$list_type,hover:$hover,overlay:$overlay,align:$align,meta:$meta,blogpostloadmore_nonce:$blogpostloadmore_nonce},cache:!0,success:function(data){var $res=data.split('#####$$$$$');if($res.length>0){$content.append($res[0]);$T.find('.infinite-btn').attr('data-pos',$res[1]);var newbx=$content.find('ul.entry-gallery-post-slider');if(newbx!==null){newbx.bxSlider({mode:'fade',auto:!1,video:!0,pager:'',autoHover:!0,adaptiveHeight:!1,responsive:!0})}
if($eheight==''){$content.css({overflow:'hidden'}).isotope('reloadItems').isotope();$(window).trigger('resize')}
if(parseInt($page)>=parseInt($mpages)){$c.removeClass('more-items')}}
$content.removeClass('loading')},error:function(jqXHR,textStatus,errorThrown){$content.html('No More Posts Found')}});return!1}})})};var dtBlogRelatedPostsWidgetHandler=function($scope,$){if($(".dt-sc-related-posts.dt-related-carousel").length){$(".dt-sc-related-posts.dt-related-carousel").each(function(){var $min=parseInt($(this).attr('data-items'));if($(window).width()<=767||$('#primary').width()<=570){$min=1}
var prv=$(this).find('.prev-arrow');var nxt=$(this).find('.next-arrow');var pager=$(this).find('.carousel-pager');var $This=$(this).find('.tpl-blog-holder');$This.removeClass('apply-isotope');$This.find('.grid-sizer').remove();$This.carouFredSel({responsive:!0,width:'100%',auto:!1,prev:prv,next:nxt,pagination:pager,height:'variable',items:{width:parseInt(1200/$min),height:'variable',visible:{min:$min}},onCreate:function(){$(window).on("resize",function(){$This.trigger('configuration',['debug',!1,!0])}).trigger('resize')},swipe:{onMouse:!0,onTouch:!0}})})}};var dtLightboxWidgetHandler=function($scope,$){$scope.find('.single .entry-thumb.single-preview-img a.mag-pop, a.lightbox-preview-img').magnificPopup({type:'image',closeOnContentClick:!1,closeBtnInside:!1,mainClass:'mfp-with-zoom mfp-img-mobile',image:{verticalFit:!0,titleSrc:function(item){return item.el.attr('title')+' &middot; <a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">image source</a>'}},zoom:{enabled:!0,duration:300,opener:function(element){return element.find('img')}}})};$(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/dt-blog-posts.default',dtBlogPostsWidgetHandler);elementorFrontend.hooks.addAction('frontend/element_ready/dt-post-related-posts.default',dtBlogRelatedPostsWidgetHandler);elementorFrontend.hooks.addAction('frontend/element_ready/dt-post-feature-image.default',dtLightboxWidgetHandler);elementorFrontend.hooks.addAction('frontend/element_ready/dt-lightbox.default',dtLightboxWidgetHandler)});if(!$('body').hasClass('elementor-page')){dtBlogPostsWidgetHandler(jQuery('body'),jQuery)}
dtBlogRelatedPostsWidgetHandler(jQuery('body'),jQuery);dtLightboxWidgetHandler(jQuery('body'),jQuery)})(jQuery)
;