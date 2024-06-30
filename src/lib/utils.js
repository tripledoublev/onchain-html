export function generateSVG(html, css, js, width, height) {
  const escapedCss = css.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escapedJs = js.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const svg = `
 <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <style>${css}</style>
            ${html}
            <script type="text/javascript"><![CDATA[${js} ]]></script>
          </div>
        </foreignObject>
      </svg>
  `;
    
    console.log(svg);

    return svg;
  }
  export function generateHTMLDocument(html, css, js) {
    // Ensure CSS and JS are properly formatted for inclusion in the document
    const formattedCss = css;
    const formattedJs = js;

    // Create the complete HTML document
    const doc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Document</title>
    <style>
        ${formattedCss}
    </style>
</head>
<body>
    ${html}
    <script>
        ${formattedJs}
    </script>
</body>
</html>
    `;
  // Encode the HTML document as base64
  const base64doc = btoa(unescape(encodeURIComponent(doc)));
  const dataUri = `data:text/html;base64,${base64doc}`;

  console.log(dataUri);
  return dataUri;
}

export function jsonToBase64(jsonObject) {
  const jsonString = JSON.stringify(jsonObject);
  const base64Encoded = btoa(unescape(encodeURIComponent(jsonString)));
  return `data:application/json;base64,${base64Encoded}`;
}
  
export function svgToBase64(svgString) {
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
  }