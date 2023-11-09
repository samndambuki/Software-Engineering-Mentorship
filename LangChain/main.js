// Import necessary libraries
const { OpenAI, PromptTemplate } = require("langchain.llms");
const { LLMChain, SequentialChain } = require("langchain.chains");
const { config } = require("dotenv");
const argparse = require("argparse");

// Load environment variables from a .env file
config();

// Configure argparse
const parser = new argparse.ArgumentParser();
parser.addArgument("--language", { defaultValue: "JavaScript" });
parser.addArgument("--task", {
  defaultValue: "that prints even numbers between 0 and 10",
});
const args = parser.parseArgs();

// Create an instance of the Langchain OpenAI model
const llm = new OpenAI();

// Create prompt templates
const codePrompt = new PromptTemplate({
  template: "Write me a {language} code that will {task}",
  inputVariables: ["language", "task"],
});

const testPrompt = new PromptTemplate({
  template: "Write me a {language} test case for this code: {code} using Jest",
  inputVariables: ["language", "code"],
});

// Create LLMChain instances
const codeChain = new LLMChain({
  llm,
  prompt: codePrompt,
  outputKey: "code",
});

const testChain = new LLMChain({
  llm,
  prompt: testPrompt,
  outputKey: "test",
});

// Create a sequential chain to combine the two chains
const chain = new SequentialChain({
  chains: [codeChain, testChain],
  inputVariables: ["language", "task"],
  outputVariables: ["code", "test"],
});

// Run the chains
(async () => {
  const results = await chain({
    language: args.language,
    task: args.task,
  });

  console.log("The code >>>");
  console.log(results["code"]);

  console.log("The Test Case >>>");
  console.log(results["test"]);
})();
