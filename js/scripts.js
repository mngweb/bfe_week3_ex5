/*
5. Konwerter Markdown do HTML z File API
Korzystając z File API stwórz konwerter formatu Markdown do formatu HTML. Twoim zadaniem jest stworzenie pola <input> o typie file, dzięki któremu użytkownik będzie mógł wybrać plik z formatem Markdown (zapisz treść dostępną tutaj do pliku lub stwórz własną), który automatycznie zostanie skonwertowany do kodu HTML (wykorzystaj do tego celu Showdown.js). Kod HTML, który otrzymasz po użyciu odpowiedniej metody z Showdown.js, wstaw w pole podglądu, które utworzysz. Możesz również dodać możliwość skopiowania wygenerowanego kodu HTML. Najłatwiej zrobić to wyświetlając pole <textarea>, do którego wstawisz owy kod, a następnie wywołasz na nim metodę .select()

https://github.com/showdownjs/showdown
*/




(function() {

   if(!window.FileReader) return; 

    var fileInput = document.querySelector("#fileInput"),
        start = document.querySelector("#start"),
        stop = document.querySelector("#stop"),
        progress = document.querySelector("#progress"),
        markdownOutput = document.querySelector("#markdownOutput"),
        htmlOutput = document.querySelector("#htmlOutput");

    fileInput.onchange = function() { 

        var file = this.files[0],
            reader = new FileReader();

        if(!file.type.match('text/plain')){
        //if(!fileLink.name.match(".*\.txt")){
             alert("Proszę wybrać plik tekstowy!");
        }
        

            reader.onprogress = function(e) {
                if(e.lengthComputable) { 
                    var percent = (e.loaded / e.total) * 100; 

                    progress.value = percent; 
                }
            }

            reader.onload = function(e) {
                var converter = new showdown.Converter(),
                    markdown = this.result,
                    html = converter.makeHtml(markdown);

                markdownOutput.innerText = this.result;
                //console.log(this.result);

                htmlOutput.innerText = html;
                // console.log(html);
            }


            start.onclick = function() {
                reader.readAsText(file);
            }




    }

})();
