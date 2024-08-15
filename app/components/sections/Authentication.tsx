import React from "react";

const Authentication = () => {
  return (
    <section id="authentication">
      <h2 className="font-bold text-2xl pb-1">Authentication</h2>
      <p>
        To use the API, you need to include your API key in the header of each
        request:
      </p>
      <pre>
        <code>X-API-Key: YOUR_API_KEY</code>
      </pre>
      <p>To generate an API key, use the button below:</p>
      <button id="generateApiKey" className="font-bold">
        Generate API Key
      </button>
      <div id="apiKeyDisplay" />
    </section>
  );
};

export default Authentication;
