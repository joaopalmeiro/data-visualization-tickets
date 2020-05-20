const sourceHeader = `
  <script>
    const style = document.createElement("link"); 
    style.href = "ascetic-mod.css"; style.rel = "stylesheet"; 
    style.type = "text/css";
    document.head.appendChild(style); 
    
    const script = document.createElement("script"); 
    script.src = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/highlight.min.js";
    script.onload = () => hljs.highlightBlock(document.querySelector("pre code"));
    document.head.appendChild(script);
  </script>
`;

const locale = {
  decimal: ",",
  thousands: ".",
  grouping: [3],
  currency: ["", "€"],
};

const tooltipOptions = {
  theme: "lcontrast",
};

const ticketEnum = {
  SOUCE_HEADER: sourceHeader,
  RENDERER: "svg",
  SCALE_FACTOR: 5,
  SOURCE_ACTION: "View Source Spec",
  LOCALE: locale,
  TOOLTIP_OPTIONS: tooltipOptions,
};

export default ticketEnum;
