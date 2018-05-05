var alphabetPattern ="AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
    var creatingDiv = ["A", "Apol", "B" , "C", "Cpol",	"D", "E", "Epol", "F", "G", "H", "I", "J", "K",	"L", "Lpol", "M", "N", "Npol", "O", "Opol", "P",	"Q", "R", "S", "Spol", "T",	"U", "V", "W", "X",	"Y", "Z", "Ziet", "Zpol"]
	
	$(document).ready(function()
	{
		//generowanie paragrafów z alfabetem
			var tresc_diva = "";
			var alph = 0;
			for (alph=0; alph<=34; alph++)
			{
				tresc_diva = tresc_diva + '<p class="litera" id="' + creatingDiv[alph] + '">'+ alphabetPattern[alph] + '</p>';
			}	
		
		$("#alphabet").html(tresc_diva);
		
		//dane podstawowe
		$("#buttonCalculate").click(function()
		{
			var textLeng = $("#textarea").val().length;
			var text_words = $("#textarea").val().replace(/^[\s,.;]+/, "").replace(/[\s,.;]+$/, "").split(/[\s,.;]+/).length;
			var pages = Math.ceil(textLeng/1800);
			var sheets = Math.ceil(textLeng/40000);
			
			$("#letters").text(textLeng);
			$("#words").text(text_words);
			$("#pages").text(pages);
			$("#sheets").text(sheets);
		});
		//kasowanie tekstu
		
		$("#buttonRemoveText").click(function()
		{
			$("#textarea").val("");
		});
		
		
				
		//statystyka liter
		$("#buttonLetterCalculate").click(function()
		{
			$("#popup").css("display", "block");
			
			//zmienna łapiąca tekst
			var string = $("#textarea").val().toLowerCase();
			
			//długość tekstu bez znaków białych, interpunkcji i znaków specjalnych
	
			var onlyLetters = $("#textarea").val().replace(/[\s.,1234567890-=_+;':"<>?!@#$%^&*()]/g, "").length;
			
			//liczniki liter
			var a=0, apol=0, b=0, c=0, cpol=0, d=0, e=0, epol=0, f=0, g=0, 
				h=0, i=0, j=0, k=0, l=0, lpol=0, m=0, n=0, npol=0, o=0, 
				opol=0, p=0, q=0, r=0, s=0, spol=0, t=0, u=0, v=0, w=0, 
				x=0, y=0, z=0, ziet=0, zpol=0	
			
			
			for (le=0; le<= string.length; le++) 
            {
                if (string[le] == "a")  a++;
                else if (string[le] == "ą") apol++;
                else if (string[le] == "b") b++;
                else if (string[le] == "c") c++;
                else if (string[le] == "ć") cpol++;
                else if (string[le] == "d") d++;
                else if (string[le] == "e") e++;
                else if (string[le] == "ę") epol++;
                else if (string[le] == "f") f++;
                else if (string[le] == "g") g++;
                
                else if (string[le] == "h") h++;
                else if (string[le] == "i") i++;
                else if (string[le] == "j") j++;
                else if (string[le] == "k") k++;
                else if (string[le] == "l") l++;
                else if (string[le] == "ł") lpol++;
                else if (string[le] == "m") m++;
                else if (string[le] == "n") n++;
                else if (string[le] == "ń") npol++;
                else if (string[le] == "o") o++;
            
                else if (string[le] == "ó") opol++;
                else if (string[le] == "p") p++;
                else if (string[le] == "q") q++;
                else if (string[le] == "r") r++;
                else if (string[le] == "s") s++;
                else if (string[le] == "ś") spol++;
                else if (string[le] == "t") t++;
                else if (string[le] == "u") u++;
                else if (string[le] == "v") v++;
                else if (string[le] == "w") w++;
                
                else if (string[le] == "x") x++;
                else if (string[le] == "y") y++;
                else if (string[le] == "z") z++;
                else if (string[le] == "ź") ziet++;
                else if (string[le] == "ż") zpol++;
            }; 
					
			//wypisywanie statystyki
			$("#A").text("A: " + a + " liter, " + ((a/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Apol").text("Ą: " + ą + " liter, " + ((apol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#B").text("B: " + b + " liter, " + ((b/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#C").text("C: " + c + " liter, " + ((c/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Cpol").text("Ć: " + ć + " liter, " + ((cpol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#D").text("D: " + d + " liter, " + ((d/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#E").text("E: " + e + " liter, " + ((e/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Epol").text("Ę: " + ę + " liter, " + ((epol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#F").text("F: " + f + " liter, " + ((f/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#G").text("G: " + g + " liter, " + ((g/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			
			$("#H").text("H: " + h + " liter, " + ((h/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#I").text("I: " + i + " liter, " + ((i/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#J").text("J: " + j + " liter, " + ((j/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#K").text("K: " + k + " liter, " + ((k/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#L").text("L: " + l + " liter, " + ((l/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Lpol").text("Ł: " + ł + " liter, " + ((lpol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#M").text("M: " + m + " liter, " + ((m/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#N").text("N: " + n + " liter, " + ((n/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Npol").text("Ń: " + ń + " liter, " + ((npol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#O").text("O: " + o + " liter, " + ((o/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
						
			$("#Opol").text("Ó: " + ó + " liter, " + ((opol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#P").text("P: " + p + " liter, " + ((p/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Q").text("Q: " + q + " liter, " + ((q/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#R").text("R: " + r + " liter, " + ((r/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#S").text("S: " + s + " liter, " + ((s/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Spol").text("Ś: " + ś + " liter, " + ((spol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#T").text("T: " + t + " liter, " + ((t/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#U").text("U: " + u + " liter, " + ((u/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#V").text("V: " + v + " liter, " + ((v/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#W").text("W: " + w + " liter, " + ((w/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			
			$("#X").text("X: " + x + " liter, " + ((x/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Y").text("Y: " + y + " liter, " + ((y/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Z").text("Z: " + z + " liter, " + ((z/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Ziet").text("Ź: " + ź + " liter, " + ((ziet/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
			$("#Zpol").text("Ż: " + ż + " liter, " + ((zpol/onlyLetters) * 100).toFixed(2) + "% wszystkich liter");
		});
		
		//chowanie okienka ze statystyką
		$("#close").click(function()
			{
				$("#popup").css("display", "none");
			});
	});