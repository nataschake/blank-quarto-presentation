/*
Author: Nataliya Keberle <nataliya.keberle@ontotext.com>
Category: common
Description: very basic JavaScript to enable Ontotext-style for revealjs+Quarto presentations.
Related discussion: https://github.com/quarto-dev/quarto-cli/discussions/6854
*/

document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">');
document.write('<link rel="stylesheet" href="https://presentations.ontotext.com/css/onto-hljs.css">');
document.write('<!--added for testing trySparql.js-->');
document.write('<script src="https://presentations.ontotext.com/js/trySparql.js"></script>');
document.write('<!-- added for highlighting additional languages-->');
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>');
document.write('<!-- and it\'s easy to individually load additional languages -->');
document.write('<!-- they\'d simply add your language modules -->');
document.write('<script src="https://presentations.ontotext.com/js/ttl.js"></script>');
document.write('<script src="https://presentations.ontotext.com/js/sparql.js"></script>');
document.write('<script src="https://presentations.ontotext.com/js/pie.js"></script>');
document.write('<script>hljs.registerLanguage(\'ttl\', ttl_highlight);');
document.write('    hljs.registerLanguage(\'sparql\', sparql_highlight);');
document.write('    hljs.registerLanguage(\'pie\', pie_highlight);');
document.write('    hljs.initHighlightingOnLoad();');
document.write('    hljs.highlightAll();');
document.write('    //console.log(hljs.listLanguages());');
document.write('</script>');
