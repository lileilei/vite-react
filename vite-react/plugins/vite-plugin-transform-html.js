const transformHtml = function(url){
return `  
    <script>
        System.import("react").then(function(){
              System.import("react-dom").then(function(){
              var script = document.createElement("script");
                script.type = "module";
                script.src = "${url}";
                document.body.appendChild(script)
          })
        })
    </script>`
}
export default function htmlPlugin() {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      html =  html.replace(/<script.*type="module".*src=\"(.*)\"><\/script>/,transformHtml(`$1`))
      return html
    }
  }
}