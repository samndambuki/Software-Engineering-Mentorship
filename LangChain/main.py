from langchain.llms import OpenAI
from langchain.chains import LLMChain,SequentialChain
from langchain.prompts import PromptTemplate
import argparse

#Reading the environment Variables in .env file
from dotenv import load_dotenv
load_dotenv()
#Configure argparse

parser= argparse.ArgumentParser()
parser.add_argument("--language", default="Python")
parser.add_argument("--task", default="that prints even numbers between 0 and 10")
args= parser.parse_args()


# create LLM
llm = OpenAI()
# This creates the Prompt template
code_prompt = PromptTemplate(
    template="Write me a {language} code that will {task}",
    input_variables=["language","task"]
)

#a prompt for Testing
test_prompt = PromptTemplate(
    template="Write me a {language} test case for this code :{code} using Jest",
    input_variables=["language","code"]
)

# Create the Chain
code_chain= LLMChain(
    llm=llm,
    prompt=code_prompt,
    output_key="code"
)

#test Chain

test_chain= LLMChain(
    llm=llm,
    prompt=test_prompt,
    output_key="test"
)

# results= code_chain({
#     "language":args.language,
#     "task":args.task
# })


#Create a sequential chain --combine the two chains
chain = SequentialChain(
    chains=[code_chain,test_chain],
    input_variables=["language", "task"],
    output_variables=["code", "test"]
)


#Run chains
results= chain({
    "language":args.language,
    "task":args.task
})

print("The code >>>")
print(results["code"])


print("The Test Case >>>")
print(results["test"])