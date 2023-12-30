import random
import math
import numpy as np

for i in range(20):
    x = round(random.uniform(-100.0, 100.0), 2)
    y = 1/math.pow(x-30, 3) + 60
    print(f'[{x}, {y}],')    

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
print([1.0 if x[0] > 0 else 0.0 for x in training_dataset])