import numpy as np

LEARNING_RATE = 0.1
def sigmoid(x: float) -> float:
    return 1 / (1 + np.exp(-x))

class Perceptron:
    def __init__(self, initial_weights: np.ndarray[np.float64], bias: np.float64) -> None:
        self._inputs = np.array([])
        self._weights = np.append(initial_weights, bias) # we append the bias to the weights so that the sum can be done all in one matrix operation  

    def calculate_sum(self) -> float:
        """matrix multiplication of xt*w which is equivalent to the sum of xi*wi"""
        return np.transpose(self._inputs) @ self._weights
    
    def evaluate(self) -> float:
        """runs the activation function on the sum of the current inputs and weights"""
        return sigmoid(self.calculate_sum())
    
    def test(self, inputs: np.ndarray[np.float64]) -> float:
        """outputs the value of the inputs without changing the weights"""
        self._inputs = np.append(inputs, 1) # we append one to the inputs so that the sum with the bias can be done all in one matrix operation
        return self.evaluate()
    
    def train(self, inputs: np.ndarray[np.float64], expected: np.ndarray[np.float64]) -> None:
        """changes the weights according to the training input"""
        self._inputs = np.append(inputs, 1) # we append one to the inputs so that the sum with the bias can be done all in one matrix operation
        self._weights = self._weights + LEARNING_RATE*(expected-self.evaluate())*self._inputs

def train_perceptron(p: Perceptron, training_dataset: np.ndarray[np.float64], expected: np.ndarray[np.float64]):
    """trains for each set of inputs and expected value"""
    for inputs, expected in zip(training_dataset, expected):
        p.train(inputs, expected)

# the training dataset we'll be using
training_dataset = np.array([
    [-0.714, -5.712],
    [7.468, 7.468],
    [7.819, 15.638],
    [7.346, 22.038],
    [3.779, 37.79],
    [4.294, 38.646],
    [-6.215, -49.72],
    [-4.335, -30.345],
    [-5.009, -40.072],
    [-9.197, -9.197],
    [2.921, 8.763],
    [-1.218, -7.308],
    [-3.583, -21.498],
    [-9.48, -47.4],
    [-4.016, -36.144],
    [9.817, 78.536],
    [-7.451, -52.157],
    [7.317, 51.219],
    [-7.3, -36.5],
    [-9.795, -48.975],
])

# the expected values for the training dataset
expected_training = np.array([0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0])

if __name__ == '__main__':
    # the test input
    x = np.array([0.0, 8])

    # makes the Perceptron object
    initial_weights = np.array([-1.0, -1.0])
    bias = 0.0
    p = Perceptron(initial_weights, bias)

    # trains and prints out the test results and weights
    train_perceptron(p, training_dataset, expected_training)
    print(p.test(x))
    print([round(x, 3) for x in p._weights])

"""
---------------------------------------------------------------------------------------
Outputs:
0.9842688678767773
[-0.03, 0.518, -0.011]
---------------------------------------------------------------------------------------
"""