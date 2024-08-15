import React from "react";

const CodeExamples = () => {
  return (
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
          {"\n"}const API_KEY = 'your_api_key_here';{"\n"}const API_ENDPOINT =
          'https://tryBookAI.com/api/generate-book';{"\n"}
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
  );
};

export default CodeExamples;
