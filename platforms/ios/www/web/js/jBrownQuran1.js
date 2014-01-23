var jBrownQuran = {
				//__canvas: document.getElementById("myCanvas"),
                
				__quranChapters : ["الم","سَيَقُولُ", "تِلْكَ الرُّسُلُ", "لَنْ تَنَالُوا", "وَالْمُحْصَنَاتُ", "لَا يُحِبُّ اللَّهُ", "وَإِذَا سَمِعُوا", "وَلَوْ أَنَّنَا", "قَالَ الْمَلَأُ", "وَاعْلَمُوا" , "يَعْتَذِرُونَ", "وَمَا مِنْ دَابَّةٍ", "وَمَا أُبَرِّئُ", "رُبَمَا", "سُبْحَانَ الَّذِي", "قَالَ أَلَمْ", "اقْتَرَبَ", "قَدْ أَفْلَحَ", "وَقَالَ الَّذِينَ", "أَمَّنْ خَلَقَ", "اتْلُ مَا أُوحِيَ", "وَمَنْ يَقْنُتْ", "وَمَا لِيَ", "فَمَنْ أَظْلَمُ" , "إِلَيْهِ يُرَدُّ", "حم", "قَالَ فَمَا خَطْبُكُمْ", "قَدْ سَمِعَ اللَّهُ", "تَبَارَكَ الَّذِي", "عَمَّ يَتَسَاءَلُونَ " ],
				__quranChaptersEng : ["Alif Lam Meem", "Sayaqool", "Tilkal Rusull", "Lan Tana Loo", 
				                      "Wal Mohsanat", "La Yuhibbullah", "Wa Iza Samiu", "Wa Lau Annana", "Qalal Malao", 
				                      "Wa A'lamu", "Yatazeroon", "Wa Mamin Da'abat", "Wa Ma Ubrioo", "Rubama", "Subhanallazi", 
				                      "Qal Alam", "Aqtarabo", "Qadd Aflaha", "Wa Qalallazina", "A man Khalaq", "Utlu Ma Oohi", 
				                      "Wa Manyaqnut", "Wa Mali", "Faman Azlam", "Elahe Yuruddo", "Ha a Meem", "Qala Fama Khatbukum", 
				                      "Qadd Sami Allah", "Tabarakallazi", "Amma Yatasa aloon"],
				
				loadChapters: function(){
					document.getElementById('chapter-ul').innerHTML = "";
					//this.loadChapter('test-1', 'test', 'chapter-ul')
					
					for (var i = 0; i < this.__quranChapters.length; i++) {
					  this.loadChapter(this.__quranChapters[i], this.__quranChaptersEng[i], 'chapter-ul');
					}
				},
							
				loadChapter: function(chapter_number, chapter_name, chapter_holder_element_id){
				    var child_pos = 'ui-first-child';
					var chapter_li = 
                       "<li data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='false' data-iconpos='right' data-theme='c' class='portfolio-item ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-li-has-thumb "+ child_pos +" ui-btn-up-d ui-corner'>"+
                       "    <div class='ui-btn-inner ui-li ui-li-has-alt'>"+
                       "         <div class='ui-btn-text'>"+
                       "             <a href='quran-chapters.html' class='ui-link-inherit ui-corner-none'>"+
                       "                 <img src='icons/nav-icon-quran.jpg' class='ui-li-thumb ui-corner-none'>"+
                       "                     <h3 class='ui-li-heading'>"+ chapter_number +"</h3>"+
                       "                     <p class='ui-li-desc'>"+ chapter_name +"</p>"+
                       "             </a>"+
                       "         </div>"+
                       "     </div>"+
                       "     <a href='quran-chapters.html' title='Purchase album' class='ui-li-link-alt ui-btn ui-btn-icon-notext ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='span' data-icon='false' data-iconpos='notext' data-theme='c'>"+
                       "         <span class='ui-btn-inner'>"+
                       "             <span class='ui-btn-text'></span>"+
                       "             <span data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-icon='arrow-r' data-iconpos='notext' data-theme='b' title='' class='ui-btn ui-btn-up-d ui-shadow ui-btn-corner-all ui-btn-icon-notext'>"+
                       "                 <span class='ui-btn-inner'>"+
                       "                     <span class='ui-btn-text'></span>"+
                       "                     <span class='ui-icon ui-icon-arrow-r ui-icon-shadow'>&nbsp;</span>"+
                       "                 </span>"+
                       "             </span>"+
                       "         </span>"+
                       "     </a>"+
                       " </li>";
                    
                    document.getElementById('chapter-ul').innerHTML +=  chapter_li;
                    //$("#chapter-ul").html(chapter_li);
                    //alert('done - ' + $("#chapter-ul").html());
				}
};

$(document).on("pageinit", "#portfolio", function(){
    //alert("portfolio init called");
    jBrownQuran.loadChapters();
});


//*******************

var jPages = {
    __numberOfPages : 610,
    __path : "http://cms.javabrown.com/qfetcher.php?output=base641&verse=1&chapter=",
  
    addPage : function(page, book) {
             var qp = "http://cms.javabrown.com/qfetcher.php?output=base641&verse=1&chapter=";
             // First check if the page is already in the book
             if (!book.turn('hasPage', page)) {
                 // Create an element for this page
                 //var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
                 var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');

                 
                 // If not then add the page
                 book.turn('addPage', element, page);
                 // Let's assum that the data is comming from the server and the request takes 1s.
                 setTimeout(function(){
					 var style="background-image:url('"+qp+page+"');";
					 var image_tag = "<img style='width:100%;max-width:100%' src='"+qp+page+"'></img>";
					 element.html('<div class="data">'+ image_tag +'</div>');
					 
                 }, 615);
                 
             }
     },
     
     launch : function(){
             $('#book').turn({
                  acceleration: true,
                  pages: this.__numberOfPages,
                  elevation: 50,
                  gradients: !$.isTouch,
                  when: {
                      turning: function(e, page, view) {
                         // Gets the range of pages that the book needs right now
                         var range = $(this).turn('range', page);
                         
                         // Check if each page is within the book
                         for (page = range[0]; page<=range[1]; page++){
                           jPages.addPage(page, $(this));
                         }
                      },
                      
                      turned: function(e, page) {
                          $('#page-number').val(page);
                      }
                  }
             });
             
             $('#number-pages').html(this.__numberOfPages);
             
             $('#page-number').keydown(function(e){
                   if (e.keyCode==13){
                       $('#book').turn('page', $('#page-number').val());
                   }
             });
              
             //alert('turn launched');
     }
         
};


/*$(document).on("pageinit", "#quran", function(){
    alert("quran init called");
    
    jPages.launch();
    
    
	
});*/
/*
$(document).on('pagebeforeshow', '#qurandetail', function(){
               $('#flipbook').turn({
                                   width: 400,
                                   height: 300,
                                   autoCenter: true
                                   });
               $('#qurandetail').trigger('pagecreate');
               alert('done');
});
*/
//*******************
