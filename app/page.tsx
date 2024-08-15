import Image from "next/image";

export default function Home() {
  return (
    <>
      <title>API Documentation - Book Generator</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code&display=swap');\n        \n        :root {\n            --primary-color: #6366f1;\n            --secondary-color: #a5b4fc;\n            --background-color: #0f172a;\n            --text-color: #e2e8f0;\n            --accent-color: #22d3ee;\n            --code-background: #1e293b;\n            --section-background: #1e293b;\n            --border-color: #334155;\n        }\n        \n        * {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n        }\n        \n        body {\n            font-family: 'Inter', sans-serif;\n            line-height: 1.6;\n            color: var(--text-color);\n            background-color: var(--background-color);\n            margin: 0;\n            padding: 0;\n        }\n        \n        header {\n            background-color: var(--primary-color);\n            padding: 2rem 0;\n            text-align: center;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        }\n        \n        h1 {\n            font-size: 2.5rem;\n            margin-bottom: 1rem;\n            color: #ffffff;\n        }\n        \n        h2, h3, h4 {\n            margin-top: 2rem;\n            color: var(--secondary-color);\n        }\n        \n        nav {\n            background-color: var(--section-background);\n            padding: 1rem 0;\n            position: sticky;\n            top: 0;\n            z-index: 1000;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n        }\n        \n        nav ul {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            list-style-type: none;\n            padding: 0;\n            margin: 0;\n        }\n        \n        nav ul li {\n            margin: 0.5rem 1rem;\n        }\n        \n        nav ul li a {\n            color: var(--text-color);\n            text-decoration: none;\n            font-weight: 500;\n            transition: color 0.3s ease;\n            font-size: 0.9rem;\n            text-transform: uppercase;\n            letter-spacing: 0.5px;\n        }\n        \n        nav ul li a:hover {\n            color: var(--accent-color);\n        }\n        \n        main {\n            max-width: 1000px;\n            margin: 2rem auto;\n            padding: 0 2rem;\n        }\n        \n        section {\n            background-color: var(--section-background);\n            border-radius: 8px;\n            padding: 2rem;\n            margin-bottom: 2rem;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            border: 1px solid var(--border-color);\n        }\n        \n        pre, code {\n            font-family: 'Fira Code', monospace;\n            background-color: var(--code-background);\n            border-radius: 4px;\n            padding: 1rem;\n            overflow-x: auto;\n            white-space: pre-wrap;\n            word-wrap: break-word;\n            font-size: 0.9rem;\n            border: 1px solid var(--border-color);\n        }\n        \n        table {\n            width: 100%;\n            border-collapse: separate;\n            border-spacing: 0;\n            margin-top: 1rem;\n            overflow: hidden;\n            border-radius: 8px;\n            border: 1px solid var(--border-color);\n        }\n        \n        th, td {\n            padding: 1rem;\n            text-align: left;\n            border-bottom: 1px solid var(--border-color);\n        }\n        \n        th {\n            background-color: var(--primary-color);\n            font-weight: 600;\n            text-transform: uppercase;\n            letter-spacing: 0.5px;\n            font-size: 0.8rem;\n            color: #ffffff;\n        }\n        \n        tr:last-child td {\n            border-bottom: none;\n        }\n        \n        .endpoint {\n            background-color: var(--primary-color);\n            padding: 0.5rem 1rem;\n            border-radius: 4px;\n            font-weight: bold;\n            display: inline-block;\n            margin-bottom: 1rem;\n        }\n        \n        .http-method {\n            background-color: var(--accent-color);\n            color: var(--background-color);\n            padding: 0.25rem 0.5rem;\n            border-radius: 4px;\n            font-weight: bold;\n            margin-right: 0.5rem;\n        }\n        \n        .parameter-table td:first-child {\n            font-weight: bold;\n            color: var(--accent-color);\n        }\n        \n        button {\n            background-color: var(--accent-color);\n            color: var(--background-color);\n            border: none;\n            padding: 0.75rem 1.5rem;\n            border-radius: 4px;\n            cursor: pointer;\n            font-size: 1rem;\n            font-weight: 600;\n            transition: background-color 0.3s ease, transform 0.2s ease;\n            margin-top: 1rem;\n        }\n        \n        button:hover {\n            background-color: #0ea5e9;\n            transform: translateY(-2px);\n        }\n        \n        #apiKeyDisplay {\n            margin-top: 1rem;\n            padding: 1rem;\n            background-color: var(--code-background);\n            border-radius: 4px;\n            font-family: 'Fira Code', monospace;\n            border: 1px solid var(--border-color);\n            word-break: break-all;\n        }\n        \n        @media (max-width: 768px) {\n            nav ul {\n                flex-direction: column;\n                align-items: center;\n            }\n            \n            nav ul li {\n                margin: 0.5rem 0;\n            }\n            \n            main {\n                padding: 0 1rem;\n            }\n            \n            section {\n                padding: 1.5rem;\n            }\n            \n            table, th, td {\n                font-size: 0.85rem;\n            }\n        }\n    ",
        }}
      />
      <header>
        <h1 className=" font-bold">Book Generator API</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#authentication">Authentication</a>
          </li>
          <li>
            <a href="#endpoints">Endpoints</a>
          </li>
          <li>
            <a href="#tutorial">Tutorial</a>
          </li>
          <li>
            <a href="#code-examples">Code Examples</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </nav>
      <main>
        <section id="overview">
          <h2 className="font-bold text-2xl pb-1">Overview</h2>
          <p>
            The Book Generator API allows you to generate books on various
            topics using different language models. This documentation provides
            details on how to use the API, including authentication, available
            endpoints, and code examples.
          </p>
        </section>
        <section id="authentication">
          <h2 className="font-bold text-2xl pb-1">Authentication</h2>
          <p>
            To use the API, you need to include your API key in the header of
            each request:
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
        <section id="endpoints">
          <h2 className="font-bold text-2xl pb-1">Endpoints</h2>
          <h3 className="font-bold text-xl ">Generate Book</h3>
          <p>
            <span className="http-method">POST</span>{" "}
            <span className="endpoint">/api/generate-book</span>
          </p>
          <h4 className="font-bold  ">Request Body</h4>
          <table className="parameter-table">
            <tbody>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>api</td>
                <td>string</td>
                <td>
                  The API provider to use. Options: "openai" or "together"
                </td>
              </tr>
              <tr>
                <td>model</td>
                <td>string</td>
                <td>
                  The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
                  "llama-2-70b")
                </td>
              </tr>
              <tr>
                <td>topic</td>
                <td>string</td>
                <td>The main topic or theme of the book</td>
              </tr>
              <tr>
                <td>language</td>
                <td>string</td>
                <td>The language in which the book should be generated</td>
              </tr>
              <tr>
                <td>word_count</td>
                <td>integer</td>
                <td>The approximate number of words for the generated book</td>
              </tr>
            </tbody>
          </table>
          <h4 className="font-bold text-lg">Response</h4>
          <pre>
            <code>
              {"{"}
              {"\n"}
              {"    "}"message": "Book generation started",{"\n"}
              {"    "}"status": "processing",{"\n"}
              {"    "}"job_id": "unique-job-identifier"{"\n"}
              {"}"}
            </code>
          </pre>
        </section>
        <section id="tutorial">
          <h2 className="font-bold text-2xl pb-1">Tutorial</h2>
          <h3 className="font-bold text-xl ">Step 1: Obtain an API Key</h3>
          <p>
            Generate an API key using the button in the Authentication section
            above.
          </p>
          <h3 className="font-bold text-xl ">Step 2: Make a Request</h3>
          <p>
            Use your preferred programming language or tool to make a POST
            request to the /api/generate-book endpoint. Include your API key in
            the header and the required parameters in the request body.
          </p>
          <h3 className="font-bold text-xl ">Step 3: Handle the Response</h3>
          <p>
            The API will return a response with a job ID. You can use this ID to
            check the status of your book generation job.
          </p>
          <h3 className="font-bold text-xl ">
            Step 4: Retrieve the Generated Book
          </h3>
          <p>
            Once the job is complete, you can retrieve the generated book using
            the job ID (endpoint to be implemented).
          </p>
        </section>
        <section id="code-examples">
          <h2 className="font-bold text-2xl pb-1 ">Code Examples</h2>
          <h3 className="font-bold text-xl ">Python</h3>
          <pre>
            <code>
              import requests{"\n"}
              {"\n"}API_KEY = "your_api_key_here"{"\n"}API_ENDPOINT =
              "https://tryBookAI.com/api/generate-book"{"\n"}
              {"\n"}headers = {"{"}
              {"\n"}
              {"    "}"Content-Type": "application/json",{"\n"}
              {"    "}"X-API-Key": API_KEY{"\n"}
              {"}"}
              {"\n"}
              {"\n"}data = {"{"}
              {"\n"}
              {"    "}"api": "openai",{"\n"}
              {"    "}"model": "gpt-3.5-turbo",{"\n"}
              {"    "}"topic": "The Future of Artificial Intelligence",{"\n"}
              {"    "}"language": "English",{"\n"}
              {"    "}"word_count": 5000{"\n"}
              {"}"}
              {"\n"}
              {"\n"}response = requests.post(API_ENDPOINT, json=data,
              headers=headers){"\n"}
              {"\n"}if response.status_code == 200:{"\n"}
              {"    "}result = response.json(){"\n"}
              {"    "}print(f"Book generation started. Job ID: {"{"}
              result['job_id']
              {"}"}"){"\n"}else:{"\n"}
              {"    "}print(f"Error: {"{"}response.status_code{"}"} - {"{"}
              response.text{"}"}"){"\n"}
            </code>
          </pre>
          <h3 className="font-bold text-xl ">JavaScript (Node.js)</h3>
          <pre>
            <code>
              const axios = require('axios');{"\n"}
              {"\n"}const API_KEY = 'your_api_key_here';{"\n"}const API_ENDPOINT
              = 'https://tryBookAI.com/api/generate-book';{"\n"}
              {"\n"}const headers = {"{"}
              {"\n"}
              {"    "}'Content-Type': 'application/json',{"\n"}
              {"    "}'X-API-Key': API_KEY{"\n"}
              {"}"};{"\n"}
              {"\n"}const data = {"{"}
              {"\n"}
              {"    "}api: 'openai',{"\n"}
              {"    "}model: 'gpt-3.5-turbo',{"\n"}
              {"    "}topic: 'The Future of Artificial Intelligence',{"\n"}
              {"    "}language: 'English',{"\n"}
              {"    "}word_count: 5000{"\n"}
              {"}"};{"\n"}
              {"\n"}axios.post(API_ENDPOINT, data, {"{"} headers {"}"}){"\n"}
              {"    "}.then(response =&gt; {"{"}
              {"\n"}
              {"        "}console.log(`Book generation started. Job ID: ${"{"}
              response.data.job_id{"}"}`);{"\n"}
              {"    "}
              {"}"}){"\n"}
              {"    "}.catch(error =&gt; {"{"}
              {"\n"}
              {"        "}console.error('Error:', error.response ?
              error.response.data : error.message);{"\n"}
              {"    "}
              {"}"});{"\n"}
            </code>
          </pre>
        </section>
        <section id="pricing">
          <h2 className="font-bold text-2xl pb-1 ">API Pricing</h2>
          <p>
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
          <table>
            <thead>
              <tr>
                <th>API</th>
                <th>Model</th>
                <th>Price per 1K tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>GPT-3.5</td>
                <td>$0.002</td>
              </tr>
              <tr>
                <td>OpenAI</td>
                <td>GPT-4</td>
                <td>$0.03</td>
              </tr>
              <tr>
                <td>Together AI</td>
                <td>Llama-2-70b</td>
                <td>$0.0008</td>
              </tr>
              <tr>
                <td>Together AI</td>
                <td>Llama-2-13b</td>
                <td>$0.0006</td>
              </tr>
            </tbody>
          </table>
          <h3 className="font-bold text-xl ">Token Estimation</h3>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
          <h3 className="font-bold text-xl ">Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </section>
      </main>
    </>
  );
}
