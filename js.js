var randomRelatedIndex,startRelated;!function(e,t,l){var R={callBack:function(){}};for(var a in relatedSettings)R[a]="undefined"==relatedSettings[a]?R[a]:relatedSettings[a];var r=function(e){var a=t.createElement("script");a.type="text/javascript",a.src=e,l.appendChild(a)},$=function(e){var a,t,l=e.length;if(0===l)return!1;for(;--l;)a=Math.floor(Math.random()*(l+1)),t=e[l],e[l]=e[a],e[a]=t;return e},i="object"==typeof labelArray&&0<labelArray.length?"/-/"+$(labelArray)[0]:"";randomRelatedIndex=function(e){var a,t,l=e.feed.openSearch$totalResults.$t-R.relatedPosts,s=(a=1,t=0<l?l:1,Math.floor(Math.random()*(t-a+1))+a);r(R.blogURL.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&start-index="+s+"&max-results="+R.relatedPosts+"&callback=startRelated")},startRelated=function(e){var a,t,l,s,r,i,d=document.getElementById("related-posts-widget"),n=$(e.feed.entry),c=R.relatedStyle,o=R.relatedHeading+'<ul class="related-posts-'+c+'">',p=R.openNewTab?' target="_blank"':"",m=R.centerText?"text-align:center;":"",g=R.roundThumbs?"-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;":"";if(d){for(var u=0;u<R.relatedPosts&&u!=n.length;u++){l=n[u].title.$t,s="auto"!==R.titleLength&&R.titleLength<l.length?l.substring(0,R.titleLength)+"&hellip;":l,r="media$thumbnail"in n[u]&&!1!==R.thumbnailSize?n[u].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/"+R.thumbnailSize):R.defaultThumb;for(var h=[1,2,3,4,5,6,7,8,9,10,11,12],b=["January","February","March","April","May","June","July","August","September","October","November","December"],v=(a=$(n[u].published.$t)).split("-")[2].substring(0,2),f=a.split("-")[1],y=a.split("-")[0],k=0;k<h.length;k++)if(parseInt(f)==h[k]){f=b[k];break}postdate=f+" "+v+" "+y,i="summary"in n[u]&&0<R.snippetLength?n[u].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,R.snippetLength)+"&hellip;":"";for(var x=0,L=n[u].link.length;x<L;x++)t="alternate"==n[u].link[x].rel?n[u].link[x].href:"#";1==c?o+='<li><a class="ngeload" href="'+t+'" '+p+">"+s+"</a></li>":2==c?o+='<li><a class="ngeload" href="'+t+'" '+p+'><div class="related-title">'+s+'</div></a><div class="related-snippets">'+i+"</div></li>":3==c?o+='<li class="related-post-item" style="'+m+'"><a class="ngeload" href="'+t+'" '+p+'><img alt="" class="related-thumb-large" src="'+r+'" style="'+g+'"><div class="related-title">'+s+'</div></a><div class="related-snippets">'+i+"</div></li>":4==c?o+='<li class="related-post-item" style="'+m+'"><a class="ngeload" href="'+t+'" '+p+'><img alt="" class="related-thumb-large" src="'+r+'" style="'+g+'"><div class="related-title">'+s+'</div></a><div class="related-date">'+postdate+"</div></li>":5==c?o+='<li class="related-post-item" style="'+m+'"><a class="ngeload" href="'+t+'" '+p+'><img alt="" class="related-thumb-large" src="'+r+'" style="'+g+'"><div class="related-title">'+s+"</div></a></li>":6==c?o+='<li class="related-post-item"><a class="ngeload" href="'+t+'" '+p+'><img alt="" class="related-thumb-large" src="'+r+'" style="'+g+'"><div class="related-wrapper" style="'+g+'"><div class="related-wrapper-inner"><div class="related-title">'+s+"</div></div></div></a></li>":7==c?o+='<li class="related-post-item"><a class="ngeload" href="'+t+'" '+p+'><img alt="" class="related-thumb-large" src="'+r+'" style="'+g+'"></a></li>':8==c?o+='<li class="related-post-item"><a class="ngeload" class="related-post-item-wrapper" href="'+t+'" '+p+'><img alt="" class="related-thumb" src="'+r+'" style="'+g+'"><div class="related-title">'+s+'</div></a><div class="related-date">'+postdate+"</div></li>":9==c&&(o+='<li><a class="ngeload" href="'+t+'" '+p+'><img alt="" class="related-thumb" src="'+r+'" style="'+g+'"><div class="related-title">'+s+'</div></a><div class="related-snippets">'+i+"</div></li>")}d.innerHTML=o+='</ul><span id="log" style="display:block;clear:both;"></span>',R.callBack()}},r(R.blogURL.replace(/\/$/,"")+"/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);var fa="<a/>",az="log";document.getElementById(az).innerHTML=fa;
