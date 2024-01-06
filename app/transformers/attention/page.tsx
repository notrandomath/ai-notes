import PreReq from "@/app/components/prereq"
import { PreReqDictionary } from '../../../types';
import Image from "next/image"
import Link from "next/link";
import TextBox from "@/app/components/textbox";
import 'katex/dist/katex.min.css';
import { InlineMath } from "react-katex";
import BertViz from "@/app/components/bertviz";

const prereqs : PreReqDictionary  = {
    "Linear Algebra": "https://pabloinsente.github.io/intro-linear-algebra",
}

export default function AttentionPage() {
  return (
    <div className="flex flex-col items-center my-[25px] space-y-[25px]">
        <PreReq prereqs={prereqs}/>
        <h1>Attention</h1>
        <TextBox>
            <h3>Introduction</h3>
            <p>Ever since 2017 when the paper "Attention Is All You Need" was published, the Transformer architecture became the dominant architecture in many AI models.</p>
            <p>The main improvement transformers made over other architectures like <Link className="underline" href="https://medium.com/swlh/a-simple-overview-of-rnn-lstm-and-attention-mechanism-9e844763d07b">RNNs and LSTMs</Link> is the use of the attention mechanism.</p>
            <p>Attention measures a word's context in a sentence. For example, consider this set of two sentences:</p>
            <ul>
                <li>"I left your red book at home."</li>
                <li>"Dejé tu libro rojo en casa."</li>
            </ul>
            <p>If you translated this sentence word for word you would run into some issues. First of all, "dejé" corresponds to 2 words, "I left," and second of all in Spanish "libro rojo" directly translates to "book red" since adjectives go after the word.</p>
            <p>One solution to these issues is attention, or in other words having each output word focus on key words in the input sentence. For example, "dejé" would pay attention especially to "I left" and "rojo" to "red."</p>
            <Image src="/images/attention/attention_en_es.png" alt="A diagram showing attention for the english to spanish translation" width={500} height={200}/>
            <p>The mechanism of attention is a really powerful concept; it turns out that attention can even be used in the source sentence to understand the "meaning" of words.</p>
            <Image src="/images/attention/attention_en_en_full.png" alt="A diagram showing attention for the english sentence in isolation" width={500} height={200}/>
            <p>If you pay attention (no pun intended) to the above image, you'll notice the model starting to pick up on patterns in the language. For example, it correlates the word "left" with "at" because it knows the phrase "left ... at" is fairly common.</p>
            <Image src="/images/attention/attention_en_en.png" alt="A diagram showing attention for the english sentence in isolation" width={500} height={200}/>
        </TextBox>

        <TextBox>
            <h3>Softmax</h3>
            <p>When calculating attention, we often want to focus on the most prominent results. In machine learning we do this with what's called a softmax function.</p>
            <p>One way softmax can be calculated is <InlineMath math="\frac{e^{x_i}}{\sum_{j=1}^n{e^{x_{j}}}}"/> for every element <InlineMath math="x_{i}"/> in the data.</p>
            <p>Here's a visual of the effect it has on data:</p>
            <Image src="/images/attention/softmax.png" alt="A diagram showing how softmax isolates the most prominent " width={800} height={500}/>
        </TextBox>

        <TextBox>
            <h3>Scaled Dot-Product Attention</h3>
            <p>Scaled Dot-Product Attention is the base component of the attention</p>
            <p>When calculating attention, the weight matrix is split into 3 parts: query, key, and value</p>
            <p>You can think of each of these as analogous to their information retrieval counterparts:</p>
            <ul>
                <li>The query is the current word we wish to find. For example, when translating from English to Spanish, we take the key and value from English and the query from Spanish.</li>
                <li>The key is the information we have.</li>
                <li>The value is the information that best relates to the query and keys.</li>
            </ul>
            <p>The below image is the Scaled Dot-Product diagram from the original Attention is All You Need paper.</p>
            <Image src="/images/attention/sdpa.png" alt="the diagram from the original Attention is All You Need Paper that shows Scaled Dot-Product Attention" width={500} height={200}/>
            <p>We first start by matrix multiplying the query and key (<InlineMath math="\mathbf{Q}\mathbf{K}^T"/>)</p>
            <p>Then, we scale the result by the square root of the dimension of the key (<InlineMath math="\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{k}}"/>). This is the "scaled" part of the Scaled Dot-Product Attention and ensures the dot product is not too large for softmax.</p>
            <p>Then, sometimes we apply a mask to make sure when we're predicting the next word in training we don't cheat by looking into future words, so the attention only applies to words before it.</p>
            <p>Finally we take a softmax to only process the most relevant words and combine that with the values.</p>
            <p>Overall, this combines to the formula in the paper: <InlineMath math="\text{Attention}(\mathbf{Q},\mathbf{K},\mathbf{V})=\text{softmax}(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{k}})\mathbf{V}"/></p>
        </TextBox>
        
        <TextBox>
            <h3>Multi-Head Attention</h3>
            <p>With Multi-Head Attention you can think of it as a bunch of individually learned weights that apply a linear transformation on the input (e.g. <InlineMath math="\mathbf{W}^K\mathbf{X}"/> for the key matrix)</p>
            <p>Each of these individually learned weights (<InlineMath math="W^K_i X_i"/>) is then fed through the scaled dot-product attention in parallel</p>
            <ul><li>This is so that the attention mechanism can take advantage of GPU architecture where parallel computing is more efficient than sequential computing</li></ul>
            <p>Finally, all of the scaled-dot product attentions are concatenated (combined) into one big matrix which then has its own separate learned weight <InlineMath math="\mathbf{W}^O"/></p>
            <p>Here is a diagram of the overall process from Attention Is All You Need:</p>
            <Image src="/images/attention/mha.png" alt="the diagram from the original Attention Is All You Need Paper that shows Multi-Head Attention" width={500} height={200}/>
        </TextBox>

        <TextBox>
            <h3>Self-Attention and Cross-Attention</h3>
            <p>In a transformer model, there exists two types of attention mechanisms:</p>
            <p>In self-attention, the key, query, and value are all the same.</p>
            <p>Whereas in cross-attention, they come from different sources.</p>
            <p>Both the Encoder and Decoder have self-attention in order to understand the context and meanings of their input sequence.</p>
            <p>The decoder has a cross-attention in order to translate from one format to the other, such as one language to another language.</p>
            <p>Here's an image explaining this distinction. Notice where the key, queries, and values come from in each Multi-Head Attention (source: <Link className="underline break-words" href="https://towardsdatascience.com/attention-please-85bd0abac41">https://towardsdatascience.com/attention-please-85bd0abac41</Link>):</p>
            <Image src="/images/attention/transformer.webp" alt="image showing flow of key query and value throughout the transformer model" width={800} height={200}/>
        </TextBox>

        <h3>Visualization:</h3>
        <p className="w-[60%] break-words">Here's a visualization of attention for our example (using BertViz: <Link className="underline" href="https://github.com/jessevig/bertviz">https://github.com/jessevig/bertviz</Link>, link to Github Gist: <Link className="underline" href="https://gist.github.com/notrandomath/4638812d141d3c9adf4f104a167d478f">https://gist.github.com/notrandomath/4638812d141d3c9adf4f104a167d478f</Link>)</p>
        <BertViz/>

        <TextBox>
            <h3>Additional Materials</h3>
            <p className="break-words">https://www.comet.com/site/blog/explainable-ai-for-transformers/</p>
            <p className="break-words">https://stats.stackexchange.com/a/424127</p>
            <p className="break-words">https://www.youtube.com/watch?v=kCc8FmEb1nY&t=5047s</p>
        </TextBox>
    </div>
  )
}