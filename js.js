var randomRelatedIndex, startRelated;
! function(e, t, a) {
	var l = {
		callBack: function() {}
	};
	for (var r in relatedSettings) l[r] = "undefined" == relatedSettings[r] ? l[r] : relatedSettings[r];
	var s = function(e) {
			var l = t.createElement("script");
			l.type = "text/javascript", l.src = e, a.appendChild(l)
		},
		i = function(e, t) {
			return Math.floor(Math.random() * (t - e + 1)) + e
		},
		d = function(e) {
			var t, a, l = e.length;
			if (0 === l) return !1;
			for (; --l;) t = Math.floor(Math.random() * (l + 1)), a = e[l], e[l] = e[t], e[t] = a;
			return e
		},
		n = "object" == typeof labelArray && labelArray.length > 0 ? "/-/" + d(labelArray)[0] : "",
		c = function(e) {
			var t = e.feed.openSearch$totalResults.$t - l.relatedPosts,
				a = i(1, t > 0 ? t : 1);
			s(l.blogURL.replace(/\/$/, "") + "/feeds/posts/summary" + n + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + l.relatedPosts + "&callback=startRelated")
		},
		o = function(e) {
			var t, a, r, s, i, n, c = document.getElementById("related-posts-widget"),
				o = d(e.feed.entry),
				p = l.relatedStyle,
				m = l.relatedHeading + '<ul class="related-posts-' + p + '">',
				u = l.openNewTab ? ' target="_blank"' : "",
				h = l.centerText ? "text-align:center;" : "",
				g = l.roundThumbs ? "-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;" : "",
				b = '<span id="log" style="display:block;clear:both;"></span>';
			if (c) {
				for (var v = 0; v < l.relatedPosts && v != o.length; v++) {
					r = o[v].title.$t, s = "auto" !== l.titleLength && l.titleLength < r.length ? r.substring(0, l.titleLength) + "&hellip;" : r, i = "media$thumbnail" in o[v] && l.thumbnailSize !== !1 ? o[v].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/" + l.thumbnailSize) : l.defaultThumb, t = d(o[v].published.$t);
					for (var f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], k = t.split("-")[2].substring(0, 2), w = t.split("-")[1], x = t.split("-")[0], L = 0; L < f.length; L++)
						if (parseInt(w) == f[L]) {
							w = y[L];
							break
						}
					postdate = w + " " + k + " " + x, n = "summary" in o[v] && l.snippetLength > 0 ? o[v].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, l.snippetLength) + "&hellip;" : "";
					for (var R = 0, $ = o[v].link.length; $ > R; R++) a = "alternate" == o[v].link[R].rel ? o[v].link[R].href : "#";
					1 == p ? m += '<li><a class="ngentot" href="' + a + '" ' + u + ">" + s + "</a></li>" : 2 == p ? m += '<li><a class="ngentot" href="' + a + '" ' + u + '><div class="related-title ngentot">' + s + '</div></a><div class="related-snippets ngentot">' + n + "</div></li>" : 3 == p ? m += '<li class="related-post-item ngentot" style="' + h + '"><a class="ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb-large ngentot" src="' + i + '" style="' + g + '"><div class="related-title ngentot">' + s + '</div></a><div class="related-snippets ngentot">' + n + "</div></li>" : 4 == p ? m += '<li class="related-post-item ngentot" style="' + h + '"><a class="ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb-large ngentot" src="' + i + '" style="' + g + '"><div class="related-title ngentot">' + s + '</div></a><div class="related-date ngentot">' + postdate + "</div></li>" : 5 == p ? m += '<li class="related-post-item ngentot" style="' + h + '"><a class="ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb-large ngentot" src="' + i + '" style="' + g + '"><div class="related-title ngentot">' + s + "</div></a></li>" : 6 == p ? m += '<li class="related-post-item ngentot"><a class="ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb-large ngentot" src="' + i + '" style="' + g + '"><div class="related-wrapper ngentot" style="' + g + '"><div class="related-wrapper-inner ngentot"><div class="related-title ngentot">' + s + "</div></div></div></a></li>" : 7 == p ? m += '<li class="related-post-item ngentot"><a class="ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb-large ngentot" src="' + i + '" style="' + g + '"></a></li>' : 8 == p ? m += '<li class="related-post-item ngentot"><a class="related-post-item-wrapper ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb ngentot" src="' + i + '" style="' + g + '"><div class="related-title ngentot">' + s + '</div></a><div class="related-date ngentot">' + postdate + "</div></li>" : 9 == p && (m += '<li><a class="ngentot" href="' + a + '" ' + u + '><img alt="" class="related-thumb ngentot" src="' + i + '" style="' + g + '"><div class="related-title ngentot">' + s + '</div></a><div class="related-snippets ngentot">' + n + "</div></li>")
				}
				c.innerHTML = m += "</ul>" + b, l.callBack()
			}
		};
	randomRelatedIndex = c, startRelated = o, s(l.blogURL.replace(/\/$/, "") + "/feeds/posts/summary" + n + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
}(window, document, document.getElementsByTagName("head")[0]);
var fa = "<a/>",
	az = "log";
document.getElementById(az).innerHTML = fa;
