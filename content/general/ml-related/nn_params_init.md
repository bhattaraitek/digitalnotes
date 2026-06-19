---
title: Parameter initialization
date: 2026-06-19
draft: false
tags:
    - machine learning
    - parameters
    - initialization
---

- Bad initialisation of parameters results in dead neurons, and model stops learning from early stage.The weights never gets updated because the signal (gradient) couldn't flow backward through the "dead" neurons.

## Some common initialization techniques in DL
- **Zero initialization**: All weights and biases are initialized to zero. Not common. Leads to symmetry in the gradients.

- **Random initialization**: All weights and biases are initialized randomly from uniform or normal distribution. Most common.

- [Xavier Initialisation](https://arxiv.org/abs/1704.08863): Weights are initialized with normal distribution with mean 0 and variance of sqrt(1/n), where n is no. of neurons in the previous layer. Good for sigmoid activations.

- [Kaiming He Initialisation](https://arxiv.org/pdf/1502.01852): Weights are initialized with normal distribution with mean 0 and variance of sqrt(2/n), where n is no. of neurons in the previous layer. Good for ReLU activations.

- **Orthogonal initialization**: Weights are initialized with orthogonal matrix, presertiving gradient norm during backpropagation
- Uniform initialization: All weights are initialized with uniform distribution. Less common.

- **Constant initialization**: All weights and biased are initialized to constant value. Very rarely used.

> There is no one initialization approach that works for all situation. So, it is necessary to experiment with different techniques to find optimal approach.

# Sources
- [Parameter Initialization types](https://medium.com/@tejpal.abhyuday/deep-learning-part-3-parameter-initialization-backpropagation-and-types-of-error-involved-6aa4f4e589bb)


