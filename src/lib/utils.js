import { title, description } from '../store.js';

export function generateSVG(html, css, js, width, height) {
  const escapedCss = css.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escapedJs = js.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // make sure the title and description is up to date.

  parseHTMLContent(html);

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

  export function prepareContractURI(title, description, base64Svg) {
    const contractURIObject = {
      name: title.toString(),
      symbol: title.toString(),
      description: description.toString(),
      image: base64Svg,
      external_link: "https://project-website.com",
    };
  
    return jsonToBase64(contractURIObject);
  }

  export function prepareTokenURI(title, description, base64Svg) {
    const tokenURIObject = {
      name: title.toString(),
      description: description.toString(),
      image: base64Svg,
      content: {
        mime: "image/svg+xml",
        uri: base64Svg
      }
    };
  
    return jsonToBase64(tokenURIObject);
  }

    // Function to parse HTML content and extract title and description
    export function parseHTMLContent(html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Extract title
      const titleTag = doc.querySelector('title');
      const titleText = titleTag ? titleTag.textContent : '';
  
      // Extract description
      const descriptionMeta = doc.querySelector('meta[name="description"]');
      const descriptionText = descriptionMeta ? descriptionMeta.getAttribute('content') : '';
  
      // Update the Svelte stores
      title.set(titleText);
      description.set(descriptionText);
  
      console.log('Parsed title:', titleText);
      console.log('Parsed description:', descriptionText);
    }

    export function updateStoresFromParams(decodedParams, stores) {
      stores.htmlStore.set(decodedParams.html || '');
      stores.cssStore.set(decodedParams.css || '');
      stores.jsStore.set(decodedParams.js || '');
    }

    export function decodeParams(encodedParams) {
      const jsonString = atob(encodedParams);
      return JSON.parse(jsonString);
    }

    export function encodeParams(params) {
      const jsonString = JSON.stringify(params);
      return btoa(jsonString);
    }