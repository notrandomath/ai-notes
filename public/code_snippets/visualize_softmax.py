import numpy as np
import matplotlib.pyplot as plt

def softmax(x):
    exp_x = np.exp(x - np.max(x))  # subtracting max(x) for numerical stability
    return exp_x / exp_x.sum(axis=0)

def visualize_softmax(data):
    # Plot before softmax
    plt.figure(figsize=(12, 4))
    plt.subplot(1, 2, 1)
    plt.scatter(range(len(data)), data, color='black')
    plt.title('Before Softmax')

    # Plot after softmax
    plt.subplot(1, 2, 2)
    softmax_data = softmax(data)
    plt.scatter(range(len(softmax_data)), softmax_data, color='red')
    plt.title('After Softmax')

    plt.show()

# Example usage
    
np.random.seed(42)  # for reproducibility
data = np.random.rand(50) * 5  # Generate an array of 5 random numbers
visualize_softmax(data)