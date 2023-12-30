/* eslint-disable react/no-unescaped-entities */
import PreReq from "@/app/components/prereq"
import TextBox from "@/app/components/textbox";
import { PreReqDictionary } from '../../../types';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Image from "next/image"
import CodeDisplay from "@/app/components/codedisplay";

const prereqs : PreReqDictionary  = {
  "Linear Algebra": "https://pabloinsente.github.io/intro-linear-algebra",
  "Python": "https://www.pythontutorial.net/python-basics/",
  "Numpy": "https://numpy.org/doc/stable/user/absolute_beginners.html",
}

export default function PerceptronPage() {
  return (
    <div className="flex flex-col items-center my-[25px] space-y-[25px]">
        <PreReq prereqs={prereqs}/>
        <h1>Perceptron</h1>
        <Image src="/images/perceptron.svg" alt="Diagram of Perceptron" width={800} height={600}/>
        <TextBox>
          <p>If we thinking of a neural network as a graph, the perceptron is like a node or a vertex of the graph. A perceptron is also the "neuron" in the neural network.</p>
          <p>The purpose of a perceptron is to "learn" how to separate linearly classifiable problems.</p>
        </TextBox>
        
        <TextBox>
          <p>A perceptron takes in three values and outputs one value.</p>
          <p>The three values it takes in is a matrix of inputs <b>x</b>, a matrix of weights <b>w</b>, and a bias b.</p>
          <p>The value outputted is <InlineMath math="w_0*x_0 + w_1*x_1 + \ldots + w_n*x_n + b = w_0*x_0 + w_1*x_1 + \ldots + w_n*x_n + b*1"/> so oftentimes we include the bias as the last weight and 1 as the last input in order to simplify everything to one matrix</p>
          <p>Thus, if we used a matrix representation the value outputted is <InlineMath math="\mathbf{w}^T\mathbf{x}"/> or <InlineMath math="\mathbf{w} \cdot \mathbf{x}"/></p>
        </TextBox>
        <p>Here's some code implementing a Perceptron:</p>
        <CodeDisplay file_name="perceptron.py"/>
    </div>
  )
}
