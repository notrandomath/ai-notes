/* eslint-disable react/no-unescaped-entities */
import PreReq from "@/app/components/prereq"
import TextBox from "@/app/components/textbox";
import { PreReqDictionary } from '../../../types';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Image from "next/image"
import Link from "next/link";
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
        <Image src="/images/perceptron/perceptron.svg" alt="Diagram of Perceptron" width={800} height={600}/>
        <TextBox>
          <h3>Introduction</h3>
          <p>If we thinking of a neural network as a graph, the perceptron is like a node or a vertex of the graph. A perceptron is also the "neuron" in the neural network.</p>
          <p>The purpose of a perceptron is to "learn" how to separate linearly classifiable problems.</p>
        </TextBox>

        <TextBox>
          <h3>Problem Statement</h3>
          <p>We are given a <b>binary classification problem</b>. In other words, we are given a series of points we want to group them into 2 clean groups.</p>
          <Image src="/images/perceptron/unclassified.svg" alt="Graph with unlabeled points" width={200} height={200}/>
          <p>We say these points are <b>linearly separable</b> if we can draw a line such that it mostly separates the 2 groups</p>
          <Image src="/images/perceptron/classified.svg" alt="Graph with labeled points and line separating them" width={200} height={200}/>
          <p>There are multiple ways to group the points in a linearly separable fashion, so oftentimes we give the perceptron a list of already known groupings so it can predict how the line should be drawn</p>
          <p>This list of already known groupings is called the <b>training set</b></p>
        </TextBox>
        
        <TextBox>
          <h3>Inputs / Outputs</h3>
          <p>A perceptron takes in three values and outputs one value.</p>
          <p>The three values it takes in is a matrix of inputs <b>x</b>, a matrix of weights <b>w</b>, and a bias b.</p>
          <p>The dimensions of <b>x</b> is related to the dimension of the problem. Since the above example was 2-dimensional, so <b>x</b> would include both the x and y coordinates of a point in the graph.</p>
          <p>The value outputted is <InlineMath math="w_0*x_0 + w_1*x_1 + \ldots + w_n*x_n + b = w_0*x_0 + w_1*x_1 + \ldots + w_n*x_n + b*1"/> so oftentimes we include the bias as the last weight and 1 as the last input in order to simplify everything to one matrix</p>
          <p>Thus, if we used a matrix representation the value outputted is <InlineMath math="\mathbf{w}^T\mathbf{x}"/></p>
        </TextBox>

        <TextBox>
          <h3>Activation Function</h3>
          <p>The output then gets passed through an activation function</p>
          <p>The activation function is designed to imitate the action potential when a neuron fires in the brain.</p>
          <p>Think of the activation function as a dam that only leaks water (overflows) past a certain threshold </p>
          <p>Here are some examples of activation functions:</p>
          <ul>
            <li>Binary Step Function: If x is posistive the function outputs a 1. If x is negative the function outputs a 0. If x is 0 the function outputs 0.5.</li>
            <li><Image src="/images/perceptron/binary_step.svg" alt="Graph of Binary Step Function" width={200} height={200}/></li>
            <li>RELU: If x is posistive the function outputs x, otherwise the function outputs a 0.</li>
            <li><Image src="/images/perceptron/relu.svg" alt="Graph of RELU Function" width={200} height={200}/></li>
            <li>Sigmoid: Outputs <InlineMath math="\frac{1}{1+e^{-x}}"/></li>
            <li><Image src="/images/perceptron/sigmoid.svg" alt="Graph of Sigmoid Function" width={200} height={200}/></li>
          </ul>
          <p>The activation function acts as a control-flow for the information in a neural network, only letting the output through past a certain threshold or condition</p>
          <p>In the binary classification problem, the activation function is what determines if the neuron classifies the point in the data as A or B</p>
          <p>If we were using a nonlinear function like Sigmoid the output represents the probability the point is part of group A or B</p>
        </TextBox>

        <TextBox>
          <h3>Training</h3>
          <p>Training a perceptron is done through a process called gradient descent</p>
          <p>If you are familiar with calculus, in one dimension gradient descent looks like <InlineMath math="x_{new}=x_{old}-\text{learning rate}*f'(x_{old})"/></p>
          <p>Here's an animaton of Gradient Descent (Source: <Link className="underline" href="https://www.kaggle.com/code/trolukovich/animating-gradien-descent#%22Classic%22-example">Aleksandr Antonov</Link>)</p>
          <Image src="/images/perceptron/gradient_descent.gif" alt="A gif showing gradient descent down a parabola" width={500} height={500}/>
          <p>So how do we do something similar but with our training data and weights?</p>
          <p>Well, in this case, we can use the error/cost function, or the difference between the expected output and our perceptron's output, as our rate of change</p>
          <p>Plugging everything back in, the new formula for gradient descent would look like <InlineMath math="\mathbf{x_{new}}=\mathbf{x_{old}}-\text{learning rate}*(\text{expected} - \mathbf{w}^T\mathbf{x})"/></p>
        </TextBox>

        <TextBox>
          <h3>Geometrical Intuition</h3>
          <p>Another way of thinking about perceptron is to visualize the weight vector as perpendicular to the boundary line separating the two points</p>
          <Image src="/images/perceptron/intuition.svg" alt="An image showing the perependicular weight vector and two different vectors x" width={500} height={500}/>
          <p>This is because another way of expressing <InlineMath math="\mathbf{w}^T\mathbf{x}"/> is <InlineMath math="||\mathbf{w}||\cdot||\mathbf{x}|| \cdot \cos(\theta)"/></p>
          <p>Whenever the angle between the <b>x</b> vector and <b>w</b> is less than 90 degrees, such as with <InlineMath math="\mathbf{x_1}"/>, <InlineMath math="\cos(\theta)"/> will be positive which will lead the activation function to classify x in group 1 </p>
          <p>Whenever the angle between the <b>x</b> vector and <b>w</b> is greater than 90 degrees, such as with <InlineMath math="\mathbf{x_2}"/>, <InlineMath math="\cos(\theta)"/> will be negative which will lead the activation function to classify x in group 0 </p>
          <p>If the vector is mislabeled as positive, it will be subtracted from <b>w</b> and <b>w</b> will go further away from the vector, leading the boundary line to eventually shift away from <b>x</b> and make it 0</p>
          <p>If the vector is mislabeled as 0, it will be added to <b>w</b> and <b>w</b> will go towards the vector, leading the boundary line to eventually shift towards x and make it positive</p>
          <p>Here's an animation depicting the training process (modified based on <Link className="underlined" href="https://github.com/ayusek/Perceptron-Animation/tree/master">https://github.com/ayusek/Perceptron-Animation/tree/master</Link>):</p>
          <Image src="/images/perceptron/perceptron_animated.gif" alt="An animation showing how the perceptron learns a binary classification problem" width={500} height={500}/>
          <p>The left side shows all the data points, as well as the weight vector in yellow</p>
          <p>the left side also shows the current training point either in the mislabeled color or green if it was labeled correctly</p>
          <p>The right side shows all of the training set so far</p>
        </TextBox>

        <h3>Perceptron Code:</h3>
        <CodeDisplay file_name="perceptron.py"/>

        <TextBox>
          <h3>Limitations</h3>
          <p>Unfortunately, not all problems are Linearly Separable. One classic example is a XOR gate:</p>
          <Image src="/images/perceptron/xor.svg" alt="A XOR Truth Table with 2 lines necessary for separating the 1s and 0s" width={500} height={500}/>
          <p>As you can see by the above image, it's impossible to separate the 1s and 0s using only one line, so multiple lines are needed</p>
          <p>For problems that aren't linearly separable, we instead use a <Link className="underline" href="/neural_networks/mlp">Multi-Layer Perceptron</Link></p>
        </TextBox>

    </div>
  )
}
